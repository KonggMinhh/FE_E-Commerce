import React from "react";
import { Link } from "react-router-dom";

import saleTop1 from "../assets/img/sale-top-1.jpg";
import saleTop2 from "../assets/img/sale-top-2.jpg";
import saleTop3 from "../assets/img/sale-top-3.jpg";
import saleTop4 from "../assets/img/sale-top-4.jpg";
import arrowLeft from "../assets/icons/arrow-left.svg";
const SaleTop = () => {
    return (
        <section className="container mx-auto flex mt-[50px]">
            <div className="w-full h-[231px] flex gap-[30px] flex-nowrap overflow-hidden">
                {/* Item 1  */}
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    <figure className="relative d-block overflow-hidden  w-full h-full pt-[60%]">
                        <img
                            className="absolute w-full h-full rounded-[10px] object-cover inset-0"
                            src={saleTop1}
                            alt=""
                        />
                        <div className="absolute left-0 top-[30px] bg-white py-3 pl-3 pr-[38.6px] rounded-tr-full rounded-br-full">
                            <div className="flex flex-col gap-[6px] items-start">
                                <span className="text-[#FF4F4F] text-sm leading-[120%]">
                                    5% OFF
                                </span>
                                <span className="text-[#222] text-lg font-semibold leading-[120%] ">
                                    Hot Deals on New Items
                                </span>
                                <span className="text-[#4A5568] leading-[120%] text-sm">
                                    Daily Essentials Eggs & Dairy
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end absolute bottom-0 left-0 bg-[#0ea487] rounded-tr-full rounded-tl-full w-[140px] h-[75px] opacity-85 ">
                            <Link
                                href="#!"
                                className="flex items-center ml-4 my-4 gap-2 text-white"
                            >
                                <span className="text-base font-semibold">
                                    Shop Now
                                </span>
                                <img
                                    className="icon-white"
                                    src={arrowLeft}
                                    alt="Arrow"
                                />
                            </Link>
                        </div>
                    </figure>
                </div>
                {/* Item 2  */}
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    <figure className="relative d-block overflow-hidden  w-full h-full pt-[60%]">
                        <img
                            className="absolute w-full h-full rounded-[10px] object-cover inset-0"
                            src={saleTop2}
                            alt=""
                        />
                        <div className="absolute left-0 top-[30px] bg-white py-3 pl-3 pr-[38.6px] rounded-tr-full rounded-br-full">
                            <div className="flex flex-col gap-[6px] items-start">
                                <span className="text-[#FF4F4F] text-sm leading-[120%]">
                                    5% OFF
                                </span>
                                <span className="text-[#222] text-lg font-semibold leading-[120%] ">
                                    Buy More & Save More
                                </span>
                                <span className="text-[#4A5568] leading-[120%] text-sm">
                                    Fresh Vegetables
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end absolute bottom-0 left-0 bg-[#FF4F4F] rounded-tr-full rounded-tl-full w-[140px] h-[75px] opacity-85 ">
                            <Link
                                href="#!"
                                className="flex items-center ml-4 my-4 gap-2 text-white"
                            >
                                <span className="text-base font-semibold">
                                    Shop Now
                                </span>
                                <img
                                    className="icon-white"
                                    src={arrowLeft}
                                    alt="Arrow"
                                />
                            </Link>
                        </div>
                    </figure>
                </div>
                {/* Item 3 */}
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    <figure className="relative d-block overflow-hidden  w-full h-full pt-[60%]">
                        <img
                            className="absolute w-full h-full rounded-[10px] object-cover inset-0"
                            src={saleTop3}
                            alt=""
                        />
                        <div className="absolute left-0 top-[30px] bg-white py-3 pl-3 pr-[38.6px] rounded-tr-full rounded-br-full">
                            <div className="flex flex-col gap-[6px] items-start">
                                <span className="text-[#FF4F4F] text-sm leading-[120%]">
                                    5% OFF
                                </span>
                                <span className="text-[#222] text-lg font-semibold leading-[120%] ">
                                    Hot Deals on New Items
                                </span>
                                <span className="text-[#4A5568] leading-[120%] text-sm">
                                    Daily Essentials Eggs & Dairy
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end absolute bottom-0 left-0 bg-[#FF4F4F] rounded-tr-full rounded-tl-full w-[140px] h-[75px] opacity-85 ">
                            <Link
                                href="#!"
                                className="flex items-center ml-4 my-4 gap-2 text-white"
                            >
                                <span className="text-base font-semibold">
                                    Shop Now
                                </span>
                                <img
                                    className="icon-white"
                                    src={arrowLeft}
                                    alt="Arrow"
                                />
                            </Link>
                        </div>
                    </figure>
                </div>
                {/* Item 4 */}
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    <figure className="relative d-block overflow-hidden  w-full h-full pt-[60%]">
                        <img
                            className="absolute w-full h-full rounded-[10px] object-cover inset-0"
                            src={saleTop4}
                            alt=""
                        />
                        <div className="absolute left-0 top-[30px] bg-white py-3 pl-3 pr-[38.6px] rounded-tr-full rounded-br-full">
                            <div className="flex flex-col gap-[6px] items-start">
                                <span className="text-[#FF4F4F] text-sm leading-[120%]">
                                    5% OFF
                                </span>
                                <span className="text-[#222] text-lg fonts-bold leading-[120%] ">
                                    Hot Deals on New Items
                                </span>
                                <span className="text-[#4A5568] leading-[120%] text-sm">
                                    Daily Essentials Eggs & Dairy
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end absolute bottom-0 left-0 bg-[#7CC9F3] rounded-tr-full rounded-tl-full w-[140px] h-[75px] opacity-85 ">
                            <Link
                                href="#!"
                                className="flex items-center ml-4 my-4 gap-2 text-white"
                            >
                                <span className="text-base font-semibold">
                                    Shop Now
                                </span>
                                <img
                                    className="icon-white"
                                    src={arrowLeft}
                                    alt="Arrow"
                                />
                            </Link>
                        </div>
                    </figure>
                </div>
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    <figure className="relative d-block overflow-hidden  w-full h-full pt-[60%]">
                        <img
                            className="absolute w-full h-full rounded-[10px] object-cover inset-0"
                            src={saleTop1}
                            alt=""
                        />
                        <div className="absolute left-0 top-[30px] bg-white py-3 pl-3 pr-[38.6px] rounded-tr-full rounded-br-full">
                            <div className="flex flex-col gap-[6px] items-start">
                                <span className="text-[#FF4F4F] text-sm leading-[120%]">
                                    5% OFF
                                </span>
                                <span className="text-[#222] text-lg fonts-bold leading-[120%] ">
                                    Hot Deals on New Items
                                </span>
                                <span className="text-[#4A5568] leading-[120%] text-sm">
                                    Daily Essentials Eggs & Dairy
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end absolute bottom-0 left-0 bg-[#0ea487] rounded-tr-full rounded-tl-full w-[140px] h-[75px] opacity-85 ">
                            <Link
                                href="#!"
                                className="flex items-center ml-4 my-4 gap-2 text-white"
                            >
                                <span className="text-base font-semibold">
                                    Shop Now
                                </span>
                                <img
                                    className="icon-white"
                                    src={arrowLeft}
                                    alt="Arrow"
                                />
                            </Link>
                        </div>
                    </figure>
                </div>
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    2
                </div>
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    3
                </div>
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    4
                </div>
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    5
                </div>
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    5
                </div>
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    5
                </div>
                <div className="flex-1 shrink-0 basis-[calc(25%_-_22.5px)] ">
                    5
                </div>
            </div>
        </section>
    );
};

export default SaleTop;
