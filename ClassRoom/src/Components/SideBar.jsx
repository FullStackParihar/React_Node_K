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
            toggle ? 'w-18': 'w-34'
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
                </div> : <div className='flex flex-col gap-12 justify-center items-center '>
                    <div className=''> <FontAwesomeIcon className='h-5 pr-4' icon={faHouse} />Home
                    </div>
                    <div><FontAwesomeIcon className='h-5 pr-4' icon={faGear} />Settings
                    </div>
                    <div><FontAwesomeIcon className='h-5 pr-4' icon={faCalendar} />Calendar
                    </div>
                    <div><FontAwesomeIcon className='h-pr-4 pr-4' icon={faGraduationCap} />Acadmic
                    </div>
                    <div><FontAwesomeIcon className='h-5 pr-4' icon={faBoxArchive} />Archive
                    </div>
                </div>}

        </div>

    )
}

export default SideBar