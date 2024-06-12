"use client";

import axiosInstance from "@/app/utils/axiosInstance";
import { useState } from "react";

const AddToCartComponent = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const addToCart = async () => {
    setIsLoading(true);
    try {

      setIsLoading(true);
      const response = await axiosInstance.post(
        `website/products/addToCart`,

        {
          
          product_id: props.id,
          quantity: quantity,
        }
      );

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex cursor-pointer">
        <div className="flex">
          <div
            className="p-5"
            onClick={() => {
              if (quantity < 2) return;
              setQuantity(quantity - 1);
            }}
          >-</div>
          <div className="p-5">{quantity}</div>
          <div
            className="p-5"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </div>
        </div>

        <button
          className="p-3 bg-black-300 text-black"
          onClick={() => {
            addToCart();
          }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default AddToCartComponent;
