/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type PayoutModStruct = {
  preferUnstaked: boolean;
  percent: BigNumberish;
  lockedUntil: BigNumberish;
  beneficiary: string;
  allocator: string;
  projectId: BigNumberish;
};

export type PayoutModStructOutput = [
  boolean,
  number,
  number,
  string,
  string,
  BigNumber
] & {
  preferUnstaked: boolean;
  percent: number;
  lockedUntil: number;
  beneficiary: string;
  allocator: string;
  projectId: BigNumber;
};

export type TicketModStruct = {
  preferUnstaked: boolean;
  percent: BigNumberish;
  lockedUntil: BigNumberish;
  beneficiary: string;
};

export type TicketModStructOutput = [boolean, number, number, string] & {
  preferUnstaked: boolean;
  percent: number;
  lockedUntil: number;
  beneficiary: string;
};

export type FundingCyclePropertiesStruct = {
  target: BigNumberish;
  currency: BigNumberish;
  duration: BigNumberish;
  cycleLimit: BigNumberish;
  discountRate: BigNumberish;
  ballot: string;
};

export type FundingCyclePropertiesStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & {
  target: BigNumber;
  currency: BigNumber;
  duration: BigNumber;
  cycleLimit: BigNumber;
  discountRate: BigNumber;
  ballot: string;
};

export type FundingCycleMetadata2Struct = {
  reservedRate: BigNumberish;
  bondingCurveRate: BigNumberish;
  reconfigurationBondingCurveRate: BigNumberish;
  payIsPaused: boolean;
  ticketPrintingIsAllowed: boolean;
  treasuryExtension: string;
};

export type FundingCycleMetadata2StructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  boolean,
  boolean,
  string
] & {
  reservedRate: BigNumber;
  bondingCurveRate: BigNumber;
  reconfigurationBondingCurveRate: BigNumber;
  payIsPaused: boolean;
  ticketPrintingIsAllowed: boolean;
  treasuryExtension: string;
};

