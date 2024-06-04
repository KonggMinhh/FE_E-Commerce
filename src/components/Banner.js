import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/img/banner-1.png";
import banner2 from "../assets/img/banner-2.jpg";
import banner3 from "../assets/img/banner-3.jpg";
import arrowLeft from "../assets/icons/arrow-left.svg";
const Banner = () => {
    return (
        <section className="container mx-auto flex gap-6 mt-8 h-[697px]">
            <div className="basis-8/12">
                <figure className="relative d-block overflow-hidden  w-full h-full pt-[66%]">
                    <img
                        className="absolute w-full h-full rounded-[10px] object-cover inset-0"
                        src={banner1}
                        alt="Banner"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-[60px] w-[540px]">
                        <div className="flex items-center gap-2">
                            <span className="text-[#4A5568] text-sm">
                                Exclusive offer{" "}
                            </span>
                            <span className="bg-banner flex items-center justify-center text-[#FF4F4F] font-medium w-[87px] h-[37px] px-[10px] py-4 text-sm tracking-[0.01rem] rounded-full">
                                30% Off
                            </span>
                        </div>
                        <h1 className="text-[#222] text-[42px] font-semibold leading-[140%]">
                            Stay home & delivered your{" "}
                            <b className="text-[#0DA487] font-extrabold">
                                Daily Needs
                            </b>
                        </h1>
                        <p className="text-[#4A5568] mt-[10px] text-sm tracking-[0.08rem] w-[505px]">
                            Vegetables contain many vitamins and minerals that
                            are good for your health.
                        </p>
                        <Link
                            href="#!"
                            className="flex items-center justify-center w-[182px] h-[55px] rounded-[5px] gap-3 text-white bg-cta mt-6"
                        >
                            <span className="text-lg font-semibold">Shop Now</span>
                            <img className="icon-white" src={arrowLeft} alt="Arrow" />
                        </Link>
                    </div>
                </figure>
            </div>
            <div className="basis-4/12 flex flex-col gap-6">
                <figure className="relative w-full h-full pt-[64%]">
                    <img
                        className="absolute w-full h-full rounded-[10px] object-cover inset-0"
                        src={banner2}
                        alt="Banner"
                    />
                    
                </figure>
                <figure className="relative w-full h-full pt-[63.50%]">
                    <img
                        className="absolute w-full h-full rounded-[10px] object-cover inset-0"
                        src={banner3}
                        alt="Banner"
                    />
                </figure>
            </div>
        </section>
    );
};

export default Banner;
