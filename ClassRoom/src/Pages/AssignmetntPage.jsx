import React from 'react'
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from '../Context/ToggleContext';

const AssignmetntPage = () => {
        const { toggle, toggleValue } = useToggle();
    return (
        <>
            <div className="">
                {/* Navbar */}
                <div className="fixed top-0 w-full z-10 bg-white ">
                    <NavBar />
                </div>
                {/* Sidebar */}
                <div className={`fixed items-center top-[75px] left-0 h-full z-10 ${toggle ? 'w-20' : 'w-44'} border-r-2 bg-white p-4 hidden lg:block `} >
                <SideBar />
            </div>

            </div>
            <div className="w-full flex justify-center gap-8 mt-4 px-12 py-8 sm:mt-20" >

                <div>
                    <img
                        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152752573/settings_images/d6552f4-741-40ce-2e61-1b5d35300b8_eot-icon-studies.jpg"
                        className=" h-auto w-20 object-contaiin rounded-lg "
                    />
                </div>
                {/* assignment text heaing */}
                <div className=" z-[-3] flex flex-col gap-2 justify-start">
                    <div className='flex justify-between'>
                        <h1 className=" font-semibold text-black text-3xl xl: ">Array assignment 7th Jan 2025</h1>
                        <button>
                            <FontAwesomeIcon
                                icon={faEllipsisH}
                                className="text-gray-600 rotate-90"
                            />
                        </button>
                    </div>
                    <h3>REGex Software • Jan 7</h3>
                    <h2>100 points</h2>
                    <hr />
                    {/* assignment questions */}
                    <p className=' mx-auto max-w-[40rem]'>Given an array of integers, calculate the factorial of each element and store the results in a new array.
                        <br></br> Write a program that takes an array of integers as input and identifies all the prime numbers from the array. Store these prime numbers in a new array.
                        <br></br><br></br> A number is self-dividing if it is divisible by each of its digits. For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0. Given an array of integers, find all self-dividing numbers and store them in a new array.
                        <br></br><br></br> Take an array of integers and calculate the square of each element. Store the squares in a new array.
                        <br></br><br></br>  Write a program to take an array of integers and calculate the sum, average, and product of all its elements. Store these three values in a result array.
                        <br></br><br></br> Given an array of integers, calculate the cube of all odd numbers and store them in a new array.
                        <br></br><br></br>   For each element in the given array, generate an array of its factors. Store these arrays as elements of a larger array.
                        <br></br><br></br>  Take an array of integers and reverse the digits of each number. Store the reversed numbers in a new array.
                        <br></br><br></br> Given an array of integers, check if each number is a palindrome. Store 1 for palindrome numbers and 0 otherwise in a new array.
                        <br></br><br></br> For each number in a given array, calculate the sum of its digits and store the result in a new array.
                        <br></br><br></br> Would you like examples or explanations for any of these?</p>
                </div>
                {/* side buttons submmit and add assignment */}
                <div>
                    <div className="bg-white border-2 p-4 rounded-lg w-[20rem] h-40 shadow-md mb-2 col-span-1 flex flex-col gap-2 hidden lg:flex sm:flex">
                        <div className="flex justify-between w-auto items-center">
                            <div className="flex items-center gap-2">

                                <h1>Your Work</h1>
                            </div>
                            <div>
                                <h1 className='text-green-800'>Assigned</h1>
                            </div>
                        </div>
                        <button className="bg-white border-2 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                            + Add or Create
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Join
                        </button>
                    </div>
                    <div className="bg-white border-2 p-4 rounded-lg w-[20rem] h-20 shadow-md mb-2 col-span-1 flex-col gap-2 hidden lg:flex sm:flex">
                        <div className="flex flex-col justify-start w-auto ">
                            <div className="flex gap-2 justify-start items-center">
                                <img className="h-4" src="src\Components\PersonIcon.png" alt="" />
                                <h1 className='text-gray-800'>Private comments</h1>
                            </div>
                            <div className='text-center text-blue-600'>
                                <h1>Add commets to REGex Software</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default AssignmetntPage
