import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
const SideBar = () => {
    return (

        <div className='flex flex-col gap-10 ' >
            <div> <FontAwesomeIcon icon={faHouse} /></div>
            <div><FontAwesomeIcon icon={faGear} />
            </div>
            <div><FontAwesomeIcon icon={faCalendar} />
            </div>
            <div><FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div><FontAwesomeIcon icon={faBoxArchive} />
            </div>
        </div>

    )
}

export default SideBar