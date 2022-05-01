/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Prices, PricesInterface } from "../Prices";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "currency",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract AggregatorV3Interface",
        name: "feed",
        type: "address",
      },
    ],
    name: "AddFeed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "_feed",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currency",
        type: "uint256",
      },
    ],
    name: "addFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "feedDecimalAdjuster",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "feedFor",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_currency",
        type: "uint256",
      },
    ],
    name: "getETHPriceFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "targetDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61086c8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146101135780639fa9372314610124578063a967c20b14610137578063f2fde38b1461014a57600080fd5b80630aee17f21461008d57806336c1387e146100c05780633e495e66146100c8578063715018a614610109575b600080fd5b6100ad61009b3660046105b5565b60016020526000908152604090205481565b6040519081526020015b60405180910390f35b6100ad601281565b6100f16100d63660046105b5565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100b7565b61011161015d565b005b6000546001600160a01b03166100f1565b6100ad6101323660046105b5565b61019c565b6101116101453660046105e3565b6102a9565b61011161015836600461060f565b6104ca565b6000546001600160a01b031633146101905760405162461bcd60e51b815260040161018790610633565b60405180910390fd5b61019a6000610565565b565b6000816000036101b8576101b26012600a610762565b92915050565b6000828152600260205260409020546001600160a01b03168061021d5760405162461bcd60e51b815260206004820152601e60248201527f5072696365733a3a67657445544850726963653a204e4f545f464f554e4400006044820152606401610187565b6000816001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561025d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610281919061078d565b5050506000868152600160205260409020549092506102a19150826107dd565b949350505050565b6000546001600160a01b031633146102d35760405162461bcd60e51b815260040161018790610633565b600081116103235760405162461bcd60e51b815260206004820152601960248201527f5072696365733a3a616464466565643a205245534552564544000000000000006044820152606401610187565b6000818152600260205260409020546001600160a01b0316156103885760405162461bcd60e51b815260206004820152601f60248201527f5072696365733a3a616464466565643a20414c52454144595f455849535453006044820152606401610187565b6000826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ec91906107fc565b60ff16905060128111156104425760405162461bcd60e51b815260206004820152601d60248201527f5072696365733a3a616464466565643a204241445f444543494d414c530000006044820152606401610187565b600082815260026020526040902080546001600160a01b0319166001600160a01b03851617905561047481601261081f565b61047f90600a610762565b6000838152600160205260408082209290925590516001600160a01b0385169184917f39f7e6a3cfe66d8f71a7951583f7e721ef29d4650eddf11122c8df3aa1c772fd9190a3505050565b6000546001600160a01b031633146104f45760405162461bcd60e51b815260040161018790610633565b6001600160a01b0381166105595760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610187565b61056281610565565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156105c757600080fd5b5035919050565b6001600160a01b038116811461056257600080fd5b600080604083850312156105f657600080fd5b8235610601816105ce565b946020939093013593505050565b60006020828403121561062157600080fd5b813561062c816105ce565b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156106b957816000190482111561069f5761069f610668565b808516156106ac57918102915b93841c9390800290610683565b509250929050565b6000826106d0575060016101b2565b816106dd575060006101b2565b81600181146106f357600281146106fd57610719565b60019150506101b2565b60ff84111561070e5761070e610668565b50506001821b6101b2565b5060208310610133831016604e8410600b841016171561073c575081810a6101b2565b610746838361067e565b806000190482111561075a5761075a610668565b029392505050565b600061062c83836106c1565b805169ffffffffffffffffffff8116811461078857600080fd5b919050565b600080600080600060a086880312156107a557600080fd5b6107ae8661076e565b94506020860151935060408601519250606086015191506107d16080870161076e565b90509295509295909350565b60008160001904831182151516156107f7576107f7610668565b500290565b60006020828403121561080e57600080fd5b815160ff8116811461062c57600080fd5b60008282101561083157610831610668565b50039056fea2646970667358221220c146bce4c91cbbf3e00a1ae6144c77862da2bf3896f80829e703343f97fc622664736f6c634300080d0033";

type PricesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PricesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Prices__factory extends ContractFactory {
  constructor(...args: PricesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Prices";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Prices> {
    return super.deploy(overrides || {}) as Promise<Prices>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Prices {
    return super.attach(address) as Prices;
  }
  connect(signer: Signer): Prices__factory {
    return super.connect(signer) as Prices__factory;
  }
  static readonly contractName: "Prices";
  public readonly contractName: "Prices";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PricesInterface {
    return new utils.Interface(_abi) as PricesInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Prices {
    return new Contract(address, _abi, signerOrProvider) as Prices;
  }
}
