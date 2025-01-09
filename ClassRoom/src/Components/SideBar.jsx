import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
 
const SideBar = () => {
    return (

        <div>
            <div> <FontAwesomeIcon icon={faHouse} /></div>
            <div><FontAwesomeIcon icon={faGear} />
            </div>
 
        </div>

    )
}

export default SideBar