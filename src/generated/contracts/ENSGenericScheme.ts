/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ENSGenericSchemeInterface extends utils.Interface {
  functions: {
    "avatar()": FunctionFragment;
    "balanceOfStakingToken(address,bytes32)": FunctionFragment;
    "burnReputation(uint256,address,bytes32)": FunctionFragment;
    "contractToCall()": FunctionFragment;
    "execute(bytes32)": FunctionFragment;
    "executeProposal(bytes32,int256)": FunctionFragment;
    "getTotalReputationSupply(bytes32)": FunctionFragment;
    "initialize(address,address,bytes32,address)": FunctionFragment;
    "mintReputation(uint256,address,bytes32)": FunctionFragment;
    "organizationProposals(bytes32)": FunctionFragment;
    "proposalsInfo(address,bytes32)": FunctionFragment;
    "proposeCall(bytes,uint256,string)": FunctionFragment;
    "reputationOf(address,bytes32)": FunctionFragment;
    "stakingTokenTransfer(address,address,uint256,bytes32)": FunctionFragment;
    "voteParams()": FunctionFragment;
    "votingMachine()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "avatar"
      | "balanceOfStakingToken"
      | "burnReputation"
      | "contractToCall"
      | "execute"
      | "executeProposal"
      | "getTotalReputationSupply"
      | "initialize"
      | "mintReputation"
      | "organizationProposals"
      | "proposalsInfo"
      | "proposeCall"
      | "reputationOf"
      | "stakingTokenTransfer"
      | "voteParams"
      | "votingMachine"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "avatar", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOfStakingToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "burnReputation",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "contractToCall",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalReputationSupply",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintReputation",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "organizationProposals",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalsInfo",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeCall",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "reputationOf",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingTokenTransfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "voteParams",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingMachine",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "avatar", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfStakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnReputation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractToCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalReputationSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintReputation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "organizationProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalsInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reputationOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "voteParams", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingMachine",
    data: BytesLike
  ): Result;

  events: {
    "NewCallProposal(address,bytes32,bytes,uint256,string)": EventFragment;
    "ProposalDeleted(address,bytes32)": EventFragment;
    "ProposalExecuted(address,bytes32,bytes)": EventFragment;
    "ProposalExecutedByVotingMachine(address,bytes32,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewCallProposal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ProposalExecutedByVotingMachine"
  ): EventFragment;
}

export interface NewCallProposalEventObject {
  _avatar: string;
  _proposalId: string;
  _callData: string;
  _value: BigNumber;
  _descriptionHash: string;
}
export type NewCallProposalEvent = TypedEvent<
  [string, string, string, BigNumber, string],
  NewCallProposalEventObject
>;

export type NewCallProposalEventFilter = TypedEventFilter<NewCallProposalEvent>;

export interface ProposalDeletedEventObject {
  _avatar: string;
  _proposalId: string;
}
export type ProposalDeletedEvent = TypedEvent<
  [string, string],
  ProposalDeletedEventObject
>;

export type ProposalDeletedEventFilter = TypedEventFilter<ProposalDeletedEvent>;

export interface ProposalExecutedEventObject {
  _avatar: string;
  _proposalId: string;
  _genericCallReturnValue: string;
}
export type ProposalExecutedEvent = TypedEvent<
  [string, string, string],
  ProposalExecutedEventObject
>;

export type ProposalExecutedEventFilter =
  TypedEventFilter<ProposalExecutedEvent>;

export interface ProposalExecutedByVotingMachineEventObject {
  _avatar: string;
  _proposalId: string;
  _param: BigNumber;
}
export type ProposalExecutedByVotingMachineEvent = TypedEvent<
  [string, string, BigNumber],
  ProposalExecutedByVotingMachineEventObject
>;

export type ProposalExecutedByVotingMachineEventFilter =
  TypedEventFilter<ProposalExecutedByVotingMachineEvent>;

