import '@rainbow-me/rainbowkit/styles.css'
import '../../ui/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import type { AppProps } from 'next/app'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import {
  FixedGlobalStyle,
  ThemedGlobalStyle,
  ThemeProvider,
} from '../../ui/theme'
import { defaultClient } from '../apollo/client'

if (typeof window !== 'undefined' && window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

const { chains, provider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
)

const appName = 'DXdao ENS Proposal'

const { connectors } = getDefaultWallets({
  appName,
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          modalSize='compact'
          appInfo={{
            appName,
          }}
          initialChain={chain.mainnet}
          theme={lightTheme({
            accentColor: '#3c59fd',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          <ApolloProvider client={defaultClient}>
            <FixedGlobalStyle />
            <ThemeProvider>
              <ThemedGlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          </ApolloProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}
