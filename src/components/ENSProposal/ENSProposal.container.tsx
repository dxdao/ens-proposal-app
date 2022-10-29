import { encodeContenthash } from '@ensdomains/ui'
import { ContractReceipt, ContractTransaction } from '@ethersproject/contracts'
import { namehash } from '@ethersproject/hash'
import { zodResolver } from '@hookform/resolvers/zod'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import createDebug from 'debug'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactMarkdown from 'react-markdown'
import Select from 'react-select'
import styled from 'styled-components'
import { useAccount, useSigner } from 'wagmi'

import { Button } from '../../../ui/components/Button'
import { Card as CardBase, CardBody } from '../../../ui/components/Card'
import { FormGroup, Input, TextArea } from '../../../ui/components/form'
import { FormWrapper } from '../../../ui/components/form/FormGroup'
import { H2 } from '../../../ui/typography'
import {
  DAOSTACK_ENS_GENERIC_SCHEME_ADDRESS,
  DXDAO_AVATAR_ADDRESS,
} from '../../constants'
import pinJSONToIPFS from '../../functions'
import { ENSGenericScheme__factory } from '../../generated/contracts'
import { ENSPublicResolver__factory } from '../../generated/contracts/factories'
import { useGetENSDomainsByAddress } from '../../hooks/useGetENSDomainsByAddress'
import { Loader } from '../Loader'

import { PublishProposalModal } from './partials/PublishProposaliModal'
import { IPFSPinStatus, OnChainTransactionStatus } from './types'
import { ensProposalSchema, IENSProposalFormContext } from './validator'

enum ENSProposalAction {
  SET_CONTENT_HASH = 'SET_CONTENT_HASH',
}

interface ENSProposalActionValue_Label {
  label: string
  value: string
}

const ensProposalActionList: ENSProposalActionValue_Label[] = [
  { value: ENSProposalAction.SET_CONTENT_HASH, label: 'Set Content Hash' },
]

const debug = createDebug('ENSProposal')

