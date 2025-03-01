import React from "react";
import noImageProduct from "../assets/icons/no-image-product.svg";
const CardProduct = ({ productData }) => {
    return (
        <article className="p-4 flex flex-col gap-4  justify-center border border-solid border-[rgba(74, 85, 104, 0.30)]">
            <figure className="pt-[100%] relative w-full h-full">
                <img
                    className="absolute inset-0 object-contain"
                    src={productData?.images[1] || noImageProduct}
                    alt={productData?.title}
                />
            </figure>
            <div>
                {/* Title product */}
                <h3 className="text-sm text-[#222] font-semibold leading-[157.143%]">
                    {productData?.title}
                </h3>
                {/* Price */}
                <span className="block text-[15px] text-[#0DA487] font-semibold leading-[140%] mt-[3px]">
                    {productData?.price}
                </span>
                {/* Rating start */}
                {/* Button Add */}
            </div>
        </article>
    );
};
export default CardProduct;
