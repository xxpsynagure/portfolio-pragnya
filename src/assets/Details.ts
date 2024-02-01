import escape from './icons/escape.png';
import sjec from './icons/sjec.png';
import kvs from './icons/kvs.jpg';
import almasons from './icons/almasons.png';
import telenetix from './icons/telenetix.jpg';
import gdsc from './icons/gdsc.jpeg';
import tiara from './icons/tiara.jpg';

const details = {
  education: [
    {
      school: 'St. Joseph Engineering College',
      url: 'https://www.sjec.ac.in/',
      icon: sjec,
      location: 'Mangaluru, India',
      degree: 'Bachelor of Engineering',
      major: 'Computer Science',
      start: 'Aug 2019',
      end: 'May 2023',
    },
    {
      school: 'Kendriya Vidyalaya No.1 Panambur',
      url: 'https://no1mangalore.kvs.ac.in/',
      icon: kvs,
      location: 'Mangaluru, India',
      degree: 'High School',
      major: 'CBSE Board - Physics, Chemistry, Mathematics and Computer Science',
      start: 'June 2017',
      end: 'may 2019',
    },
  ],
  experience: [
    {
      company: 'Almasons Technologies Pvt. Ltd.',
      url: 'https://almasons.com/',
      icon: almasons,
      location: 'Mangaluru, India',
      contract: 'Full-time',
      position: 'Software Developer Trainee',
      start: 'June 2023',
      end: 'Jan 2024',
      description: [
        'Created an Android app with camera functionality, a customizable image editor, and efficient data flow, overcoming limited initial UI specifications.',
        'Established code documentation standards, promoting code clarity and maintainability across development teams, resulting in a 20% decrease in code understanding and bug fixing time.',
        'Proposed and documented an architectural R&D solution for a WebSocket project, with the potential to reduce data transfer by up to 60% and optimize network bandwidth for improved platform performance.',
        'Expanded app accessibility by testing and incorporating support for 65+ voice dialects, enabling a diverse user experience.',
      ],
      technologies: [
        'Android - Kotlin, Android Studio',
        'Android - Java, Android Studio',
        'Flask - Python',
        'Voice Artisan - Python, Eclipse',
      ],
    },
    {
      company: 'Telenetix Pvt. Ltd.',
      url: 'https://www.telenetix.in/',
      icon: telenetix,
      location: 'Udupi, India',
      contract: 'Internship',
      position: 'Django developer',
      start: 'Aug 2022',
      end: 'Oct 2022',
      description: [
        'Designed, implemented, and tested 4 REST APIs using Django Rest Framework for TxCampaignManager.',
        'Contributed a template code for new API endpoints, employing a class-based approach using Django, DRF, MySQL, and Python.',
      ],
      technologies: [
        'Django',
        'DRF',
        'MySQL',
        'Python',
      ],
    },
    {
      company: 'Google Developer Student Clubs - SJEC',
      url: 'https://gdscsjec.in/',
      location: 'St. Joseph Engineering College, Mangaluru',
      icon: gdsc,
      contract: 'Volunteering',
      position: 'Lead / Club President',
      start: 'July 2022',
      end: 'May 2023',
      description: [
        'Founded and led a developer community with 9 members, organizing monthly technical events that averaged 60 attendees each, providing them a hands-on exposure to various technical frameworks.',
        'Led the development of 6 diverse community projects with the team. Managed social media presence, growing LinkedIn and Instagram engagement through creative content creation and consistent interaction.',
      ],
      technologies: [
        'Flutter',
        'Android - Jetpack Compose',
        'Flask',
        'GCP',
      ],
    },
    {
      company: 'Tiara 2023',
      url: 'https://tiarasjec.in/',
      icon: tiara,
      location: 'St. Joseph Engineering College, Mangaluru',
      contract: 'Volunteering',
      position: 'Lead Organizer, Student Convener, Website team member',
      start: 'Feb 2023',
      end: 'Mar 2023',
      description: [
        'Led the successful organization of a national-level techno-cultural fest with a team of 22 members.',
        'Planned, coordinated, and executed all aspects of the event with the team, including developing and implementing a comprehensive plan for the event website and registration process, and creating a scanner mobile application which boosted 1000+ smooth online registrations.',
        'Conducted meetings and presentations with college management, sponsors, and vendors to secure support. Managed social media handles, contributing to successful event promotions.',
      ],
      technologies: [
        'Spline',
        'Flutter',
        'React JS',
        'FireStore',
        'Figma',
      ],
    },
  ],
  skills: {
    languages: [
      'C++',
      'Python',
      'Kotlin',
      'Java',
      'C',
      'JavaScript',
    ],
    frameworks: [
      'Django',
      'Flask',
      'Flutter',
      'Kotlin Native',
      'Node JS',
      'React',
      'Git',
      'Docker',
    ],
    tools: [
      'GitHub',
      'Gitlab',
      'Canva',
      'Figma',
    ],
    others: [
      'REST API',
      'Object-oriented programming',
      'MVC',
      'Functional programming',
      'Algorithms',
      'OpenGL',
    ],
  },
  languages: [
    {
      name: 'English',
      level: 'C1',
    },
    {
      name: 'Hindi',
      level: 'C1',
    },
    {
      name: 'Kannada',
      level: 'C1',
      native: true,
    },
  ],
  contact: {
    address: 'Mangaluru, India',
    email: 'pragnya.nagure2002@gmail.com',
    phone: '+91 8660846980',
    website: 'https://pragnya.tech/',
    linkedin: 'https://in.linkedin.com/in/pragnya-nagure',
    github: 'https://github.com/xxpsynagure',
    twitter: 'https://twitter.com/PragnyaNagure',
    instagram: 'https://www.instagram.com/pragnya.sama/'
  },
};

export default details;