export interface ITerminalV11Interface extends utils.Interface {
  contractName: "ITerminalV11";
  functions: {
    "balanceOf(uint256)": FunctionFragment;
    "burnFromDeadAddress(uint256)": FunctionFragment;
    "claimableOverflowOf(address,uint256,uint256)": FunctionFragment;
    "configure(uint256,(uint256,uint256,uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,address),(bool,uint16,uint48,address,address,uint56)[],(bool,uint16,uint48,address)[])": FunctionFragment;
    "currentOverflowOf(uint256)": FunctionFragment;
    "deploy(address,bytes32,string,(uint256,uint256,uint256,uint256,uint256,address),(uint256,uint256,uint256,bool,bool,address),(bool,uint16,uint48,address,address,uint56)[],(bool,uint16,uint48,address)[])": FunctionFragment;
    "fee()": FunctionFragment;
    "fundingCycles()": FunctionFragment;
    "modStore()": FunctionFragment;
    "prices()": FunctionFragment;
    "printReservedTickets(uint256)": FunctionFragment;
    "printTickets(uint256,uint256,address,string,bool)": FunctionFragment;
    "projects()": FunctionFragment;
    "redeem(address,uint256,uint256,uint256,address,bool)": FunctionFragment;
    "reservedTicketBalanceOf(uint256,uint256)": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "tap(uint256,uint256,uint256,uint256)": FunctionFragment;
    "ticketBooth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnFromDeadAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableOverflowOf",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "configure",
    values: [
      BigNumberish,
      FundingCyclePropertiesStruct,
      FundingCycleMetadata2Struct,
      PayoutModStruct[],
      TicketModStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "currentOverflowOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [
      string,
      BytesLike,
      string,
      FundingCyclePropertiesStruct,
      FundingCycleMetadata2Struct,
      PayoutModStruct[],
      TicketModStruct[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundingCycles",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "modStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "prices", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "printReservedTickets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "printTickets",
    values: [BigNumberish, BigNumberish, string, string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "projects", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string, BigNumberish, BigNumberish, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "reservedTicketBalanceOf",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tap",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ticketBooth",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnFromDeadAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableOverflowOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "configure", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentOverflowOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundingCycles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "modStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "printReservedTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "printTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reservedTicketBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ticketBooth",
    data: BytesLike
  ): Result;

  events: {
    "AddToBalance(uint256,uint256,address)": EventFragment;
    "AllowMigration(address)": EventFragment;
    "Configure(uint256,uint256,address)": EventFragment;
    "Deposit(uint256)": EventFragment;
    "DistributeToPayoutMod(uint256,uint256,tuple,uint256,address)": EventFragment;
    "DistributeToTicketMod(uint256,uint256,tuple,uint256,address)": EventFragment;
    "EnsureTargetLocalWei(uint256)": EventFragment;
    "Migrate(uint256,address,uint256,address)": EventFragment;
    "Pay(uint256,uint256,address,uint256,uint256,uint256,string,address)": EventFragment;
    "PrintReserveTickets(uint256,uint256,address,uint256,uint256,address)": EventFragment;
    "PrintTickets(uint256,address,uint256,string,address)": EventFragment;
    "Redeem(address,address,uint256,uint256,uint256,address)": EventFragment;
    "SetFee(uint256)": EventFragment;
    "SetTargetLocalWei(uint256)": EventFragment;
    "SetYielder(address)": EventFragment;
    "Tap(uint256,uint256,address,uint256,uint256,uint256,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddToBalance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowMigration"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Configure"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributeToPayoutMod"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributeToTicketMod"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EnsureTargetLocalWei"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Migrate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Pay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PrintReserveTickets"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PrintTickets"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTargetLocalWei"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetYielder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Tap"): EventFragment;
}

export type AddToBalanceEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { projectId: BigNumber; value: BigNumber; caller: string }
>;

export type AddToBalanceEventFilter = TypedEventFilter<AddToBalanceEvent>;

export type AllowMigrationEvent = TypedEvent<[string], { allowed: string }>;

export type AllowMigrationEventFilter = TypedEventFilter<AllowMigrationEvent>;

export type ConfigureEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  { fundingCycleId: BigNumber; projectId: BigNumber; caller: string }
>;

export type ConfigureEventFilter = TypedEventFilter<ConfigureEvent>;

export type DepositEvent = TypedEvent<[BigNumber], { amount: BigNumber }>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type DistributeToPayoutModEvent = TypedEvent<
  [BigNumber, BigNumber, PayoutModStructOutput, BigNumber, string],
  {
    fundingCycleId: BigNumber;
    projectId: BigNumber;
    mod: PayoutModStructOutput;
    modCut: BigNumber;
    caller: string;
  }
>;

export type DistributeToPayoutModEventFilter =
  TypedEventFilter<DistributeToPayoutModEvent>;

export type DistributeToTicketModEvent = TypedEvent<
  [BigNumber, BigNumber, TicketModStructOutput, BigNumber, string],
  {
    fundingCycleId: BigNumber;
    projectId: BigNumber;
    mod: TicketModStructOutput;
    modCut: BigNumber;
    caller: string;
  }
>;

export type DistributeToTicketModEventFilter =
  TypedEventFilter<DistributeToTicketModEvent>;

export type EnsureTargetLocalWeiEvent = TypedEvent<
  [BigNumber],
  { target: BigNumber }
>;

export type EnsureTargetLocalWeiEventFilter =
  TypedEventFilter<EnsureTargetLocalWeiEvent>;

export type MigrateEvent = TypedEvent<
  [BigNumber, string, BigNumber, string],
  { projectId: BigNumber; to: string; _amount: BigNumber; caller: string }
>;

export type MigrateEventFilter = TypedEventFilter<MigrateEvent>;

export type PayEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
  ],
  {
    fundingCycleId: BigNumber;
    projectId: BigNumber;
    beneficiary: string;
    amount: BigNumber;
    beneficiaryTokens: BigNumber;
    totalTokens: BigNumber;
    note: string;
    caller: string;
  }
>;

export type PayEventFilter = TypedEventFilter<PayEvent>;

export type PrintReserveTicketsEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, BigNumber, string],
  {
    fundingCycleId: BigNumber;
    projectId: BigNumber;
    beneficiary: string;
    count: BigNumber;
    beneficiaryTicketAmount: BigNumber;
    caller: string;
  }
>;

export type PrintReserveTicketsEventFilter =
  TypedEventFilter<PrintReserveTicketsEvent>;

export type PrintTicketsEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string],
  {
    projectId: BigNumber;
    beneficiary: string;
    amount: BigNumber;
    memo: string;
    caller: string;
  }
