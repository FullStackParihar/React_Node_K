import React from "react";
import NavBar from './../Components/NavBar';
import SideBar from './../Components/SideBar';
import ProductCard from './../Components/CardComponent';
import products from "./../utility/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
const InnerPage = () => {
    return (
        <div className="relative">

            <div className="fixed top-0 w-full z-10 bg-white shadow-md">
                <NavBar />
            </div>


            <div className="fixed top-20 left-0 h-full w-34 border-r-2 bg-white p-8 hidden md:block">
                <SideBar />
            </div>


            <div className="flex justify-between ml-[80px] mt-16 p-4">

                <div className="flex bg-white gap-6 px-10 rounded-md shadow-sm w-[100%] mx-auto">
                    <div className="hover:bg-blue-100 w-20 h-10">
                        <a href="#" className="text-blue-600  hover:no-underline relative left-[12px]">Stream</a>
                        <div className="w-20 h-1 bg-blue-500 relative top-[14px] rounded"></div>
                    </div>
                    <div className="hover:bg-blue-100 w-20 h-10">
                        <a href="#" className="text-blue-600  hover:no-underline relative left-[8px]">Classwork</a>
                        <div className="w-20 h-1 bg-blue-500 relative top-[14px] rounded"></div>
                    </div>
                    <div className="hover:bg-blue-100 w-20 h-10">
                        <a href="#" className="text-blue-600  hover:no-underline relative left-[12px]">People</a>
                        <div className="w-20 h-1 bg-blue-500 relative top-[14px] rounded"></div>
                    </div>
                </div>
                <div className="flex items-center gap-6 px-4">
                    <div className="gap-4">
                        <FontAwesomeIcon className="h-5" icon={faVideo} />

                    </div>
                    <div><FontAwesomeIcon className="h-5" icon={faCalendar} /> </div>
                    <div><FontAwesomeIcon className="h-5" icon={faGoogleDrive} />
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full flex justify-center mt-6">
                    <img
                        className="rounded-[8px] object-contain w-full max-w-[700px] shadow-lg"
                        src="https://www.gstatic.com/classroom/themes/img_read.jpg"
                        alt="Classroom Theme"
                    />
                </div>
            </div>
        </div >
    );
};

export default InnerPage;
