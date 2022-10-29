import { chain } from 'wagmi'

export enum ChainId {
  MAINNET = 1,
}

/**
 * List of chain IDs.
 */
export const SUPPORTED_CHAIN_IDS = [chain.mainnet.id] as const

/**
 *
 */
export type SupportedChainId = typeof SUPPORTED_CHAIN_IDS[0]

/**
 * List of chain IDs that are supported in the current environment: production or development.
 */
export const ENV_SUPPORTED_CHAIN_IDS = SUPPORTED_CHAIN_IDS
