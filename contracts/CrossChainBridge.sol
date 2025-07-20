// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./InsuranceNFT.sol";

contract CrossChainBridge is Ownable, ReentrancyGuard {
    InsuranceNFT public immutable insuranceNFT;
    
    struct BridgeTransaction {
        uint256 tokenId;
        address originalOwner;
        uint256 sourceChain;
        uint256 targetChain;
        bool completed;
        uint256 timestamp;
    }

    mapping(bytes32 => BridgeTransaction) public bridgeTransactions;
    mapping(uint256 => bool) public bridgedTokens;
    
    uint256 public immutable chainId;

    event BridgeInitiated(
        bytes32 indexed bridgeId,
        uint256 indexed tokenId,
        address indexed owner,
        uint256 targetChain
    );
    
    event BridgeCompleted(
        bytes32 indexed bridgeId,
        uint256 indexed tokenId,
        address indexed owner
    );

    constructor(address _insuranceNFT) Ownable(msg.sender) {
        insuranceNFT = InsuranceNFT(_insuranceNFT);
        chainId = block.chainid;
    }

    function bridgeNFT(
        uint256 tokenId,
        uint256 targetChain
    ) external nonReentrant returns (bytes32) {
        require(insuranceNFT.ownerOf(tokenId) == msg.sender, "Not token owner");
        require(targetChain != chainId, "Cannot bridge to same chain");
        
        // Get policy data before burning
        InsuranceNFT.PolicyData memory policyData = insuranceNFT.getPolicyData(tokenId);
        require(policyData.isClaimed, "Policy must be claimed before bridging");

        // Generate unique bridge ID
        bytes32 bridgeId = keccak256(
            abi.encodePacked(tokenId, msg.sender, chainId, targetChain, block.timestamp)
        );

        // Store bridge transaction
        bridgeTransactions[bridgeId] = BridgeTransaction({
            tokenId: tokenId,
            originalOwner: msg.sender,
            sourceChain: chainId,
            targetChain: targetChain,
            completed: false,
            timestamp: block.timestamp
        });

        // Burn NFT on source chain
        insuranceNFT.bridgeToPolygon(tokenId);
        bridgedTokens[tokenId] = true;

        emit BridgeInitiated(bridgeId, tokenId, msg.sender, targetChain);
        return bridgeId;
    }

    function completeBridge(
        bytes32 bridgeId,
        address to,
        uint256 coverageAmount,
        uint256 premium,
        uint256 duration,
        string memory policyType,
        string memory metadataURI
    ) external onlyOwner returns (uint256) {
        BridgeTransaction storage transaction = bridgeTransactions[bridgeId];
        require(!transaction.completed, "Bridge already completed");
        require(transaction.targetChain == chainId, "Wrong target chain");

        // Mint new NFT on target chain
        uint256 newTokenId = insuranceNFT.mintPolicy(
            to,
            coverageAmount,
            premium,
            duration,
            policyType,
            metadataURI
        );

        // Mark as claimed since it was bridged from a claimed policy
        insuranceNFT.markAsClaimed(newTokenId);

        transaction.completed = true;
        emit BridgeCompleted(bridgeId, newTokenId, to);

        return newTokenId;
    }

    function getBridgeTransaction(bytes32 bridgeId) external view returns (BridgeTransaction memory) {
        return bridgeTransactions[bridgeId];
    }

    function verifyBridge(bytes32 bridgeId) external view returns (bool) {
        return bridgeTransactions[bridgeId].completed;
    }
}