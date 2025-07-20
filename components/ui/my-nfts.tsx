import React from "react";
import { NFTCard } from "./nft-card";

const myMockNFTs = [
  {
    image: "/vercel.svg",
    name: "Vercel NFT",
    price: "0.3",
    owner: "You",
  },
];

export const MyNFTs: React.FC = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">My NFTs</h2>
    {myMockNFTs.length === 0 ? (
      <p className="text-gray-500">You don't own any NFTs yet.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myMockNFTs.map((nft, idx) => (
          <NFTCard key={idx} {...nft} />
        ))}
      </div>
    )}
  </div>
); 