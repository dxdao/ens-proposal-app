import styled from 'styled-components'

import { Flex } from '../../../ui/components/Flex'
import { MEDIA_WIDTHS } from '../../../ui/theme'

export const HeaderWrapper = styled(Flex)`
  display: flex;
  padding: 27px 90px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    padding: 27px 10px;
  }
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`
export const AccountAndLinks = styled(Flex)`
  align-items: center;
  gap: 50px;
  @media (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    display: none;
  }
`
export const NavOption = styled.div`
  font-size: 18px;
  font-weight: 600;
`
