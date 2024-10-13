import React from "react";
import { NavLink } from "react-router-dom";
import { createSlug } from "../ultils/helper";
import { useSelector } from "react-redux";
const Sidebar = () => {
    const { categories } = useSelector((state) => state.app);
    return (
        <aside className="p-[33px] bg-[#F8F8F8] basis-3/12 rounded-[10px] flex-shrink-0">
            <h2 className="relative inline-flex pb-[6px] text-[20px] font-semibold pt-[6px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[70%] after:bg-primary after:h-[2px]">
                Category
            </h2>
            <ul className="flex flex-col mt-[34px]">
                {categories?.map((el) => (
                    <li className="group flex items-center gap-x-4">
                        <NavLink
                            key={el.id}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary"
                                    : "group-first:pt-0 group-last:pb-0 flex hover:text-primary transition py-3"
                            }
                            to={createSlug(el.title)}
                        >
                            {el.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
