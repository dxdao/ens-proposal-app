import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

import DXdaoLogo from '../../../assets/svg/dxdao-logo.svg'

import { HeaderWrapper } from './styleds'

export function Header() {
  return (
    <HeaderWrapper>
      <Link href='/' title='DXdao'>
        <DXdaoLogo width={50} />
      </Link>

      <ConnectButton />
    </HeaderWrapper>
  )
}
