import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ContactsIcon from '@mui/icons-material/Contacts';

export const SidebarData = [

    {
        titre : "Accueil",
        icone : <HomeIcon />,
        lien : "/accueil",
    },
    {
        titre : "Presentation",
        icone : <PersonIcon />,
        lien : "/projets",
    },
    {
        titre : "Projets",
        icone : <FolderCopyIcon />,
        lien : "/projets",
    },
    {
        titre : "Formation",
        icone : <SchoolIcon />,
        lien : "/projets",
    },
    {
        titre : "Professionnel",
        icone : <BusinessCenterIcon />,
        lien : "/professionel",
    },
    {
        titre : "Contact",
        icone : <ContactsIcon />,
        lien : "/professionel",
    },
]

