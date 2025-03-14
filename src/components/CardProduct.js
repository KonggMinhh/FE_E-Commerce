import React from "react";
import noImageProduct from "../assets/icons/no-image-product.svg";
import addIcon from "../assets/icons/add.svg";
import { formatMoney } from "../ultils/helper";
const CardProduct = ({ productData }) => {
    return (
        <article className="p-4 flex flex-col gap-4  justify-center border border-solid border-[rgba(74, 85, 104, 0.30)]">
            {/* New */}
            <div className="relative w-[60px] h-[31px] flex items-center justify-center bg-[#FFBA00] before:content-[''] before:absolute  before:bg-transparent before:top-0 before:-right-4 before:border-[16px] before:border-solid before:border-t-[#FFBA00] before:border-x-transparent before:border-b-transparent">
                <span className="uppercase text-white text-sm font-bold">
                    New
                </span>
            </div>

            {/* Thumb */}
            <figure className="pt-[100%] relative w-full h-full">
                <img
                    className="absolute inset-0 object-contain"
                    src={productData?.images[1] || noImageProduct}
                    alt={productData?.title}
                />
            </figure>
            {/* Content */}
            <div>
                {/* Title product */}
                <h3 className="text-sm text-[#222] font-semibold leading-[157.143%]">
                    {productData?.title}
                </h3>
                {/* Price */}
                <span className="block text-[15px] text-[#0DA487] font-semibold leading-[140%] mt-[3px]">
                    {`${formatMoney(productData?.price)}`}
                </span>
                {/* Rating start */



                {/* Button Add */}
                <button className="relative flex justify-content items-center mt-[10px] h-[42.5px] w-full rounded-[50px] bg-[#F8F8F8] py-[2px] px-1">
                    <span className="relative left-[18px] flex-1 text-[#4A5568] text-sm font-medium">
                        Add
                    </span>
                    <span className="w-[37px] h-[37px] flex items-center justify-center bg-white rounded-full">
                        <img src={addIcon} alt="icon" />
                    </span>
                </button>
            </div>
        </article>
    );
};
export default CardProduct;
