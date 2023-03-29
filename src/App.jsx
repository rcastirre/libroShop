import { useState } from "react";
import Sidebar from "./components/shared/Sidebar"
import Header from "./components/shared/Header";
import { RiMenu3Fill, RiUserStarFill, RiAddLine, RiCloseLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { TfiShoppingCart } from "react-icons/tfi";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
  return (
    <div className="bg-[#303e4d] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex item-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUserStarFill />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <TfiShoppingCart />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Seleccionar libro</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> ordenar
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo1"
              author="Autor1"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo2"
              author="Autor2"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo3"
              author="Autor3"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo4"
              author="Autor4"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo5"
              author="Autor5"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo6"
              author="Autor6"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo7"
              author="Autor7"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo8"
              author="Autor8"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo9"
              author="Autor9"
              price="0.00"
              inventory="0"
            />
            {/* Card */}
            <Card
              img="libro.png"
              description="Titulo10"
              author="Autor10"
              price="0.00"
              inventory="0"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
