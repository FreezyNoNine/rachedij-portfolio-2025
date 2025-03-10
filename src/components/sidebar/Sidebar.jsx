import React, { useState } from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

function Sidebar({ homeRef, aboutRef, projetsRef, educationRef, experiencesRef, contactRef }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const refs = [homeRef, aboutRef, projetsRef, educationRef, experiencesRef, contactRef];

    const handleScroll = (index) => {
        refs[index]?.current?.scrollIntoView({ behavior: 'smooth' });
        setSelectedIndex(index);
    };

    return (
        <nav className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val, index) => (
                    <li 
                        key={index} 
                        className={`row ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => handleScroll(index)}
                    >
                        {val.icone}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sidebar;
