/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ENSGenericScheme,
  ENSGenericSchemeInterface,
} from "../ENSGenericScheme";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_avatar",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "NewCallProposal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_avatar",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
    ],
    name: "ProposalDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_avatar",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_genericCallReturnValue",
        type: "bytes",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_avatar",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "_param",
        type: "int256",
      },
    ],
    name: "ProposalExecutedByVotingMachine",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "avatar",
    outputs: [
      {
        internalType: "contract Avatar",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
    ],
    name: "balanceOfStakingToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
    ],
    name: "burnReputation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "contractToCall",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
      {
        internalType: "int256",
        name: "_decision",
        type: "int256",
      },
    ],
    name: "executeProposal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
    ],
    name: "getTotalReputationSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract Avatar",
        name: "_avatar",
        type: "address",
      },
      {
        internalType: "contract IntVoteInterface",
        name: "_votingMachine",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_voteParams",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_contractToCall",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
    ],
    name: "mintReputation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "organizationProposals",
    outputs: [
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "exist",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "passed",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "proposalsInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "contract Avatar",
        name: "avatar",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_descriptionHash",
        type: "string",
      },
    ],
    name: "proposeCall",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
    ],
    name: "reputationOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_proposalId",
        type: "bytes32",
      },
    ],
    name: "stakingTokenTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "voteParams",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "votingMachine",
    outputs: [
      {
        internalType: "contract IntVoteInterface",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class ENSGenericScheme__factory {
  static readonly abi = _abi;
  static createInterface(): ENSGenericSchemeInterface {
    return new utils.Interface(_abi) as ENSGenericSchemeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ENSGenericScheme {
    return new Contract(address, _abi, signerOrProvider) as ENSGenericScheme;
  }
}
