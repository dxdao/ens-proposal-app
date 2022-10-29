import styled from 'styled-components'
import { Header } from '../../src/components/Header'

interface PageLayoutProps {
  children: React.ReactNode
}

const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledPageLayoutContent = styled.main`
  flex: 1;
`

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <StyledPageLayout>
      <Header />
      <StyledPageLayoutContent>{children}</StyledPageLayoutContent>
    </StyledPageLayout>
  )
}
