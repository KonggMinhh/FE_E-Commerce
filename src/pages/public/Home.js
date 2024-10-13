import React, { Fragment } from "react";
import { Banner, SaleTop, Sidebar, BestSeller } from "../../components";
import leaf from "../../assets/icons/leaf.svg";
import time from "../../assets/icons/time.svg";

const Home = () => {
    return (
        <Fragment>
            <Banner></Banner>
            <SaleTop></SaleTop>
            {/* Top Save Today */}
            <div className="container mx-auto flex items-start gap-x-[30px] mt-[50px]">
                <Sidebar></Sidebar>
                <div className="flex flex-1 flex-col basis-9/12">
                    <div className="flex items-center ">
                        <div className="flex flex-col gap-y-[7px]">
                            <h2 className="text-[28px] font-bold capitalize leading-7">
                                Top Save Today
                            </h2>
                            <figure className="flex relative before:content-[''] before:absolute before:block before:w-12 before:h-[1.5px] before:bg-[#0DA487] before:top-1/2 after:content-[''] after:absolute after:block after:w-12 after:h-[1.5px] after:bg-[#0DA487] after:right-[60px] after:top-1/2">
                                <img src={leaf} className="ml-12" alt="" />
                            </figure>
                        </div>
                        <button className="flex text-sm items-center text-white p-3 rounded-[5px] bg-[#FF4F4F] gap-[10px] ml-auto hover:opacity-80">
                            <img src={time} alt="" />
                            <span className="leading-[14px]">Expires in :</span>
                            <span className="flex leading-[14px]">
                                14:23:59:55
                            </span>
                        </button>
                    </div>
                    <div className="flex items-center justify-between flex-col gap-y-[30px]">
                        <BestSeller></BestSeller>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
