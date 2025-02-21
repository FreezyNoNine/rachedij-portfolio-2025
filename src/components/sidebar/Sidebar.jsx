import React, { useState } from 'react';
import "../../App.css";
import { SidebarData } from './SidebarData';

function Sidebar() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val, index) => (
                    <li key={index} className='row'>
                        <div id='icon' className={selectedIndex === index ? 'selected' : ''} onClick={() => setSelectedIndex(index)} >
                            {val.icone}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
