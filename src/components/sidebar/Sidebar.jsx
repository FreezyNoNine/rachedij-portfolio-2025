import React from 'react'
import "../../App.css"
import { SidebarData } from './SidebarData'

function Sidebar () {
  return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val, cle) => {
                    return (
                        <li key={cle} className='row' onClick={() => { window.location.href = val.lien }}>
                            <div id='icon'>{val.icone}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
  )
}

export default Sidebar;