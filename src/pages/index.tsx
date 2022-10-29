import Head from 'next/head'
import styled from 'styled-components'

import { Container } from '../../ui/components/Container'
import { PageLayout } from '../../ui/layouts'
import { ENSProposalContainer } from '../components/ENSProposal'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>DXdao ENS Proposal</title>
      </Head>
      <PageLayout>
        <PageContainer>
          <Container>
            <ENSProposalContainer />
          </Container>
        </PageContainer>
      </PageLayout>
    </>
  )
}
