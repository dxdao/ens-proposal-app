import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

import { ChainId, SupportedChainId } from '../constants'

import { ENS_SUBGRAPH_ENDPOINTS } from './endpoints'

export const defaultClient = new ApolloClient({
  uri: ENS_SUBGRAPH_ENDPOINTS[ChainId.MAINNET],
  cache: new InMemoryCache(),
})

export const ensClients: Record<
  SupportedChainId,
  ApolloClient<NormalizedCacheObject>
> = {
  [ChainId.MAINNET]: defaultClient,
}
