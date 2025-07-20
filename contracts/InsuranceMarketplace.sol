// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./InsuranceNFT.sol";

contract InsuranceMarketplace is Ownable, ReentrancyGuard {
    struct InsuranceProduct {
        string name;
        string description;
        uint256 coverageAmount;
        uint256 premium;
        uint256 duration; // in seconds
        string category;
        bool isActive;
        string[] terms;
    }

    InsuranceNFT public immutable insuranceNFT;
    
    mapping(uint256 => InsuranceProduct) public products;
    uint256 private _productIdCounter;

    event ProductCreated(uint256 indexed productId, string name, uint256 premium);
    event InsurancePurchased(uint256 indexed productId, uint256 indexed tokenId, address indexed buyer);

    constructor(address _insuranceNFT) Ownable(msg.sender) {
        insuranceNFT = InsuranceNFT(_insuranceNFT);
    }

    function createProduct(
        string memory name,
        string memory description,
        uint256 coverageAmount,
        uint256 premium,
        uint256 duration,
        string memory category,
        string[] memory terms
    ) external onlyOwner returns (uint256) {
        uint256 productId = _productIdCounter++;
        
        products[productId] = InsuranceProduct({
            name: name,
            description: description,
            coverageAmount: coverageAmount,
            premium: premium,
            duration: duration,
            category: category,
            isActive: true,
            terms: terms
        });

        emit ProductCreated(productId, name, premium);
        return productId;
    }

    function purchaseInsurance(
        uint256 productId,
        string memory metadataURI
    ) external payable nonReentrant returns (uint256) {
        InsuranceProduct storage product = products[productId];
        require(product.isActive, "Product not active");
        require(msg.value >= product.premium, "Insufficient payment");

        // Mint NFT policy
        uint256 tokenId = insuranceNFT.mintPolicy(
            msg.sender,
            product.coverageAmount,
            product.premium,
            product.duration,
            product.category,
            metadataURI
        );

        emit InsurancePurchased(productId, tokenId, msg.sender);

        // Refund excess payment
        if (msg.value > product.premium) {
            payable(msg.sender).transfer(msg.value - product.premium);
        }

        return tokenId;
    }

    function getProduct(uint256 productId) external view returns (InsuranceProduct memory) {
        return products[productId];
    }

    function toggleProductStatus(uint256 productId) external onlyOwner {
        products[productId].isActive = !products[productId].isActive;
    }

    function withdrawFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function getProductCount() external view returns (uint256) {
        return _productIdCounter;
    }
}