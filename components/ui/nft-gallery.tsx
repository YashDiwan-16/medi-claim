import React from "react";
import { NFTCard } from "./nft-card";

const mockNFTs = [
  {
    image: "/globe.svg",
    name: "Globe NFT",
    price: "0.5",
    owner: "0x123...abc",
  },
  {
    image: "/window.svg",
    name: "Window NFT",
    price: "1.2",
    owner: "0x456...def",
  },
  {
    image: "/file.svg",
    name: "File NFT",
    price: "0.8",
    owner: "0x789...ghi",
  },
];

export const NFTGallery: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {mockNFTs.map((nft, idx) => (
      <NFTCard key={idx} {...nft} onBuy={() => alert(`Buying ${nft.name}`)} />
    ))}
  </div>
); 