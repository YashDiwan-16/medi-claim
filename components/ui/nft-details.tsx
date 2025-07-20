import React from "react";
import { Button } from "./button";

export interface NFTDetailsProps {
  image: string;
  name: string;
  price: string;
  owner: string;
  description: string;
  onBuy?: () => void;
  onClose: () => void;
}

export const NFTDetails: React.FC<NFTDetailsProps> = ({ image, name, price, owner, description, onBuy, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
      <img src={image} alt={name} className="w-64 h-64 object-cover rounded mb-4 mx-auto" />
      <h2 className="font-bold text-2xl mb-2">{name}</h2>
      <p className="text-gray-500 text-sm mb-1">Owner: {owner}</p>
      <p className="font-bold text-md mb-2">Price: {price} ETH</p>
      <p className="mb-4">{description}</p>
      {onBuy && <Button onClick={onBuy}>Buy</Button>}
    </div>
  </div>
); 