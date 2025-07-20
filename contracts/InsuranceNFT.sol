// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InsuranceNFT is ERC721, Ownable {
    struct PolicyData {
        uint256 coverageAmount;
        uint256 premium;
        uint256 startDate;
        uint256 endDate;
        string policyType;
        bool isClaimed;
        string metadataURI;
    }

    mapping(uint256 => PolicyData) public policies;
    mapping(address => bool) public authorizedMinters;
    mapping(address => bool) public authorizedBridges;
    
    uint256 private _tokenIdCounter;

    event PolicyMinted(uint256 indexed tokenId, address indexed owner, uint256 coverageAmount);
    event PolicyClaimed(uint256 indexed tokenId, address indexed claimant);

    constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {}

    function setMinter(address minter, bool authorized) external onlyOwner {
        authorizedMinters[minter] = authorized;
    }

    function setBridge(address bridge, bool authorized) external onlyOwner {
        authorizedBridges[bridge] = authorized;
    }

    function mintPolicy(
        address to,
        uint256 coverageAmount,
        uint256 premium,
        uint256 duration,
        string memory policyType,
        string memory metadataURI
    ) external returns (uint256) {
        require(authorizedMinters[msg.sender], "Not authorized to mint");
        
        uint256 tokenId = _tokenIdCounter++;
        uint256 startDate = block.timestamp;
        uint256 endDate = startDate + duration;

        policies[tokenId] = PolicyData({
            coverageAmount: coverageAmount,
            premium: premium,
            startDate: startDate,
            endDate: endDate,
            policyType: policyType,
            isClaimed: false,
            metadataURI: metadataURI
        });

        _mint(to, tokenId);
        emit PolicyMinted(tokenId, to, coverageAmount);
        
        return tokenId;
    }

    function getPolicyData(uint256 tokenId) external view returns (PolicyData memory) {
        require(_ownerOf(tokenId) != address(0), "Policy does not exist");
        return policies[tokenId];
    }

    function claimPolicy(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Not policy owner");
        require(!policies[tokenId].isClaimed, "Policy already claimed");
        require(block.timestamp <= policies[tokenId].endDate, "Policy expired");

        policies[tokenId].isClaimed = true;
        emit PolicyClaimed(tokenId, msg.sender);
    }

    function markAsClaimed(uint256 tokenId) external {
        require(authorizedBridges[msg.sender], "Not authorized bridge");
        require(_ownerOf(tokenId) != address(0), "Policy does not exist");
        
        policies[tokenId].isClaimed = true;
        emit PolicyClaimed(tokenId, ownerOf(tokenId));
    }

    function bridgeToPolygon(uint256 tokenId) external {
        require(authorizedBridges[msg.sender], "Not authorized bridge");
        require(policies[tokenId].isClaimed, "Policy not claimed");
        
        // Burn the NFT on this chain for bridging
        _burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "Policy does not exist");
        return policies[tokenId].metadataURI;
    }
}