import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { RiUserStarFill, RiLogoutBoxLine } from "react-icons/ri";
import { TfiShoppingCart } from "react-icons/tfi";
import { ImBooks } from "react-icons/im";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
//GrCatalog
import { SiBookstack } from "react-icons/si";

const Sidebar = () => {
    return (
        <div className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rouded-br-xl">
            <div>
                <ul className="pl-4">
                    <li>
                        <h1 className="text-xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
                    </li>
                    <li className="bg-[#303e4d] p-4 rounded-tl-xl rounded-bl-xl" title="Inicio">
                        <a href="" className="bg-[#246082] p-4 flex justify-center rounded-xl text-white">
                            <RiHome5Line className="text-xl" />
                        </a>
                    </li>
                    <li className="hover:bg-[#303e4d] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="" className="group-hover:bg-[#246082] p-4 flex justify-center rounded-xl text-[#246082] group-hover:text-white transition-colors" title="Buscar títulos">
                            <ImBooks className="text-xl" />
                        </a>
                    </li>
                    <li className="hover:bg-[#303e4d] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="" className="group-hover:bg-[#246082] p-4 flex justify-center rounded-xl text-[#246082] group-hover:text-white transition-colors" title="Compra externa">
                            <SiBookstack className="text-xl" />
                        </a>
                    </li>
                    <li className="hover:bg-[#303e4d] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="" className="group-hover:bg-[#246082] p-4 flex justify-center rounded-xl text-[#246082] group-hover:text-white transition-colors" title="Comprar">
                            <TfiShoppingCart className="text-xl" />
                        </a>
                    </li>
                    <li className="hover:bg-[#303e4d] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="" className="group-hover:bg-[#246082] p-4 flex justify-center rounded-xl text-[#246082] group-hover:text-white transition-colors" title="Usuarios">
                            <RiUserStarFill className="text-xl" />
                        </a>
                    </li>
                    <li className="hover:bg-[#303e4d] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="" className="group-hover:bg-[#246082] p-4 flex justify-center rounded-xl text-[#246082] group-hover:text-white transition-colors" title="Catalogo">
                            <RiGitRepositoryCommitsFill className="text-xl" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="pl-4">
                    <li className="hover:bg-[#303e4d] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="" className="group-hover:bg-[#246082] p-4 flex justify-center rounded-xl text-[#246082] group-hover:text-white transition-colors" title="Cerrar Sesión">
                            <RiLogoutBoxLine className="text-xl" />
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default Sidebar;