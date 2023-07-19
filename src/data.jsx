import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa'
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi'

import Work1 from './assets/project-1.jpg'
import Work2 from './assets/project-2.png'
import Work3 from './assets/project-3.png'
import Work4 from './assets/project-4.png'

import Theme1 from './assets/purple.png'
import Theme2 from './assets/red.png'
import Theme3 from './assets/blueviolet.png'
import Theme4 from './assets/blue.png'
import Theme5 from './assets/goldenrod.png'
import Theme6 from './assets/magenta.png'
import Theme7 from './assets/yellowgreen.png'
import Theme8 from './assets/orange.png'
import Theme9 from './assets/green.png'
import Theme10 from './assets/yellow.png'

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
]

export const personalInfo = [
  {
    id: 1,
    title: 'First Name :  ',
    description: 'Bhargav',
  },

  {
    id: 2,
    title: 'Last Name :  ',
    description: 'Chandpara',
  },

  {
    id: 3,
    title: 'Age :  ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality :  ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Address :  ',
    description: 'Surat,Gujarat',
  },

  {
    id: 6,
    title: 'Phone :  ',
    description: '+917265987828',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'bhargavchandpara18@gmail.com',
  },

  {
    id: 8,
    title: 'Languages : ',
    description: 'English,Hindi,<br />Gujarati',
  },
]

export const stats = [
  {
    id: 1,
    no: 'Problem Solving Skills',
    title: 'Solved 400+ Problem on LeetCode and GeekforGeeks',
  },

  {
    id: 2,
    no: 'Communication and Teamwork',
    title: 'Ability to articulate concepts in clear way and concise manner',
  },

  {
    id: 3,
    no: 'Time Management',
    title: 'Managing meeting deadlines and effectively managing time',
  },
  {
    id: 4,
    no: 'Fast Typing Speed',
    title: 'My Best 77 WPM ',
  },
]

export const education = [
  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title:
      'Bachelors Degree <span> Government Enginnering College, Gandhinagar </span>',
    desc: 'Year : 2020-pursuing <br/> CGPA : 8.91',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'HSC<span> Adani Vidya Mandir </span>',
    desc: 'Year : 2020<br />Percentage Obtained : 92.3',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'SSC <span>Adani Vidya Mandir </span>',
    desc: 'Year : 2018<br />Percentage Obtained : 91.6',
  },
]

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '70',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '65',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '70',
  },
  {
    id: 4,
    title: 'React',
    percentage: '55',
  },
  {
    id: 5,
    title: 'Tailwind',
    percentage: '65',
  },
  {
    id: 6,
    title: 'Node.js',
    percentage: '60',
  },
  {
    id: 7,
    title: 'Express.js',
    percentage: '65',
  },
  {
    id: 8,
    title: 'MongoDB',
    percentage: '60',
  },
  {
    id: 9,
    title: 'SQL',
    percentage: '55',
  },
  {
    id: 10,
    title: 'Python',
    percentage: '75',
  },
  {
    id: 11,
    title: 'C',
    percentage: '60',
  },
  {
    id: 12,
    title: 'Git',
    percentage: '55',
  },
]

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Github Finder',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Github Profiles and Repos',
      },
      {
        icon: <FaCode />,
        title: 'Skills Used: ',
        desc: 'React,JS,Tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github-finder-fu6kyiump-bhargav-08.vercel.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio site',
      },
      {
        icon: <FaCode />,
        title: 'Skills Used : ',
        desc: 'CSS,React,JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://my-portfolio-psi-cyan.vercel.app/',
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: 'Natours App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Tours Booking',
      },
      {
        icon: <FaCode />,
        title: 'Skills Used: ',
        desc: 'NodeJS, ExpressJS, MongoDB, Moongoose',
      },
      {
        icon: <FiExternalLink />,
        title: 'Functionalities: ',
        desc: 'Error Handling,Password Management,Signup,Login',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'FeedBack Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Collect Rating and Comments',
      },
      {
        icon: <FiUser />,
        title: 'Skills Used: ',
        desc: 'React,CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },
]

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
]
