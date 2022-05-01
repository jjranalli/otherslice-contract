/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC2981Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ERC1155Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Upgradeable__factory>;
    getContractFactory(
      name: "IERC1155MetadataURIUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURIUpgradeable__factory>;
    getContractFactory(
      name: "IERC1155ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC1155Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Upgradeable__factory>;
    getContractFactory(
      name: "ERC1155ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "BeaconProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BeaconProxy__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "UpgradeableBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeableBeacon__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Erc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20__factory>;
    getContractFactory(
      name: "Erc20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Erc20Permit__factory>;
    getContractFactory(
      name: "IErc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErc20__factory>;
    getContractFactory(
      name: "IErc20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IErc20Permit__factory>;
    getContractFactory(
      name: "IUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "SlicerPurchasable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SlicerPurchasable__factory>;
    getContractFactory(
      name: "SlicerPurchasablePayable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SlicerPurchasablePayable__factory>;
    getContractFactory(
      name: "ISlicerPurchasable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISlicerPurchasable__factory>;
    getContractFactory(
      name: "ISlicerPurchasablePayable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISlicerPurchasablePayable__factory>;
    getContractFactory(
      name: "OtherSlice",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OtherSlice__factory>;
    getContractFactory(
      name: "JuiceboxProject",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.JuiceboxProject__factory>;
    getContractFactory(
      name: "Operatable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Operatable__factory>;
    getContractFactory(
      name: "TerminalUtility",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TerminalUtility__factory>;
    getContractFactory(
      name: "Active14DaysFundingCycleBallot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Active14DaysFundingCycleBallot__factory>;
    getContractFactory(
      name: "Active3DaysFundingCycleBallot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Active3DaysFundingCycleBallot__factory>;
    getContractFactory(
      name: "Active7DaysFundingCycleBallot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Active7DaysFundingCycleBallot__factory>;
    getContractFactory(
      name: "DirectPaymentAddress",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DirectPaymentAddress__factory>;
    getContractFactory(
      name: "ExampleETHUSDPriceFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExampleETHUSDPriceFeed__factory>;
    getContractFactory(
      name: "ExampleFailingFundingCycleBallot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExampleFailingFundingCycleBallot__factory>;
    getContractFactory(
      name: "ExampleJuiceboxProject",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExampleJuiceboxProject__factory>;
    getContractFactory(
      name: "ExampleModAllocator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExampleModAllocator__factory>;
    getContractFactory(
      name: "Shwotime",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Shwotime__factory>;
    getContractFactory(
      name: "YourContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YourContract__factory>;
    getContractFactory(
      name: "ExampleTreasuryExtension",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExampleTreasuryExtension__factory>;
    getContractFactory(
      name: "ExampleYielder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExampleYielder__factory>;
    getContractFactory(
      name: "FundingCycles",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FundingCycles__factory>;
    getContractFactory(
      name: "Governance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governance__factory>;
    getContractFactory(
      name: "IDirectPaymentAddress",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDirectPaymentAddress__factory>;
    getContractFactory(
      name: "IFundingCycleBallot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFundingCycleBallot__factory>;
    getContractFactory(
      name: "IFundingCycles",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFundingCycles__factory>;
    getContractFactory(
      name: "IModAllocator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IModAllocator__factory>;
    getContractFactory(
      name: "IModStore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IModStore__factory>;
    getContractFactory(
      name: "IOperatable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOperatable__factory>;
    getContractFactory(
      name: "IOperatorStore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOperatorStore__factory>;
    getContractFactory(
      name: "IPrices",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPrices__factory>;
    getContractFactory(
      name: "IProjects",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProjects__factory>;
    getContractFactory(
      name: "IProxyPaymentAddress",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProxyPaymentAddress__factory>;
    getContractFactory(
      name: "IProxyPaymentAddressManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProxyPaymentAddressManager__factory>;
    getContractFactory(
      name: "ITerminal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITerminal__factory>;
    getContractFactory(
      name: "ITerminalDirectory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITerminalDirectory__factory>;
    getContractFactory(
      name: "ITerminalUtility",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITerminalUtility__factory>;
    getContractFactory(
      name: "ITerminalV11",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITerminalV11__factory>;
    getContractFactory(
      name: "ITerminalV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITerminalV1__factory>;
    getContractFactory(
      name: "ITicketBooth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITicketBooth__factory>;
    getContractFactory(
      name: "ITickets",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITickets__factory>;
    getContractFactory(
      name: "ITreasuryExtension",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasuryExtension__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "IYielder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYielder__factory>;
    getContractFactory(
      name: "IyVaultV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IyVaultV2__factory>;
    getContractFactory(
      name: "Operations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Operations__factory>;
    getContractFactory(
      name: "ModStore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ModStore__factory>;
    getContractFactory(
      name: "OperatorStore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OperatorStore__factory>;
    getContractFactory(
      name: "Prices",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Prices__factory>;
    getContractFactory(
      name: "Projects",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Projects__factory>;
    getContractFactory(
      name: "ProxyPaymentAddress",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyPaymentAddress__factory>;
    getContractFactory(
      name: "ProxyPaymentAddressManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyPaymentAddressManager__factory>;
    getContractFactory(
      name: "TerminalDirectory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TerminalDirectory__factory>;
    getContractFactory(
      name: "TerminalV11",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TerminalV11__factory>;
    getContractFactory(
      name: "TerminalV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TerminalV1__factory>;
    getContractFactory(
      name: "TicketBooth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TicketBooth__factory>;
    getContractFactory(
      name: "Tickets",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tickets__factory>;
    getContractFactory(
      name: "TokenRepresentationProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenRepresentationProxy__factory>;
    getContractFactory(
      name: "YearnYielder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YearnYielder__factory>;
    getContractFactory(
      name: "FundsModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FundsModule__factory>;
    getContractFactory(
      name: "IFundsModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFundsModule__factory>;
    getContractFactory(
      name: "IProductsModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProductsModule__factory>;
    getContractFactory(
      name: "ISliceCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISliceCore__factory>;
    getContractFactory(
      name: "ISlicer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISlicer__factory>;
    getContractFactory(
      name: "ISlicerManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISlicerManager__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "ProductsModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProductsModule__factory>;
    getContractFactory(
      name: "SliceCore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SliceCore__factory>;
    getContractFactory(
      name: "Slicer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Slicer__factory>;
    getContractFactory(
      name: "SlicerManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SlicerManager__factory>;
    getContractFactory(
      name: "EmptyUUPS",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EmptyUUPS__factory>;
    getContractFactory(
      name: "EmptyUUPSBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EmptyUUPSBeacon__factory>;
    getContractFactory(
      name: "ProxyRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyRegistry__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC2981Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ERC1155Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Upgradeable>;
    getContractAt(
      name: "IERC1155MetadataURIUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURIUpgradeable>;
    getContractAt(
      name: "IERC1155ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155ReceiverUpgradeable>;
    getContractAt(
      name: "IERC1155Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Upgradeable>;
    getContractAt(
      name: "ERC1155ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155ReceiverUpgradeable>;
    getContractAt(
      name: "IERC721ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721ReceiverUpgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "BeaconProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BeaconProxy>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "UpgradeableBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UpgradeableBeacon>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Erc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20>;
    getContractAt(
      name: "Erc20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Erc20Permit>;
    getContractAt(
      name: "IErc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErc20>;
    getContractAt(
      name: "IErc20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IErc20Permit>;
    getContractAt(
      name: "IUniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "SlicerPurchasable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SlicerPurchasable>;
    getContractAt(
      name: "SlicerPurchasablePayable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SlicerPurchasablePayable>;
    getContractAt(
      name: "ISlicerPurchasable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISlicerPurchasable>;
    getContractAt(
      name: "ISlicerPurchasablePayable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISlicerPurchasablePayable>;
    getContractAt(
      name: "OtherSlice",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OtherSlice>;
    getContractAt(
      name: "JuiceboxProject",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.JuiceboxProject>;
    getContractAt(
      name: "Operatable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Operatable>;
    getContractAt(
      name: "TerminalUtility",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TerminalUtility>;
    getContractAt(
      name: "Active14DaysFundingCycleBallot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Active14DaysFundingCycleBallot>;
    getContractAt(
      name: "Active3DaysFundingCycleBallot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Active3DaysFundingCycleBallot>;
    getContractAt(
      name: "Active7DaysFundingCycleBallot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Active7DaysFundingCycleBallot>;
    getContractAt(
      name: "DirectPaymentAddress",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DirectPaymentAddress>;
    getContractAt(
      name: "ExampleETHUSDPriceFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExampleETHUSDPriceFeed>;
    getContractAt(
      name: "ExampleFailingFundingCycleBallot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExampleFailingFundingCycleBallot>;
    getContractAt(
      name: "ExampleJuiceboxProject",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExampleJuiceboxProject>;
    getContractAt(
      name: "ExampleModAllocator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExampleModAllocator>;
    getContractAt(
      name: "Shwotime",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Shwotime>;
    getContractAt(
      name: "YourContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YourContract>;
    getContractAt(
      name: "ExampleTreasuryExtension",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExampleTreasuryExtension>;
    getContractAt(
      name: "ExampleYielder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExampleYielder>;
    getContractAt(
      name: "FundingCycles",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FundingCycles>;
    getContractAt(
      name: "Governance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governance>;
    getContractAt(
      name: "IDirectPaymentAddress",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDirectPaymentAddress>;
    getContractAt(
      name: "IFundingCycleBallot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFundingCycleBallot>;
    getContractAt(
      name: "IFundingCycles",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFundingCycles>;
    getContractAt(
      name: "IModAllocator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IModAllocator>;
    getContractAt(
      name: "IModStore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IModStore>;
    getContractAt(
      name: "IOperatable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOperatable>;
    getContractAt(
      name: "IOperatorStore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOperatorStore>;
    getContractAt(
      name: "IPrices",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPrices>;
    getContractAt(
      name: "IProjects",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProjects>;
    getContractAt(
      name: "IProxyPaymentAddress",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProxyPaymentAddress>;
    getContractAt(
      name: "IProxyPaymentAddressManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProxyPaymentAddressManager>;
    getContractAt(
      name: "ITerminal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITerminal>;
    getContractAt(
      name: "ITerminalDirectory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITerminalDirectory>;
    getContractAt(
      name: "ITerminalUtility",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITerminalUtility>;
    getContractAt(
      name: "ITerminalV11",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITerminalV11>;
    getContractAt(
      name: "ITerminalV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITerminalV1>;
    getContractAt(
      name: "ITicketBooth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITicketBooth>;
    getContractAt(
      name: "ITickets",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITickets>;
    getContractAt(
      name: "ITreasuryExtension",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasuryExtension>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "IYielder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYielder>;
    getContractAt(
      name: "IyVaultV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IyVaultV2>;
    getContractAt(
      name: "Operations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Operations>;
    getContractAt(
      name: "ModStore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ModStore>;
    getContractAt(
      name: "OperatorStore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OperatorStore>;
    getContractAt(
      name: "Prices",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Prices>;
    getContractAt(
      name: "Projects",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Projects>;
    getContractAt(
      name: "ProxyPaymentAddress",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyPaymentAddress>;
    getContractAt(
      name: "ProxyPaymentAddressManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyPaymentAddressManager>;
    getContractAt(
      name: "TerminalDirectory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TerminalDirectory>;
    getContractAt(
      name: "TerminalV11",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TerminalV11>;
    getContractAt(
      name: "TerminalV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TerminalV1>;
    getContractAt(
      name: "TicketBooth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TicketBooth>;
    getContractAt(
      name: "Tickets",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Tickets>;
    getContractAt(
      name: "TokenRepresentationProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenRepresentationProxy>;
    getContractAt(
      name: "YearnYielder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YearnYielder>;
    getContractAt(
      name: "FundsModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FundsModule>;
    getContractAt(
      name: "IFundsModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFundsModule>;
    getContractAt(
      name: "IProductsModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProductsModule>;
    getContractAt(
      name: "ISliceCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISliceCore>;
    getContractAt(
      name: "ISlicer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISlicer>;
    getContractAt(
      name: "ISlicerManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISlicerManager>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "ProductsModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProductsModule>;
    getContractAt(
      name: "SliceCore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SliceCore>;
    getContractAt(
      name: "Slicer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Slicer>;
    getContractAt(
      name: "SlicerManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SlicerManager>;
    getContractAt(
      name: "EmptyUUPS",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EmptyUUPS>;
    getContractAt(
      name: "EmptyUUPSBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EmptyUUPSBeacon>;
    getContractAt(
      name: "ProxyRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyRegistry>;
    getContractAt(
      name: "ERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