>;

export type PrintTicketsEventFilter = TypedEventFilter<PrintTicketsEvent>;

export type RedeemEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, string],
  {
    holder: string;
    beneficiary: string;
    _projectId: BigNumber;
    amount: BigNumber;
    returnAmount: BigNumber;
    caller: string;
  }
>;

export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;

export type SetFeeEvent = TypedEvent<[BigNumber], { _amount: BigNumber }>;

export type SetFeeEventFilter = TypedEventFilter<SetFeeEvent>;

export type SetTargetLocalWeiEvent = TypedEvent<
  [BigNumber],
  { amount: BigNumber }
>;

export type SetTargetLocalWeiEventFilter =
  TypedEventFilter<SetTargetLocalWeiEvent>;

export type SetYielderEvent = TypedEvent<[string], { newYielder: string }>;

export type SetYielderEventFilter = TypedEventFilter<SetYielderEvent>;

export type TapEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ],
  {
    fundingCycleId: BigNumber;
    projectId: BigNumber;
    beneficiary: string;
    amount: BigNumber;
    currency: BigNumber;
    netTransferAmount: BigNumber;
    beneficiaryTransferAmount: BigNumber;
    govFeeAmount: BigNumber;
    caller: string;
  }
>;

export type TapEventFilter = TypedEventFilter<TapEvent>;

