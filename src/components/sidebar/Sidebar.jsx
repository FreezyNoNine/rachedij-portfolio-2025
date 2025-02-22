import React, { useState } from 'react';
import "./Sidebar.css";
import { SidebarData } from './SidebarData';

function Sidebar({ homeRef, aboutRef, projetsRef, educationRef, experiencesRef, contactRef }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleScroll = (index) => {
        if (index === 0 && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (index === 1 && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (index === 2 && projetsRef.current) {
            projetsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (index === 3 && educationRef.current) {
            educationRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (index === 4 && experiencesRef.current) {
            experiencesRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (index === 5 && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val, index) => (
                    <li key={index} className='row'>
                        <div id='icon' className={selectedIndex === index ? 'selected' : ''} onClick={() => { setSelectedIndex(index); handleScroll(index); }}>{val.icone}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;

