/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOwnable, IOwnableInterface } from "../IOwnable";

const _abi = [
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

export class IOwnable__factory {
  static readonly abi = _abi;
  static createInterface(): IOwnableInterface {
    return new utils.Interface(_abi) as IOwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOwnable {
    return new Contract(address, _abi, signerOrProvider) as IOwnable;
  }
}
