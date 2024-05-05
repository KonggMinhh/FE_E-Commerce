import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../ultils/contants";

import bar from "../assets/icons/bar.svg";

const Navigation = () => {
    return (
        <div className="mt-6">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="relative flex items-center gap-x-[16px] bg-menu px-[30px] py-[15px] rounded-[5px]">
                        <img src={bar} alt="" />
                        <span className="font-semibold text-white">
                            All Categories
                        </span>
                    </div>
                    <nav>
                        <ul className="flex items-center">
                            {navigation.map((item) => (
                                <li>
                                    <NavLink
                                        key={item.id}
                                        to={item.path}
                                        activeClassName="active"
                                    >
                                        {item.value}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="relative flex items-center gap-x-[16px] bg-menu px-[30px] py-[15px] rounded-[5px]">
                        <img src={bar} alt="" />
                        <span className="font-semibold text-white">
                            All Categories
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