export interface ENSGenericScheme extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ENSGenericSchemeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    avatar(overrides?: CallOverrides): Promise<[string]>;

    balanceOfStakingToken(
      _stakingToken: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burnReputation(
      _amount: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contractToCall(overrides?: CallOverrides): Promise<[string]>;

    execute(
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeProposal(
      _proposalId: PromiseOrValue<BytesLike>,
      _decision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getTotalReputationSupply(
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      _avatar: PromiseOrValue<string>,
      _votingMachine: PromiseOrValue<string>,
      _voteParams: PromiseOrValue<BytesLike>,
      _contractToCall: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintReputation(
      _amount: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    organizationProposals(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, boolean, boolean] & {
        callData: string;
        value: BigNumber;
        exist: boolean;
        passed: boolean;
      }
    >;

    proposalsInfo(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { blockNumber: BigNumber; avatar: string }
    >;

    proposeCall(
      _callData: PromiseOrValue<BytesLike>,
      _value: PromiseOrValue<BigNumberish>,
      _descriptionHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reputationOf(
      _owner: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stakingTokenTransfer(
      _stakingToken: PromiseOrValue<string>,
      _beneficiary: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    voteParams(overrides?: CallOverrides): Promise<[string]>;

    votingMachine(overrides?: CallOverrides): Promise<[string]>;
  };

  avatar(overrides?: CallOverrides): Promise<string>;

  balanceOfStakingToken(
    _stakingToken: PromiseOrValue<string>,
    _proposalId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burnReputation(
    _amount: PromiseOrValue<BigNumberish>,
    _beneficiary: PromiseOrValue<string>,
    _proposalId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contractToCall(overrides?: CallOverrides): Promise<string>;

  execute(
    _proposalId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeProposal(
    _proposalId: PromiseOrValue<BytesLike>,
    _decision: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getTotalReputationSupply(
    _proposalId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    _avatar: PromiseOrValue<string>,
    _votingMachine: PromiseOrValue<string>,
    _voteParams: PromiseOrValue<BytesLike>,
    _contractToCall: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintReputation(
    _amount: PromiseOrValue<BigNumberish>,
    _beneficiary: PromiseOrValue<string>,
    _proposalId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  organizationProposals(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, boolean, boolean] & {
      callData: string;
      value: BigNumber;
      exist: boolean;
      passed: boolean;
    }
  >;

  proposalsInfo(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { blockNumber: BigNumber; avatar: string }>;

  proposeCall(
    _callData: PromiseOrValue<BytesLike>,
    _value: PromiseOrValue<BigNumberish>,
    _descriptionHash: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reputationOf(
    _owner: PromiseOrValue<string>,
    _proposalId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stakingTokenTransfer(
    _stakingToken: PromiseOrValue<string>,
    _beneficiary: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _proposalId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  voteParams(overrides?: CallOverrides): Promise<string>;

  votingMachine(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    avatar(overrides?: CallOverrides): Promise<string>;

    balanceOfStakingToken(
      _stakingToken: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnReputation(
      _amount: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    contractToCall(overrides?: CallOverrides): Promise<string>;

    execute(
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeProposal(
      _proposalId: PromiseOrValue<BytesLike>,
      _decision: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getTotalReputationSupply(
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _avatar: PromiseOrValue<string>,
      _votingMachine: PromiseOrValue<string>,
      _voteParams: PromiseOrValue<BytesLike>,
      _contractToCall: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintReputation(
      _amount: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    organizationProposals(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, boolean, boolean] & {
        callData: string;
        value: BigNumber;
        exist: boolean;
        passed: boolean;
      }
    >;

    proposalsInfo(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { blockNumber: BigNumber; avatar: string }
    >;

    proposeCall(
      _callData: PromiseOrValue<BytesLike>,
      _value: PromiseOrValue<BigNumberish>,
      _descriptionHash: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    reputationOf(
      _owner: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingTokenTransfer(
      _stakingToken: PromiseOrValue<string>,
      _beneficiary: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    voteParams(overrides?: CallOverrides): Promise<string>;

    votingMachine(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewCallProposal(address,bytes32,bytes,uint256,string)"(
      _avatar?: PromiseOrValue<string> | null,
      _proposalId?: PromiseOrValue<BytesLike> | null,
      _callData?: null,
      _value?: null,
      _descriptionHash?: null
    ): NewCallProposalEventFilter;
    NewCallProposal(
      _avatar?: PromiseOrValue<string> | null,
      _proposalId?: PromiseOrValue<BytesLike> | null,
      _callData?: null,
      _value?: null,
      _descriptionHash?: null
    ): NewCallProposalEventFilter;

    "ProposalDeleted(address,bytes32)"(
      _avatar?: PromiseOrValue<string> | null,
      _proposalId?: PromiseOrValue<BytesLike> | null
    ): ProposalDeletedEventFilter;
    ProposalDeleted(
      _avatar?: PromiseOrValue<string> | null,
      _proposalId?: PromiseOrValue<BytesLike> | null
    ): ProposalDeletedEventFilter;

    "ProposalExecuted(address,bytes32,bytes)"(
      _avatar?: PromiseOrValue<string> | null,
      _proposalId?: PromiseOrValue<BytesLike> | null,
      _genericCallReturnValue?: null
    ): ProposalExecutedEventFilter;
    ProposalExecuted(
      _avatar?: PromiseOrValue<string> | null,
      _proposalId?: PromiseOrValue<BytesLike> | null,
      _genericCallReturnValue?: null
    ): ProposalExecutedEventFilter;

    "ProposalExecutedByVotingMachine(address,bytes32,int256)"(
      _avatar?: PromiseOrValue<string> | null,
      _proposalId?: PromiseOrValue<BytesLike> | null,
      _param?: null
    ): ProposalExecutedByVotingMachineEventFilter;
    ProposalExecutedByVotingMachine(
      _avatar?: PromiseOrValue<string> | null,
      _proposalId?: PromiseOrValue<BytesLike> | null,
      _param?: null
    ): ProposalExecutedByVotingMachineEventFilter;
  };

  estimateGas: {
    avatar(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfStakingToken(
      _stakingToken: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnReputation(
      _amount: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contractToCall(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeProposal(
      _proposalId: PromiseOrValue<BytesLike>,
      _decision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getTotalReputationSupply(
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _avatar: PromiseOrValue<string>,
      _votingMachine: PromiseOrValue<string>,
      _voteParams: PromiseOrValue<BytesLike>,
      _contractToCall: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintReputation(
      _amount: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    organizationProposals(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalsInfo(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposeCall(
      _callData: PromiseOrValue<BytesLike>,
      _value: PromiseOrValue<BigNumberish>,
      _descriptionHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reputationOf(
      _owner: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakingTokenTransfer(
      _stakingToken: PromiseOrValue<string>,
      _beneficiary: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    voteParams(overrides?: CallOverrides): Promise<BigNumber>;

    votingMachine(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    avatar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOfStakingToken(
      _stakingToken: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnReputation(
      _amount: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contractToCall(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeProposal(
      _proposalId: PromiseOrValue<BytesLike>,
      _decision: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTotalReputationSupply(
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _avatar: PromiseOrValue<string>,
      _votingMachine: PromiseOrValue<string>,
      _voteParams: PromiseOrValue<BytesLike>,
      _contractToCall: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintReputation(
      _amount: PromiseOrValue<BigNumberish>,
      _beneficiary: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    organizationProposals(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalsInfo(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposeCall(
      _callData: PromiseOrValue<BytesLike>,
      _value: PromiseOrValue<BigNumberish>,
      _descriptionHash: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reputationOf(
      _owner: PromiseOrValue<string>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingTokenTransfer(
      _stakingToken: PromiseOrValue<string>,
      _beneficiary: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _proposalId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    voteParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingMachine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}