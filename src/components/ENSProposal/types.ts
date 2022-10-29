export enum IPFSPinStatus {
  UNKNOWN = 'UNKNOWN',
  PENDING = 'PENDING',
  PINNING = 'PINNING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export enum OnChainTransactionStatus {
  UNKNOWN = 'UNKNOWN',
  PENDING = 'PENDING',
  MINING = 'MINING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface IDAOStackProposal {
  /**
   * The proposal description
   */
  description: string
  /**
   * Proposal title
   */
  title: string
  /**
   * The tag of the proposal
   */
  tags: string[]
  /**
   * A reference to the proposal outside of the DAO.
   * DAOtalk, GitHub, etc.
   */
  url: string
}
