import React from 'react'
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useToggle } from '../Context/ToggleContext';
const RecordingPage = () => {
        const { toggle, toggleValue } = useToggle();
    return (
        <>
            <div className="">
                {/* Navbar */}
                <div className="fixed top-0 w-full z-10 bg-white ">
                    <NavBar />
                </div>
               {/* Sidebar */}
      <div className={`fixed items-center top-[75px] left-0 h-full z-10 ${toggle ? 'w-20' : 'w-44'} border-r-2 bg-white p-4 duration-300 hidden lg:block`} >
                <SideBar />
            </div>

            </div>
            {/* notebookicon */}
            <div className="flex justify-center  gap-4 mt-16 py-8 " >

                <div>
                    <img
                        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152752573/settings_images/d6552f4-741-40ce-2e61-1b5d35300b8_eot-icon-studies.jpg"
                        className=" h-auto w-12 object-contaiin rounded-lg "
                    />
                </div>
                {/* heading text */}
                <div className=" z-[-3]  flex flex-col gap-2 w-full max-w-[44rem]">
                    <div className='flex justify-between w-full '>
                        <h1 className=" font-semibold text-black text-[2rem]  ">Array assignment 7th Jan 2025</h1>
                        <button className='hidden sm:block'>
                            <FontAwesomeIcon
                                icon={faEllipsisH}
                                className="text-gray-600 rotate-90"
                            />
                        </button>
                    </div>
                    <h3>REGex Software • Jan 7</h3>

                    <hr />
                    {/* recording video and link */}
                    <div className='flex gap-4 mt-2 mb-2 border-[1px] max-w-[24rem] border-gray-300 rounded-xl '>
                        <div>
                            <img className='w-32  h-16  object-cover rounded-l-xl' src="https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </div>
                        <div className='flex flex-col justify-center whitespace-nowrap overflow-hidden text-ellipsis '>
                            <a className='text-blue-600 font-semibold ' href="http://">xsw-sgnp-ovz (2025-01-09 0)...</a>
                            <h3 className='text-sm text-gray-600 font-semibold'>Video</h3>
                        </div>
                    </div>
                    <hr />
                      {/* add comment */}
                    <div className='mt-2'>
                        <div className='flex gap-2 justify-start items-center'>
                            <img className='h-4' src="src\Components\PersonIcon.png" alt="" />
                            <h1 className='text-gray-700 font-semibold'>Class Comments</h1>
                        </div>
                        <div className='flex justify-between items-center gap-4 mt-4'>
                            <img className='h-10 rounded-full' src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_1280.png" alt="" />
                            <input className='border-[1px] border-gray-300 rounded-full px-2 py-2 w-full' type="text" placeholder='Add class comment ...' />
                            <FontAwesomeIcon className='h-6 text-gray-800 rotate-[60deg] ' icon={faPaperPlane} />

                        </div>
                    </div>
                </div>
                <div>


                </div>
            </div>

        </>
    );
}

export default RecordingPage;
