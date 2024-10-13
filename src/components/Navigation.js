import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../ultils/contants";
import arrow from "../assets/icons/arrow.svg";
import lightning from "../assets/icons/lightning.svg";
import bar from "../assets/icons/bar.svg";

const Navigation = () => {
    return (
        <div className="mt-6">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <button className="relative flex items-center gap-x-[16px] bg-menu px-[30px] py-[15px] rounded-[5px]">
                        <img src={bar} alt="" />
                        <span className="font-semibold text-white">
                            All Categories
                        </span>
                    </button>
                    <nav>
                        <ul className="flex items-center">
                            {navigation.map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "group flex items-center gap-2 py-2 px-4 hover:text-primary nav-link text-primary"
                                                : "group flex items-center gap-2 py-2 px-4 text-[#222] hover:text-primary nav-link"
                                        }
                                    >
                                        {item.value}
                                        <img
                                            src={arrow}
                                            alt=""
                                            className="relative top-[2px]  group-hover:rotate-180 transition-all nav-icon"
                                        />
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="flex items-center py-[15px] px-5 bg-[rgb(13,164,135,0.1)] gap-x-[10px] rounded-[5px]">
                        <img src={lightning} alt="" />
                        <span className="font-semibold text-[#0DA487]">
                            Deal Today
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
