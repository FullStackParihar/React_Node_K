import React from "react";
import NavBar from './../Components/NavBar';
import SideBar from './../Components/SideBar';
import ProductCard from './../Components/CardComponent';
import products from "./../utility/data"
import { Link } from "react-router-dom";
import { useToggle } from "../Context/ToggleContext";

const HomePage = () => {
    console.log(products);
    const { toggle, toggleValue } = useToggle();


    return (
        <div className="relative">
            <div className="fixed top-0 w-[100%] z-10 bg-white">
                <NavBar />
            </div>

            <div className={`fixed items-center top-[75px] left-0 h-full z-10 ${toggle ? 'w-20' : 'w-44'} border-r-2 bg-white p-4 duration-300 hidden lg:block`} >
                <SideBar />
            </div>
            {/* cardcomponent */}
            <div className="flex flex-wrap gap-6 mt-28 ml-24 justify-start">
                {products.map((product) => (
                    <Link to={`/innerpage/${product.id}`}> <ProductCard key={product.id} product={product} /></Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
