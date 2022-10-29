import { ChainId, SupportedChainId } from '../constants/chains'

/**
 * List of ENS endpoints.
 */
export const ENS_SUBGRAPH_ENDPOINTS: Record<SupportedChainId, string> = {
  [ChainId.MAINNET]: 'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
}
