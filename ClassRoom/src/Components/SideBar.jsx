import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useToggle } from '../Context/ToggleContext';
const SideBar = () => {
    const { toggle, toggleValue } = useToggle();

    return (

        <div className={`flex flex-col justify-center items-center z-1 text-black transition-all duration-300 ease-in-out ${
            toggle ? 'w-18': 'w-76'
        }`} >
            {(toggle) ?
                <div className='h-5'>
                    <div> <FontAwesomeIcon className='h-5 py-4' icon={faHouse} /></div>
                    <div><FontAwesomeIcon className='h-5 py-4' icon={faGear} />
                    </div>
                    <div><FontAwesomeIcon className='h-5 py-4' icon={faCalendar} />
                    </div>
                    <div><FontAwesomeIcon className='h-5 py-4' icon={faGraduationCap} />
                    </div>
                    <div><FontAwesomeIcon className='h-5 py-4' icon={faBoxArchive} />
                    </div>
                </div> : <div className='flex flex-col gap-10 justify-cente items-start w-44 pl-5 '>
                    <div className=''> <FontAwesomeIcon className='h-5 pr-4' icon={faHouse} />Home
                    </div>
                    <div><FontAwesomeIcon className='h-5 pr-4' icon={faGear} />Settings
                    </div>
                    <div><FontAwesomeIcon className='h-5 pr-4' icon={faCalendar} />Calendar
                    </div>
                    <div className=''><FontAwesomeIcon className='h-5 pr-4' icon={faGraduationCap} /><span className=''>Acadmic</span>
                    <ul className='flex flex-col gap-4'>
                    <div className='flex'>
                    <h2 className='px-2 bg-black text-white rounded-full'>C</h2>
                    <li>Cpp Intermidiate</li></div>
                    <div className='flex'>
                    <h2 className='px-2 bg-black text-white rounded-full'>C</h2>
                    <li>Cpp Batch-T</li></div>
                    <div className='flex'>
                    <h2 className='px-2 bg-green-700 text-white rounded-full'>R</h2>
                    <li>React_node_K</li></div>
                    <div className='flex'>
                    <h2 className='px-2 bg-blue-800 text-white rounded-full'>F</h2>
                    <li>Frontend Batch-Z</li></div>
                    <div className='flex'>
                    <h2 className='px-2 bg-black text-white rounded-full'>C</h2>
                    <li>C Logical</li></div>
                         
                        
                    </ul>
                    </div>
                    <div><FontAwesomeIcon className='h-5 pr-4' icon={faBoxArchive} />Archive
                    </div>
                </div>}

        </div>

    )
}

export default SideBar