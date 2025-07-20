"use client";
import React, { useState } from "react";
import { NFTGallery } from "@/components/ui/nft-gallery";
import { ListNFTForm } from "@/components/ui/list-nft-form";
import { MyNFTs } from "@/components/ui/my-nfts";

const MarketplacePage = () => {
  const [showListForm, setShowListForm] = useState(false);

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-[#1E3A8A]">NFT Marketplace</h1>
      <div className="flex justify-center mb-10">
        <button
          className="bg-[#22C55E] hover:bg-[#16a34a] text-white px-6 py-2 rounded-full font-semibold shadow transition-colors"
          onClick={() => setShowListForm((v) => !v)}
        >
          {showListForm ? "Close Listing Form" : "List New NFT"}
        </button>
      </div>
      {showListForm && (
        <div className="mb-12">
          <ListNFTForm onList={(nft) => alert(`NFT listed: ${nft.name}`)} />
        </div>
      )}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-slate-200" />
          <h2 className="text-2xl font-bold text-[#1E3A8A] whitespace-nowrap">Explore NFTs</h2>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <NFTGallery />
      </section>
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-slate-200" />
          <h2 className="text-2xl font-bold text-[#1E3A8A] whitespace-nowrap">My NFTs</h2>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <MyNFTs />
      </section>
    </main>
  );
};

export default MarketplacePage; 