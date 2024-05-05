import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import path from "../ultils/path";
import location from "../assets/icons/location.svg";
import united from "../assets/img/united-states.png";
import arrow from "../assets/icons/arrow.svg";
import search from "../assets/icons/search.svg";
import phone from "../assets/icons/phone.svg";
import heart from "../assets/icons/heart.svg";
import cart from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";
import logo from "../assets/logo/logo.png";
const Header = () => {
    return (
        <Fragment>
            <div className="bg-primary py-3 h-[42px]">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-x-[5px]">
                        <img src={location} className="icon-white" alt="" />
                        <span className="text-white text-sm  font-medium whitespace-nowrap">
                            1418 Riverwood Drive, CA 96052, US
                        </span>
                    </div>
                    <div className="flex items-center gap-x-[5px]">
                        <span className="text-white text-sm">
                            Something you love is now on sale!{" "}
                        </span>
                        <Link
                            className="text-white text-sm font-semibold underline"
                            href="#!"
                        >
                            Buy Now !
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img src={united} alt="" className="mr-[10px]" />
                            <span className="text-white text-sm font-medium mr-2">
                                English
                            </span>
                            <img src={arrow} className="icon-white" alt="" />
                        </div>
                        <span className="w-[2px] h-5 bg-white opacity-30 mx-[10px]"></span>
                        <div className="flex items-center">
                            <span className="text-white text-sm font-medium mr-2">
                                USD
                            </span>
                            <img src={arrow} className="icon-white" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Header */}
            <header className="flex items-center mt-6 sticky top-[42px] z-30">
                <div className="container mx-auto flex items-center">
                    {/* Logo  */}
                    <Link to={`/${path.HOME}`}>
                        <img className="w-[162px]" src={logo} alt="" />
                    </Link>
                    {/* Location */}
                    <div className="flex items-center p-2 rounded-[5px] border border-[#ECECEC] h-[51px] gap-x-[17px] ml-[60px]">
                        <div className="w-[35px] h-[35px] rounded-[5px] p-[10px] bg-[#F3F5F9]">
                            <img src={location} alt="" className="icon-black" />
                        </div>
                        <div className="flex items-center gap-x-[10px] leading-6">
                            <span className="text-[15px] text-primary font-semibold">
                                Your Location
                            </span>
                            <button>
                                <img
                                    src={arrow}
                                    className="icon-black w-[13px] "
                                    alt=""
                                />
                            </button>
                        </div>
                    </div>
                    {/* Search */}
                    <div className="flex ml-[14px] flex-1 mr-[30px]">
                        <div className="py-2 px-[15px] rounded-l-[5px] w-full border border-[#ECECEC] h-[51px]">
                            <input
                                type="text"
                                placeholder="I'm searching for..."
                                className="w-full h-full outline-none placeholder:text-[15px]  placeholder:text-[#6C757D]"
                            />
                        </div>
                        <button className="flex items-center justify-center bg-[#FFA53B] w-[62px] h-[51px] border border-[#FFA53B] rounded-r-[5px] ">
                            <img src={search} alt="" />
                        </button>
                    </div>
                    {/* Action */}
                    <div className="flex items-center ml-auto">
                        {/* Delivery  */}
                        <div className="flex gap-x-[15px]">
                            <img src={phone} alt="" />
                            <div className="flex flex-col">
                                <span className="text-[#4A5568] text-sm">
                                    24/7 Delivery
                                </span>
                                <Link
                                    className="font-medium hover:text-primary"
                                    href="+91 888 104 2340"
                                >
                                    +91 888 104 2340
                                </Link>
                            </div>
                        </div>
                        <span className="w-[1px] h-[24px]  bg-[#4A5568] opacity-50 mx-[14px]"></span>
                        {/* Heart */}
                        <button>
                            <img src={heart} alt="" />
                        </button>
                        <span className="w-[1px] h-[24px]  bg-[#4A5568] opacity-50 mx-[14px]"></span>
                        {/* Cart */}
                        <button class="relative">
                            <img src={cart} alt="" />
                            <span className="bottom-[15px] left-[15px] absolute flex items-center justify-center  w-[18px] h-[18px] rounded-[2px] bg-[#FF7272] text-xs text-white font-bold">
                                99
                            </span>
                        </button>
                        <span className="w-[1px] h-[24px]  bg-[#4A5568] opacity-50 mx-[14px]"></span>
                        {/* Account */}
                        <div className="flex items-center gap-x-[14px]">
                            <button>
                                <img src={user} alt="" />
                            </button>
                            <div className="flex flex-col gap-y-[3px]">
                                <span className="text-sm text-[#4A5568]">
                                    Hello,
                                </span>
                                <span class="font-medium">My Account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
