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

            <div className="fixed top-0 w-full z-10 bg-white">
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

                <div className="flex justify-center ml-36 md:grid-cols-4 gap-6 mt-6">
                    <div>
                        <div className="bg-white rounded-lg w-44 shadow-md p-4 col-span-1">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Join
                            </button>

                        </div>
                        <div className="bg-white rounded-lg w-44 shadow-md p-4 col-span-1">
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

                    <div className="bg-white rounded-lg shadow-md p-4 col-span-3 space-y-4">

                        <input
                            type="text"
                            placeholder="Announce something to your class"
                            className="border border-gray-300 rounded-md p-2 w-full md:w-96 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <div className="flex items-start space-x-4">

                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <i className="fas fa-book text-gray-600"></i>
                            </div>
                            <div>
                                <p className="font-bold">REGex Software</p>
                                <p className="text-gray-600">Posted a new material: array to vector</p>
                                <p className="text-sm text-gray-400">Jan 9</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <i className="fas fa-tasks text-gray-600"></i>
                            </div>
                            <div>
                                <p className="font-bold">REGex Software</p>
                                <p className="text-gray-600">
                                    Posted a new assignment: solve this questions using vector
                                </p>
                                <p className="text-sm text-gray-400">Jan 9</p>
                                <p className="text-blue-500 text-sm font-semibold hover:underline">
                                    5 class comments
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <i className="fas fa-book text-gray-600"></i>
                            </div>
                            <div>
                                <p className="font-bold">REGex Software</p>
                                <p className="text-gray-600">Posted a new material: 8 Jan 2025</p>
                                <p className="text-sm text-gray-400">Jan 8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default InnerPage;
