import React from "react";
import NavBar from './../Components/NavBar';
import SideBar from './../Components/SideBar';
import ProductCard from './../Components/CardComponent';
import products from "./../utility/data"

const HomePage = () => {
    return (
        <div className="relative">
            <div className="fixed top-0 w-[100%] z-10 bg-white">
                <NavBar /></div>
            <div className="fixed top-20 p-8 border-x-2 h-[100%] hidden md:block ">
                <SideBar />
            </div>
            <div className="flex flex-wrap gap-6 mt-28 ml-32 justify-start">
                {products[0].map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
