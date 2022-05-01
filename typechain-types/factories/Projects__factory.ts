/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Projects, ProjectsInterface } from "../Projects";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IOperatorStore",
        name: "_operatorStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "handle",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "challengeExpiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "ChallengeHandle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "handle",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "ClaimHandle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "handle",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "contract ITerminal",
        name: "terminal",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Create",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "handle",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RenewHandle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "handle",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetHandle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetUri",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "handle",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newHandle",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TransferHandle",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "challengeExpiryOf",
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
        internalType: "bytes32",
        name: "_handle",
        type: "bytes32",
      },
    ],
    name: "challengeHandle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_handle",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_for",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "claimHandle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_handle",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "contract ITerminal",
        name: "_terminal",
        type: "address",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "handleOf",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorStore",
    outputs: [
      {
        internalType: "contract IOperatorStore",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "projectFor",
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
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "renewHandle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_handle",
        type: "bytes32",
      },
    ],
    name: "setHandle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "transferAddressFor",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_newHandle",
        type: "bytes32",
      },
    ],
    name: "transferHandle",
    outputs: [
      {
        internalType: "bytes32",
        name: "_handle",
        type: "bytes32",
      },
    ],
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
    name: "uriOf",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405260006006553480156200001657600080fd5b5060405162002a0638038062002a06833981016040819052620000399162000176565b806040518060400160405280601081526020016f129d5a58d9589bde081c1c9bda9958dd60821b8152506040518060400160405280601081526020016f12955250d15093d608141493d29150d560821b8152508160009080519060200190620000a4929190620000d0565b508051620000ba906001906020840190620000d0565b5050506001600160a01b031660805250620001e4565b828054620000de90620001a8565b90600052602060002090601f0160209004810192826200010257600085556200014d565b82601f106200011d57805160ff19168380011785556200014d565b828001600101855582156200014d579182015b828111156200014d57825182559160200191906001019062000130565b506200015b9291506200015f565b5090565b5b808211156200015b576000815560010162000160565b6000602082840312156200018957600080fd5b81516001600160a01b0381168114620001a157600080fd5b9392505050565b600181811c90821680620001bd57607f821691505b602082108103620001de57634e487b7160e01b600052602260045260246000fd5b50919050565b6080516127d562000231600039600081816103a10152818161074901528181610c4501528181610e98015281816110a5015281816114e801528181611581015261164f01526127d56000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806375549979116100f9578063ad007d6311610097578063c87b56dd11610071578063c87b56dd146103f6578063d39afed914610409578063e985e9c514610432578063fc1dd6de1461046e57600080fd5b8063ad007d631461039c578063b88d4fde146103c3578063ba8e8c1d146103d657600080fd5b806395402960116100d3578063954029601461034e57806395d89b411461036e578063a22cb46514610376578063a312889b1461038957600080fd5b80637554997914610315578063782f08ae146103285780637b0230141461033b57600080fd5b806323b872dd116101665780634f558e79116101405780634f558e79146102c95780636352211e146102dc57806370a08231146102ef57806370ea45f51461030257600080fd5b806323b872dd1461028357806342842e0e1461029657806349491987146102a957600080fd5b8063081812fc116101a2578063081812fc1461021d578063095ea7b3146102485780630ddf6aee1461025d57806317753c461461027057600080fd5b806301ffc9a7146101c957806306661abd146101f157806306fdde0314610208575b600080fd5b6101dc6101d7366004612066565b610481565b60405190151581526020015b60405180910390f35b6101fa60065481565b6040519081526020016101e8565b6102106104d3565b6040516101e891906120db565b61023061022b3660046120ee565b610565565b6040516001600160a01b0390911681526020016101e8565b61025b61025636600461211c565b6105ff565b005b61025b61026b3660046120ee565b610714565b6101fa61027e366004612191565b61083c565b61025b610291366004612205565b610aa5565b61025b6102a4366004612205565b610ad6565b6101fa6102b73660046120ee565b60086020526000908152604090205481565b6101dc6102d73660046120ee565b610af1565b6102306102ea3660046120ee565b610b10565b6101fa6102fd366004612246565b610b87565b6101fa610310366004612263565b610c0e565b61025b61032336600461228a565b610e63565b61025b6103363660046122ac565b611070565b61025b6103493660046120ee565b61119b565b6101fa61035c3660046120ee565b60096020526000908152604090205481565b6102106112e3565b61025b610384366004612306565b6112f2565b6102106103973660046120ee565b611301565b6102307f000000000000000000000000000000000000000000000000000000000000000081565b61025b6103d1366004612355565b61139b565b6101fa6103e43660046120ee565b600b6020526000908152604090205481565b6102106104043660046120ee565b6113d3565b6102306104173660046120ee565b600a602052600090815260409020546001600160a01b031681565b6101dc610440366004612435565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61025b61047c366004612263565b6114bb565b60006001600160e01b031982166380ac58cd60e01b14806104b257506001600160e01b03198216635b5e139f60e01b145b806104cd57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546104e290612463565b80601f016020809104026020016040519081016040528092919081815260200182805461050e90612463565b801561055b5780601f106105305761010080835404028352916020019161055b565b820191906000526020600020905b81548152906001019060200180831161053e57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105e35760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061060a82610b10565b9050806001600160a01b0316836001600160a01b0316036106775760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105da565b336001600160a01b038216148061069357506106938133610440565b6107055760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105da565b61070f8383611821565b505050565b61071d81610b10565b816008336001600160a01b03841614806107c5575060405163c161c93f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9061078490339087908790879060040161249d565b602060405180830381865afa1580156107a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c591906124c6565b6107e15760405162461bcd60e51b81526004016105da906124e3565b600084815260086020908152604080832054808452600b83528184209390935551338152869183917f6eec1e60946fbfd12ab0bde53c7c27478f3c07b42ffea7d25a719af24590eebf91015b60405180910390a35050505050565b60008461088b5760405162461bcd60e51b815260206004820152601e60248201527f50726f6a656374733a3a6372656174653a20454d5054595f48414e444c45000060448201526064016105da565b6000858152600960205260409020541580156108bc57506000858152600a60205260409020546001600160a01b0316155b6109085760405162461bcd60e51b815260206004820152601e60248201527f50726f6a656374733a3a6372656174653a2048414e444c455f54414b454e000060448201526064016105da565b6006805490600061091883612530565b91905055506109298660065461188f565b60068054600090815260086020908152604080832089905592548883526009909152919020558215610973576006546000908152600760205260409020610971908585611fb4565b505b6001600160a01b03821615610a4d57816001600160a01b0316636abcf8e36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e49190612549565b600654604051639fc9ea4760e01b815260048101919091526001600160a01b0384811660248301529190911690639fc9ea4790604401600060405180830381600087803b158015610a3457600080fd5b505af1158015610a48573d6000803e3d6000fd5b505050505b84866001600160a01b03166006547f06e07e862bc5e6be67193c75556d1659653327c7846a45ee9921c917717395d887878733604051610a90949392919061258f565b60405180910390a45060065495945050505050565b610aaf33826118a9565b610acb5760405162461bcd60e51b81526004016105da906125c4565b61070f8383836119a0565b61070f8383836040518060200160405280600081525061139b565b6000818152600260205260408120546001600160a01b031615156104cd565b6000818152600260205260408120546001600160a01b0316806104cd5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105da565b60006001600160a01b038216610bf25760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105da565b506001600160a01b031660009081526003602052604090205490565b6000610c1984610b10565b846005336001600160a01b0384161480610cc1575060405163c161c93f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f90610c8090339087908790879060040161249d565b602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc191906124c6565b610cdd5760405162461bcd60e51b81526004016105da906124e3565b84610d395760405162461bcd60e51b815260206004820152602660248201527f50726f6a656374733a3a7472616e7366657248616e646c653a20454d5054595f60448201526548414e444c4560d01b60648201526084016105da565b600085815260096020526040902054158015610d6a57506000848152600a60205260409020546001600160a01b0316155b610dc55760405162461bcd60e51b815260206004820152602660248201527f50726f6a656374733a3a7472616e7366657248616e646c653a2048414e444c456044820152652faa20a5a2a760d11b60648201526084016105da565b60008781526008602090815260408083208054808552600984528285208590558985528285208c905590899055808452600a83529281902080546001600160a01b0319166001600160a01b038b16908117909155815189815233938101939093529296508692918a917fd46a8ff77c59c98b930d834768ba8d0983b5a0b99ebbd12af00f2f182eeeeee1910160405180910390a45050509392505050565b610e6c82610b10565b826005336001600160a01b0384161480610f14575060405163c161c93f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f90610ed390339087908790879060040161249d565b602060405180830381865afa158015610ef0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1491906124c6565b610f305760405162461bcd60e51b81526004016105da906124e3565b83610f875760405162461bcd60e51b815260206004820152602160248201527f50726f6a656374733a3a73657448616e646c653a20454d5054595f48414e444c6044820152604560f81b60648201526084016105da565b600084815260096020526040902054158015610fb857506000848152600a60205260409020546001600160a01b0316155b61100e5760405162461bcd60e51b815260206004820152602160248201527f50726f6a656374733a3a73657448616e646c653a2048414e444c455f54414b456044820152602760f91b60648201526084016105da565b600085815260086020818152604080842080548552600983528185208590558885528185208a9055938990529181529186905551338152859187917e079d7af084def275bc880ac88a2e556cf9a2001231b27a71d0082607876ac5910161082d565b61107983610b10565b836006336001600160a01b0384161480611121575060405163c161c93f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f906110e090339087908790879060040161249d565b602060405180830381865afa1580156110fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112191906124c6565b61113d5760405162461bcd60e51b81526004016105da906124e3565b6000868152600760205260409020611156908686611fb4565b50857f0f3d240fe5efaeda774d27bf0425f932ddd2098297b26de8070d6c8bef534b1686863360405161118b93929190612615565b60405180910390a2505050505050565b6000818152600960205260409020546112045760405162461bcd60e51b815260206004820152602560248201527f50726f6a656374733a3a6368616c6c656e67653a2048414e444c455f4e4f545f6044820152642a20a5a2a760d91b60648201526084016105da565b6000818152600b60205260409020541561127d5760405162461bcd60e51b815260206004820152603460248201527f50726f6a656374733a3a6368616c6c656e67653a2048414e444c455f414c524560448201527310511657d091525391d7d0d2105313115391d15160621b60648201526084016105da565b600061128d6301e1338042612641565b6000838152600b60209081526040918290208390558151838152339181019190915291925083917faf2127fffe00ce10845b5f12864ad13e3dee324decf80640437b2414f095cba2910160405180910390a25050565b6060600180546104e290612463565b6112fd338383611b3c565b5050565b6007602052600090815260409020805461131a90612463565b80601f016020809104026020016040519081016040528092919081815260200182805461134690612463565b80156113935780601f1061136857610100808354040283529160200191611393565b820191906000526020600020905b81548152906001019060200180831161137657829003601f168201915b505050505081565b6113a533836118a9565b6113c15760405162461bcd60e51b81526004016105da906125c4565b6113cd84848484611c0a565b50505050565b6000818152600260205260409020546060906001600160a01b03166114525760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016105da565b600061146960408051602081019091526000815290565b9050600081511161148957604051806020016040528060008152506114b4565b8061149384611c3d565b6040516020016114a4929190612659565b6040516020818303038152906040525b9392505050565b81816007336001600160a01b0384161480611564575060405163c161c93f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9061152390339087908790879060040161249d565b602060405180830381865afa158015611540573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061156491906124c6565b806115fe575060405163c161c93f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f906115bd9033908790600090879060040161249d565b602060405180830381865afa1580156115da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115fe91906124c6565b61161a5760405162461bcd60e51b81526004016105da906124e3565b61162384610b10565b846007336001600160a01b03841614806116cb575060405163c161c93f60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c161c93f9061168a90339087908790879060040161249d565b602060405180830381865afa1580156116a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116cb91906124c6565b6116e75760405162461bcd60e51b81526004016105da906124e3565b6000898152600a60205260409020546001600160a01b038981169116148061173457506000898152600b60205260409020541580159061173457506000898152600b602052604090205442115b61178c5760405162461bcd60e51b815260206004820152602360248201527f50726f6a656374733a3a636c61696d48616e646c653a20554e415554484f524960448201526216915160ea1b60648201526084016105da565b600087815260086020908152604080832080548452600983528184208490558c84528184208b90558c9055600a825280832080546001600160a01b0319169055600b82528083209290925590513381528a9189916001600160a01b038c16917f4279bc2ed0274fe67b68b23fa01625aeb258bd08c0b98aab7064f44a5666388b910160405180910390a4505050505050505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061185682610b10565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6112fd828260405180602001604052806000815250611d3e565b6000818152600260205260408120546001600160a01b03166119225760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105da565b600061192d83610b10565b9050806001600160a01b0316846001600160a01b031614806119685750836001600160a01b031661195d84610565565b6001600160a01b0316145b8061199857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166119b382610b10565b6001600160a01b031614611a175760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016105da565b6001600160a01b038216611a795760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105da565b611a84600082611821565b6001600160a01b0383166000908152600360205260408120805460019290611aad908490612688565b90915550506001600160a01b0382166000908152600360205260408120805460019290611adb908490612641565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603611b9d5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105da565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611c158484846119a0565b611c2184848484611d71565b6113cd5760405162461bcd60e51b81526004016105da9061269f565b606081600003611c645750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611c8e5780611c7881612530565b9150611c879050600a83612707565b9150611c68565b60008167ffffffffffffffff811115611ca957611ca961233f565b6040519080825280601f01601f191660200182016040528015611cd3576020820181803683370190505b5090505b841561199857611ce8600183612688565b9150611cf5600a8661271b565b611d00906030612641565b60f81b818381518110611d1557611d1561272f565b60200101906001600160f81b031916908160001a905350611d37600a86612707565b9450611cd7565b611d488383611e72565b611d556000848484611d71565b61070f5760405162461bcd60e51b81526004016105da9061269f565b60006001600160a01b0384163b15611e6757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611db5903390899088908890600401612745565b6020604051808303816000875af1925050508015611df0575060408051601f3d908101601f19168201909252611ded91810190612782565b60015b611e4d573d808015611e1e576040519150601f19603f3d011682016040523d82523d6000602084013e611e23565b606091505b508051600003611e455760405162461bcd60e51b81526004016105da9061269f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611998565b506001949350505050565b6001600160a01b038216611ec85760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105da565b6000818152600260205260409020546001600160a01b031615611f2d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105da565b6001600160a01b0382166000908152600360205260408120805460019290611f56908490612641565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b828054611fc090612463565b90600052602060002090601f016020900481019282611fe25760008555612028565b82601f10611ffb5782800160ff19823516178555612028565b82800160010185558215612028579182015b8281111561202857823582559160200191906001019061200d565b50612034929150612038565b5090565b5b808211156120345760008155600101612039565b6001600160e01b03198116811461206357600080fd5b50565b60006020828403121561207857600080fd5b81356114b48161204d565b60005b8381101561209e578181015183820152602001612086565b838111156113cd5750506000910152565b600081518084526120c7816020860160208601612083565b601f01601f19169290920160200192915050565b6020815260006114b460208301846120af565b60006020828403121561210057600080fd5b5035919050565b6001600160a01b038116811461206357600080fd5b6000806040838503121561212f57600080fd5b823561213a81612107565b946020939093013593505050565b60008083601f84011261215a57600080fd5b50813567ffffffffffffffff81111561217257600080fd5b60208301915083602082850101111561218a57600080fd5b9250929050565b6000806000806000608086880312156121a957600080fd5b85356121b481612107565b945060208601359350604086013567ffffffffffffffff8111156121d757600080fd5b6121e388828901612148565b90945092505060608601356121f781612107565b809150509295509295909350565b60008060006060848603121561221a57600080fd5b833561222581612107565b9250602084013561223581612107565b929592945050506040919091013590565b60006020828403121561225857600080fd5b81356114b481612107565b60008060006060848603121561227857600080fd5b83359250602084013561223581612107565b6000806040838503121561229d57600080fd5b50508035926020909101359150565b6000806000604084860312156122c157600080fd5b83359250602084013567ffffffffffffffff8111156122df57600080fd5b6122eb86828701612148565b9497909650939450505050565b801515811461206357600080fd5b6000806040838503121561231957600080fd5b823561232481612107565b91506020830135612334816122f8565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561236b57600080fd5b843561237681612107565b9350602085013561238681612107565b925060408501359150606085013567ffffffffffffffff808211156123aa57600080fd5b818701915087601f8301126123be57600080fd5b8135818111156123d0576123d061233f565b604051601f8201601f19908116603f011681019083821181831017156123f8576123f861233f565b816040528281528a602084870101111561241157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561244857600080fd5b823561245381612107565b9150602083013561233481612107565b600181811c9082168061247757607f821691505b60208210810361249757634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6000602082840312156124d857600080fd5b81516114b4816122f8565b60208082526018908201527f4f706572617461626c653a20554e415554484f52495a45440000000000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000600182016125425761254261251a565b5060010190565b60006020828403121561255b57600080fd5b81516114b481612107565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6060815260006125a3606083018688612566565b6001600160a01b039485166020840152929093166040909101529392505050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b604081526000612629604083018587612566565b905060018060a01b0383166020830152949350505050565b600082198211156126545761265461251a565b500190565b6000835161266b818460208801612083565b83519083019061267f818360208801612083565b01949350505050565b60008282101561269a5761269a61251a565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b600082612716576127166126f1565b500490565b60008261272a5761272a6126f1565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612778908301846120af565b9695505050505050565b60006020828403121561279457600080fd5b81516114b48161204d56fea2646970667358221220c5ccc1161d1c0b56661668fca58f7748c05b18d58007d2a364f1251132fa359964736f6c634300080d0033";

type ProjectsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProjectsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Projects__factory extends ContractFactory {
  constructor(...args: ProjectsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Projects";
  }

  deploy(
    _operatorStore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Projects> {
    return super.deploy(_operatorStore, overrides || {}) as Promise<Projects>;
  }
  getDeployTransaction(
    _operatorStore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_operatorStore, overrides || {});
  }
  attach(address: string): Projects {
    return super.attach(address) as Projects;
  }
  connect(signer: Signer): Projects__factory {
    return super.connect(signer) as Projects__factory;
  }
  static readonly contractName: "Projects";
  public readonly contractName: "Projects";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProjectsInterface {
    return new utils.Interface(_abi) as ProjectsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Projects {
    return new Contract(address, _abi, signerOrProvider) as Projects;
  }
}
