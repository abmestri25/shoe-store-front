import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Link
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      href={`/product/${product?.attributes?.slug}`}
    >
      <Image width={500} height={500} src={product?.attributes?.thumbnail?.data?.attributes?.url} alt={product?.attributes?.name} />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{product?.attributes?.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">
            &#8377;{product?.attributes?.price}
          </p>
          <>
            <p className="text-base  font-medium line-through">
              &#8377;{product?.attributes?.original_price}
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              {getDiscountedPricePercentage(
                product?.attributes?.original_price,
                product?.attributes?.price
              )}
              % off
            </p>
          </>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
