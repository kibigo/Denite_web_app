import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMessage, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt, faTeamspeak } from '@fortawesome/free-brands-svg-icons';

export const SidebarData = [
  {
    title: 'Home',
    path: '/admin',
    icon: <FontAwesomeIcon icon={faHome}/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/admin/report',
    icon: <FontAwesomeIcon icon={faPaperPlane}/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/admin/products',
    icon: <FontAwesomeIcon icon={faProductHunt}/>,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/admin/team',
    icon: <FontAwesomeIcon icon={faTeamspeak}/>,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FontAwesomeIcon icon={faMessage}/>,
    cName: 'nav-text'
  }
];