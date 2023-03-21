import React from "react";
import { RiHome5Line } from "react-icons/ri";

const Sidebar = () => {
    return (
        <div className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full">
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
            <ul className="pl-4">
                <li className="bg-[#303e4d] p-4 rounded-tl-xl rounded-bl-xl">
                    <a href="" className="bg-[#246082] p-4 flex justify-center rounded-xl text-white">
                        <RiHome5Line className="text-2xl" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;