export function ENSProposalContainer() {
  const formContext = useForm<IENSProposalFormContext>({
    resolver: zodResolver(ensProposalSchema),
    defaultValues: {
      proposalAction: ensProposalActionList[0],
      proposal: {
        description: '',
        title: '',
        tags: [],
        url: '',
      },
      ensName: '',
      ensContentHash: '',
    },
  })

  const [ipfsPinStatus, setIPFSPinStatus] = useState<IPFSPinStatus>(
    IPFSPinStatus.UNKNOWN
  )
  const [onChainTxStatus, setOnChainTxStatus] =
    useState<OnChainTransactionStatus>(OnChainTransactionStatus.UNKNOWN)

  const [isPublishProposalModalOpen, setIsPublishProposalModalOpen] =
    useState(false)
  const [isPublishingProposal, setIsPublishingProposal] = useState(false)
  const [publishProposalTransaction, setPublishProposalTransaction] =
    useState<ContractTransaction>()
  const [
    publishProposalTransactionReceipt,
    setPublishProposalTransactionReceipt,
  ] = useState<ContractReceipt>()
  const publishProposalAbortController = useRef<AbortController>()
  const [publishProposalError, setPublishProposalError] = useState<Error>()

  const account = useAccount()
  const { data: signer } = useSigner()

  const [preview, setPreview] = useState<boolean>(false)

  const { data, loading } = useGetENSDomainsByAddress(DXDAO_AVATAR_ADDRESS) // Fetch the domains owned by the DXdao avatar
  const ensNames = data

  /**
   * Handles proposal creation
   * @returns
   */
  const onSubmitValid = async (data: IENSProposalFormContext) => {
    if (!signer) return

    setIsPublishProposalModalOpen(true)
    setPublishProposalError(undefined)

    try {
      setIsPublishingProposal(true)
      setIPFSPinStatus(IPFSPinStatus.PINNING)
      setOnChainTxStatus(OnChainTransactionStatus.PENDING)

      // Upload the proposal to IPFS
      const proposalDescriptionPinResponse = await pinJSONToIPFS(
        {
          pinataJWTKey: process.env.PINATA_JWT_KEY,
        },
        data.proposal
      )

      setIPFSPinStatus(IPFSPinStatus.SUCCESS)

      const nesPublicResolverInterface =
        ENSPublicResolver__factory.createInterface()

      const ensGenericSchemeContract = ENSGenericScheme__factory.connect(
        DAOSTACK_ENS_GENERIC_SCHEME_ADDRESS,
        signer
      )

      const node = namehash(data.ensName)
      const nextContentHashEncoded = encodeContenthash(data.ensContentHash)
        .encoded as unknown as string

      const callDataToENSPublicResolver =
        nesPublicResolverInterface.encodeFunctionData('setContenthash', [
          node,
          nextContentHashEncoded,
        ])

      debug({ callDataToENSPublicResolver })

      setOnChainTxStatus(OnChainTransactionStatus.PENDING)

      const proposeCallTx = await ensGenericSchemeContract.proposeCall(
        callDataToENSPublicResolver,
        0,
        proposalDescriptionPinResponse.IpfsHash
      )

      setPublishProposalTransaction(proposeCallTx)

      const proposeCallTxReceipt = await proposeCallTx.wait()

      setOnChainTxStatus(OnChainTransactionStatus.SUCCESS)

      setPublishProposalTransactionReceipt(proposeCallTxReceipt)
    } catch (error) {
      console.error(error)
      setIsPublishingProposal(false)
      setOnChainTxStatus(OnChainTransactionStatus.ERROR)

      if (
        (error as Error)?.message
          ?.toLowerCase()
          ?.includes('User denied transaction signature')
      ) {
        setPublishProposalError(new Error('User denied transaction signature'))
      }
    }
  }

  const onSubmitInvalid = (data: any) => {
    console.error(data)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Card>
      {account.isDisconnected ? (
        <ConnectWalletOverlay>
          <ConnectButton />
        </ConnectWalletOverlay>
      ) : null}
      <CardBody>
        <FormWrapper
          onSubmit={formContext.handleSubmit(onSubmitValid, onSubmitInvalid)}
        >
          <H2>Create ENS Proposal</H2>
          <FormGroup>
            <p>
              Propose an ENS name update to DXdao. The ENS name will be updated
              if the proposal is passed.
            </p>
          </FormGroup>
          <FormGroup>
            <Select
              options={ensNames?.map(({ name }) => ({
                value: name,
                label: name,
              }))}
              onChange={(option) => {
                option?.value && formContext.setValue('ensName', option.value)
              }}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              isMulti={false}
              isSearchable={true}
              placeholder='Select an ENS name'
            />
          </FormGroup>
          <FormGroup>
            <Select
              options={ensProposalActionList}
              value={formContext.watch('proposalAction')}
              onChange={(option) =>
                option && formContext.setValue('proposalAction', option)
              }
              components={{
                IndicatorSeparator: null,
                DropdownIndicator: null,
              }}
              isMulti={false}
              placeholder='Select the ENS action'
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder='ENS content hash, e.g. ipfs://Qm..., bzz://..., etc.'
              {...formContext.register('ensContentHash')}
            />
          </FormGroup>
          <FormGroup>
            <Input
              {...formContext.register('proposal.title')}
              placeholder='Update swapr.eth to v1.2'
            />
          </FormGroup>
          <FormGroup>
            {preview ? (
              <ReactMarkdown>
                {formContext.watch('proposal.description')}
              </ReactMarkdown>
            ) : (
              <TextArea
                {...formContext.register('proposal.description')}
                placeholder='A description of the proposal'
              />
            )}
          </FormGroup>
          <FormGroup>
            <ButtonGroup>
              <Button type='button' onClick={() => setPreview(!preview)}>
                Preview
              </Button>
              <Button
                type='submit'
                title='Propose'
                disabled={
                  !formContext.formState.isValid ||
                  formContext.formState.isSubmitting
                }
              >
                Publish
              </Button>
            </ButtonGroup>
          </FormGroup>
        </FormWrapper>
      </CardBody>
      {isPublishProposalModalOpen && (
        <PublishProposalModal
          ipfsPinStatus={ipfsPinStatus}
          onChainTxStatus={onChainTxStatus}
          isPublishing={isPublishingProposal}
          isPublished={publishProposalTransactionReceipt?.status === 1}
          publishError={publishProposalError}
          transaction={publishProposalTransaction}
          cancel={() => {
            setIsPublishProposalModalOpen(false)
            publishProposalAbortController?.current?.abort()
          }}
        />
      )}
    </Card>
  )
}

const ConnectWalletOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const Card = styled(CardBase)`
  min-height: 300px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
