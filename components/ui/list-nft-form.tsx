import React, { useState } from "react";
import { Button } from "./button";

export interface ListNFTFormProps {
  onList: (nft: { name: string; image: string; price: string; description: string }) => void;
}

export const ListNFTForm: React.FC<ListNFTFormProps> = ({ onList }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onList({ name, image, price, description });
    setName("");
    setImage("");
    setPrice("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto">
      <input
        className="border rounded p-2"
        placeholder="NFT Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="border rounded p-2"
        placeholder="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
      />
      <input
        className="border rounded p-2"
        placeholder="Price (ETH)"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
        type="number"
        min="0"
        step="0.01"
      />
      <textarea
        className="border rounded p-2"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <Button type="submit">List NFT</Button>
    </form>
  );
}; 