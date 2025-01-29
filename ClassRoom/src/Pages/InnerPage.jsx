import React, { useEffect, useState } from "react";
import NavBar from "./../Components/NavBar";
import SideBar from "./../Components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Tiles from "../Components/Tiles";
import { Link, useParams } from "react-router-dom";
import products from "../utility/data";
import { useToggle } from "../Context/ToggleContext";

const InnerPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { toggle, toggleValue } = useToggle();
  useEffect(() => {
    // Find the matched product
    const matchedProduct = products.find(
      (product) => String(product.id) === id
    );
    setData(matchedProduct || null);
  }, [id]);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="fixed top-0 w-full z-10 bg-white">
        <NavBar />
      </div>

      {/* Menu Bar */}
      <div className="flex fixed bg-white gap-3 mt-[75px] border-b-2 px-10 rounded-md shadow-sm w-[100%] mx-auto hidden sm:flex ">
        <div className="hover:bg-blue-100 ml-20 w-20 py-3 h-14 ">
          <a
            href="#"
            className="text-blue-600 hover:no-underline relative left-[12px]">
            Stream
          </a>
          <div className="w-20 h-[3px] bg-blue-500 relative top-[18px] rounded"></div>
        </div>
        <div className="hover:bg-blue-100 py-3 w-20 h-14">
          <Link to="/assignment"> <a
            href="#"
            className="text-blue-600 hover:no-underline relative left-[8px]">
            Classwork
          </a></Link>
          <div className="w-20 h-[3px] bg-blue-500 relative top-[18px] rounded"></div>
        </div>
        <div className="hover:bg-blue-100 py-3 w-20 h-14">
          <a
            href="#"
            className="text-blue-600 hover:no-underline relative left-[12px]"
          >
            People
          </a>
          <div className="w-20 h-[3px] bg-blue-500 relative top-[18px] rounded"></div>
        </div>
      </div>




      {/* Sidebar */}
      <div className={`fixed items-center top-[75px] left-0 h-full z-10 ${toggle ? 'w-20' : 'w-44'} border-r-2 bg-white p-4 duration-300 hidden lg:block`} >
        <SideBar />
      </div>

      <div className="md:pl-34 p-4">
        {/* Main Image */}
        <div className="w-full flex justify-center mt-24 py-8 sm:mt-24">
          <div className="relative z-[-3]">
            <img
              className="rounded-[8px] object-cover h-[14rem] shadow-lg"
              src="https://www.gstatic.com/classroom/themes/img_read.jpg"
              alt="Classroom Theme"
            />
            <h1 className="absolute top-[135px] left-5 font-semibold text-white text-3xl">
              {data?.batchName || "Batch Name"}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex justify-center w-auto md:grid-cols-4 md:ml-18 gap-6 mt-2">
          <div className="hidden sm:block">
            <div className="bg-white ml-26 border-2 p-4 rounded-lg w-full shadow-md mb-2 col-span-1 flex flex-col gap-2">
              <div className="flex justify-between w-auto items-center">
                <div className="flex items-center gap-2">
                  {/* Meet Icon */}
                  <img
                    className="h-7"
                    src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png"
                    alt="Meet Logo"
                  />
                  <h1>Meet</h1>
                </div>
                <button>
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="text-gray-600 rotate-90"
                  />
                </button>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <a href="https://meet.google.com/xsw-sgnp-ovz?authuser=0&hs=179"> Join</a>
              </button>
            </div>
            <div className="bg-white border-2 rounded-lg w-52 shadow-md p-4 col-span-1">
              <h3 className="text-lg font-bold">Upcoming</h3>
              <p className="text-gray-600 mt-2">Woohoo, no work due soon!</p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 block text-sm font-semibold"
              >
                View all
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-0 space-y-4 w-200">
            {/* Announce Input */}
            <div className="w-full">
              <input
                type="text"
                placeholder="Announce something to your class"
                className="border-gray-400 shadow border-[1px] rounded-md p-6 w-full focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Tiles Content */}
            <div className="bg-gray-50 max-w-[40rem]">
              <Link to="/recording">
                <Tiles />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
