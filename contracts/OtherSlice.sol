// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./extensions/Purchasable/SlicerPurchasable.sol";
import "erc721a/contracts/ERC721A.sol";

/**
 * @title OtherSlice
 * @author jacopo.eth
 *
 * @notice Minimal ERC721A implementation that uses SlicerPurchasable extension to mint NFTs via Slice (Rinkeby demo).
 *
 * Note: Max quantity purchasable per address and total mint amount is handled via Slice {ProductsModule}
 */
contract OtherSlice is ERC721A, SlicerPurchasable {
    constructor(
        string memory name_,
        string memory symbol_,
        address productsModuleAddress_,
        uint256 slicerId_
    ) ERC721A(name_, symbol_) SlicerPurchasable(productsModuleAddress_, slicerId_) {}

    /// ============ Functions ============

    /**
     * @notice Overridable function containing the requirements for an account to be eligible for the purchase.
     *
     * @dev Used on the Slice interface to check whether a user is able to buy a product. See {ISlicerPurchasable}.
     */
    // function isPurchaseAllowed(
    //     uint256,
    //     uint256,
    //     address,
    //     uint256,
    //     bytes memory,
    //     bytes memory
    // ) public view override returns (bool isAllowed) {
    //     // Add all requirements related to product purchase here
    //     // Return true if account is allowed to buy product
    //     return true;
    // }

    /**
     * @notice Overridable function to handle external calls on product purchases from slicers. See {ISlicerPurchasable}
     */
    function onProductPurchase(
        uint256 slicerId,
        uint256, // productId
        address account,
        uint256 quantity,
        bytes memory, // slicerCustomData
        bytes memory // buyerCustomData
    ) external payable override onlyOnPurchaseFrom(slicerId) {
        // Check whether the account is allowed to buy a product.
        // if (
        //     !isPurchaseAllowed(
        //         slicerId,
        //         productId,
        //         account,
        //         quantity,
        //         slicerCustomData,
        //         buyerCustomData
        //     )
        // ) revert NotAllowed();

        // Mints `quantity` NFTs to `account`
        _safeMint(account, quantity);
    }
}
