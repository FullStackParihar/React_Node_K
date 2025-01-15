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

        <div className='flex flex-col gap-12 justify-center items-center ' >
            {(toggle) ?
                <>
                    <div> <FontAwesomeIcon icon={faHouse} /></div>
                    <div><FontAwesomeIcon icon={faGear} />
                    </div>
                    <div><FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div><FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <div><FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                    <div><FontAwesomeIcon icon={faBoxArchive} />
                    </div>
                </> : <div className='flex flex-col gap-12 justify-center items-center '>
                    <div> <FontAwesomeIcon icon={faHouse} />Home
                    </div>
                    <div><FontAwesomeIcon icon={faGear} />Settings
                    </div>
                    <div><FontAwesomeIcon icon={faCalendar} />Calendar
                    </div>
                    <div><FontAwesomeIcon icon={faGraduationCap} />Acadmic
                    </div>
                    <div><FontAwesomeIcon icon={faBoxArchive} />Archive
                    </div>
                </div>}

        </div>

    )
}

export default SideBar