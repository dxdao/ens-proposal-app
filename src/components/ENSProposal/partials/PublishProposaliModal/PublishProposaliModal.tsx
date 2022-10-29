import { ContractTransaction } from '@ethersproject/contracts'
import { FC } from 'react'
import styled from 'styled-components'

import { Button } from '../../../../../ui/components/Button'
import {
  Modal,
  Content as ModalContentBase,
  Footer as ModalFooterBase,
  Header as ModalHeaderBase,
  Title as ModalTitle,
} from '../../../../../ui/components/Modal'
import { getEtherscanExplorerLink } from '../../../../utils/explorer'
import { IPFSPinStatus, OnChainTransactionStatus } from '../../types'

const ModalHeader = styled(ModalHeaderBase)`
  padding-bottom: 0;
  justify-content: center;
`

const ModalContent = styled(ModalContentBase)`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  flex-grow: 1;
  > p {
    margin-bottom: 10px;
  }
`

const ModalFooter = styled(ModalFooterBase)`
  padding-top: 0;
  justify-content: center;
`

export interface PublishProposalModalProps {
  cancel: () => void
  ipfsPinStatus: IPFSPinStatus
  onChainTxStatus: OnChainTransactionStatus
  isPublishing: boolean
  isPublished: boolean
  publishError: Error | undefined
  transaction: ContractTransaction | undefined
}

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
`

const Step = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

const IPFSPinStatusStep: FC<{
  status: IPFSPinStatus
}> = ({ status }) => {
  const content = () => {
    switch (status) {
      case IPFSPinStatus.PENDING:
      case IPFSPinStatus.PINNING:
        return <>Pinning to IPFS...</>
      case IPFSPinStatus.SUCCESS:
        return <>Pinned to IPFS</>
      case IPFSPinStatus.ERROR:
        return <>Error pinning to IPFS</>
      default:
        return <>Unknown IPFS pinning status</>
    }
  }

  return <Step>{content()}</Step>
}

const OnChainTxStatusStep: FC<{
  status: OnChainTransactionStatus
  transaction?: ContractTransaction
}> = ({ status, transaction }) => {
  const etherScanLink = transaction && (
    <a
      href={getEtherscanExplorerLink(
        transaction.chainId,
        transaction.hash,
        'transaction'
      )}
      target='_blank'
      rel='noreferrer'
      title='View on Etherscan'
    >
      View on Etherscan
    </a>
  )

  const content = () => {
    switch (status) {
      case OnChainTransactionStatus.PENDING:
        return <>Publishing proposal... {etherScanLink}</>
      case OnChainTransactionStatus.SUCCESS:
        return <>Published proposal. {etherScanLink}</>
      case OnChainTransactionStatus.ERROR:
        return <>Error publishing proposal {etherScanLink}</>
      default:
        return null
    }
  }

  return <Step>{content()}</Step>
}

/**
 * A modal to handle proposal publishing
 * @returns
 */
export function PublishProposalModal({
  cancel,
  ipfsPinStatus,
  onChainTxStatus,
  isPublished,
  publishError,
  transaction,
}: PublishProposalModalProps) {
  const modalContent = () => {
    if (publishError) {
      return (
        <div>
          <p>{publishError.message}</p>
        </div>
      )
    }

    return (
      <>
        <StepsList>
          <IPFSPinStatusStep status={ipfsPinStatus} />
          <OnChainTxStatusStep
            status={onChainTxStatus}
            transaction={transaction}
          />
        </StepsList>
      </>
    )
  }

  return (
    <Modal maxWidth='560px'>
      <ModalHeader>
        <ModalTitle>Publish Proposal</ModalTitle>
      </ModalHeader>
      <ModalContent>{modalContent()}</ModalContent>
      <ModalFooter>
        {(!transaction || publishError || isPublished) && (
          <Button onClick={cancel}>Cancel</Button>
        )}
      </ModalFooter>
    </Modal>
  )
}