export interface ITerminalV11 extends BaseContract {
  contractName: "ITerminalV11";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITerminalV11Interface;

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
    balanceOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burnFromDeadAddress(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimableOverflowOf(
      _account: string,
      _amount: BigNumberish,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    configure(
      _projectId: BigNumberish,
      _properties: FundingCyclePropertiesStruct,
      _metadata: FundingCycleMetadata2Struct,
      _payoutMods: PayoutModStruct[],
      _ticketMods: TicketModStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentOverflowOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deploy(
      _owner: string,
      _handle: BytesLike,
      _uri: string,
      _properties: FundingCyclePropertiesStruct,
      _metadata: FundingCycleMetadata2Struct,
      _payoutMods: PayoutModStruct[],
      _ticketMods: TicketModStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    fundingCycles(overrides?: CallOverrides): Promise<[string]>;

    modStore(overrides?: CallOverrides): Promise<[string]>;

    prices(overrides?: CallOverrides): Promise<[string]>;

    printReservedTickets(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    printTickets(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _beneficiary: string,
      _memo: string,
      _preferUnstakedTickets: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    projects(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      _account: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _minReturnedWei: BigNumberish,
      _beneficiary: string,
      _preferUnstaked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reservedTicketBalanceOf(
      _projectId: BigNumberish,
      _reservedRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tap(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      _minReturnedWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ticketBooth(overrides?: CallOverrides): Promise<[string]>;
  };

  balanceOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burnFromDeadAddress(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimableOverflowOf(
    _account: string,
    _amount: BigNumberish,
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  configure(
    _projectId: BigNumberish,
    _properties: FundingCyclePropertiesStruct,
    _metadata: FundingCycleMetadata2Struct,
    _payoutMods: PayoutModStruct[],
    _ticketMods: TicketModStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentOverflowOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deploy(
    _owner: string,
    _handle: BytesLike,
    _uri: string,
    _properties: FundingCyclePropertiesStruct,
    _metadata: FundingCycleMetadata2Struct,
    _payoutMods: PayoutModStruct[],
    _ticketMods: TicketModStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  fundingCycles(overrides?: CallOverrides): Promise<string>;

  modStore(overrides?: CallOverrides): Promise<string>;

  prices(overrides?: CallOverrides): Promise<string>;

  printReservedTickets(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  printTickets(
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _beneficiary: string,
    _memo: string,
    _preferUnstakedTickets: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  projects(overrides?: CallOverrides): Promise<string>;

  redeem(
    _account: string,
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _minReturnedWei: BigNumberish,
    _beneficiary: string,
    _preferUnstaked: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reservedTicketBalanceOf(
    _projectId: BigNumberish,
    _reservedRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setFee(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tap(
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _currency: BigNumberish,
    _minReturnedWei: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ticketBooth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balanceOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnFromDeadAddress(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimableOverflowOf(
      _account: string,
      _amount: BigNumberish,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configure(
      _projectId: BigNumberish,
      _properties: FundingCyclePropertiesStruct,
      _metadata: FundingCycleMetadata2Struct,
      _payoutMods: PayoutModStruct[],
      _ticketMods: TicketModStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentOverflowOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deploy(
      _owner: string,
      _handle: BytesLike,
      _uri: string,
      _properties: FundingCyclePropertiesStruct,
      _metadata: FundingCycleMetadata2Struct,
      _payoutMods: PayoutModStruct[],
      _ticketMods: TicketModStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    fundingCycles(overrides?: CallOverrides): Promise<string>;

    modStore(overrides?: CallOverrides): Promise<string>;

    prices(overrides?: CallOverrides): Promise<string>;

    printReservedTickets(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    printTickets(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _beneficiary: string,
      _memo: string,
      _preferUnstakedTickets: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    projects(overrides?: CallOverrides): Promise<string>;

    redeem(
      _account: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _minReturnedWei: BigNumberish,
      _beneficiary: string,
      _preferUnstaked: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reservedTicketBalanceOf(
      _projectId: BigNumberish,
      _reservedRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    tap(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      _minReturnedWei: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticketBooth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddToBalance(uint256,uint256,address)"(
      projectId?: BigNumberish | null,
      value?: null,
      caller?: null
    ): AddToBalanceEventFilter;
    AddToBalance(
      projectId?: BigNumberish | null,
      value?: null,
      caller?: null
    ): AddToBalanceEventFilter;

    "AllowMigration(address)"(allowed?: null): AllowMigrationEventFilter;
    AllowMigration(allowed?: null): AllowMigrationEventFilter;

    "Configure(uint256,uint256,address)"(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      caller?: null
    ): ConfigureEventFilter;
    Configure(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      caller?: null
    ): ConfigureEventFilter;

    "Deposit(uint256)"(amount?: null): DepositEventFilter;
    Deposit(amount?: null): DepositEventFilter;

    "DistributeToPayoutMod(uint256,uint256,tuple,uint256,address)"(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      mod?: null,
      modCut?: null,
      caller?: null
    ): DistributeToPayoutModEventFilter;
    DistributeToPayoutMod(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      mod?: null,
      modCut?: null,
      caller?: null
    ): DistributeToPayoutModEventFilter;

    "DistributeToTicketMod(uint256,uint256,tuple,uint256,address)"(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      mod?: null,
      modCut?: null,
      caller?: null
    ): DistributeToTicketModEventFilter;
    DistributeToTicketMod(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      mod?: null,
      modCut?: null,
      caller?: null
    ): DistributeToTicketModEventFilter;

    "EnsureTargetLocalWei(uint256)"(
      target?: null
    ): EnsureTargetLocalWeiEventFilter;
    EnsureTargetLocalWei(target?: null): EnsureTargetLocalWeiEventFilter;

    "Migrate(uint256,address,uint256,address)"(
      projectId?: BigNumberish | null,
      to?: string | null,
      _amount?: null,
      caller?: null
    ): MigrateEventFilter;
    Migrate(
      projectId?: BigNumberish | null,
      to?: string | null,
      _amount?: null,
      caller?: null
    ): MigrateEventFilter;

    "Pay(uint256,uint256,address,uint256,uint256,uint256,string,address)"(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null,
      beneficiaryTokens?: null,
      totalTokens?: null,
      note?: null,
      caller?: null
    ): PayEventFilter;
    Pay(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null,
      beneficiaryTokens?: null,
      totalTokens?: null,
      note?: null,
      caller?: null
    ): PayEventFilter;

    "PrintReserveTickets(uint256,uint256,address,uint256,uint256,address)"(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      beneficiary?: string | null,
      count?: null,
      beneficiaryTicketAmount?: null,
      caller?: null
    ): PrintReserveTicketsEventFilter;
    PrintReserveTickets(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      beneficiary?: string | null,
      count?: null,
      beneficiaryTicketAmount?: null,
      caller?: null
    ): PrintReserveTicketsEventFilter;

    "PrintTickets(uint256,address,uint256,string,address)"(
      projectId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null,
      memo?: null,
      caller?: null
    ): PrintTicketsEventFilter;
    PrintTickets(
      projectId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null,
      memo?: null,
      caller?: null
    ): PrintTicketsEventFilter;

    "Redeem(address,address,uint256,uint256,uint256,address)"(
      holder?: string | null,
      beneficiary?: string | null,
      _projectId?: BigNumberish | null,
      amount?: null,
      returnAmount?: null,
      caller?: null
    ): RedeemEventFilter;
    Redeem(
      holder?: string | null,
      beneficiary?: string | null,
      _projectId?: BigNumberish | null,
      amount?: null,
      returnAmount?: null,
      caller?: null
    ): RedeemEventFilter;

    "SetFee(uint256)"(_amount?: null): SetFeeEventFilter;
    SetFee(_amount?: null): SetFeeEventFilter;

    "SetTargetLocalWei(uint256)"(amount?: null): SetTargetLocalWeiEventFilter;
    SetTargetLocalWei(amount?: null): SetTargetLocalWeiEventFilter;

    "SetYielder(address)"(newYielder?: null): SetYielderEventFilter;
    SetYielder(newYielder?: null): SetYielderEventFilter;

    "Tap(uint256,uint256,address,uint256,uint256,uint256,uint256,uint256,address)"(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null,
      currency?: null,
      netTransferAmount?: null,
      beneficiaryTransferAmount?: null,
      govFeeAmount?: null,
      caller?: null
    ): TapEventFilter;
    Tap(
      fundingCycleId?: BigNumberish | null,
      projectId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null,
      currency?: null,
      netTransferAmount?: null,
      beneficiaryTransferAmount?: null,
      govFeeAmount?: null,
      caller?: null
    ): TapEventFilter;
  };

  estimateGas: {
    balanceOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnFromDeadAddress(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimableOverflowOf(
      _account: string,
      _amount: BigNumberish,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    configure(
      _projectId: BigNumberish,
      _properties: FundingCyclePropertiesStruct,
      _metadata: FundingCycleMetadata2Struct,
      _payoutMods: PayoutModStruct[],
      _ticketMods: TicketModStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentOverflowOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deploy(
      _owner: string,
      _handle: BytesLike,
      _uri: string,
      _properties: FundingCyclePropertiesStruct,
      _metadata: FundingCycleMetadata2Struct,
      _payoutMods: PayoutModStruct[],
      _ticketMods: TicketModStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    fundingCycles(overrides?: CallOverrides): Promise<BigNumber>;

    modStore(overrides?: CallOverrides): Promise<BigNumber>;

    prices(overrides?: CallOverrides): Promise<BigNumber>;

    printReservedTickets(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    printTickets(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _beneficiary: string,
      _memo: string,
      _preferUnstakedTickets: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    projects(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      _account: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _minReturnedWei: BigNumberish,
      _beneficiary: string,
      _preferUnstaked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reservedTicketBalanceOf(
      _projectId: BigNumberish,
      _reservedRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tap(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      _minReturnedWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ticketBooth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnFromDeadAddress(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimableOverflowOf(
      _account: string,
      _amount: BigNumberish,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    configure(
      _projectId: BigNumberish,
      _properties: FundingCyclePropertiesStruct,
      _metadata: FundingCycleMetadata2Struct,
      _payoutMods: PayoutModStruct[],
      _ticketMods: TicketModStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentOverflowOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deploy(
      _owner: string,
      _handle: BytesLike,
      _uri: string,
      _properties: FundingCyclePropertiesStruct,
      _metadata: FundingCycleMetadata2Struct,
      _payoutMods: PayoutModStruct[],
      _ticketMods: TicketModStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundingCycles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prices(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    printReservedTickets(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    printTickets(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _beneficiary: string,
      _memo: string,
      _preferUnstakedTickets: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    projects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      _account: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _minReturnedWei: BigNumberish,
      _beneficiary: string,
      _preferUnstaked: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reservedTicketBalanceOf(
      _projectId: BigNumberish,
      _reservedRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tap(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      _minReturnedWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ticketBooth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
