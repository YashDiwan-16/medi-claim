import React from "react";
import { Button } from "./button";

export interface NFTCardProps {
  image: string;
  name: string;
  price: string;
  owner: string;
  onBuy?: () => void;
}

export const NFTCard: React.FC<NFTCardProps> = ({ image, name, price, owner, onBuy }) => (
  <div className="border rounded-lg p-4 flex flex-col items-center shadow-md bg-white">
    <img src={image} alt={name} className="w-40 h-40 object-cover rounded mb-4" />
    <h3 className="font-semibold text-lg mb-2">{name}</h3>
    <p className="text-gray-500 text-sm mb-1">Owner: {owner}</p>
    <p className="font-bold text-md mb-3">Price: {price} ETH</p>
    {onBuy && <Button onClick={onBuy}>Buy</Button>}
  </div>
); 