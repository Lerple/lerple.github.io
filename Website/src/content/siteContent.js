import allstateLogo from '../assets/logos/Allstate.png'
import cliqueLogo from '../assets/logos/Clique.png'
import hatsAndLaddersLogo from '../assets/logos/Hats and Ladders.png'
import lavnerEducationLogo from '../assets/logos/Lavner Education.png'
import novuDesignsLogo from '../assets/logos/Novu Designs.png'
import partyCityLogo from '../assets/logos/PartyCity.png'
import runweiLogo from '../assets/logos/Runwei.png'
import ubiqLogo from '../assets/logos/Ubiq.png'
import walgreensLogo from '../assets/logos/Walgreens.png'

export const siteContent = {
  home: {
    name: 'Hashebul Joy',
    title: 'SOFTWARE ENGINEER',
    blurbLabel: 'Looking to hire?',
    blurbText:
      'Using my Bachelors in Computer Science and my experience ranging from embedded systems to software development, I aspire to be change the world needs.',
  },
  portfolio: {
    kicker: '',
    title: 'Projects',
    description:
      'A collection of projects focused on building real-world systems, ' +
      'from interactive 3D applications to AI tools and self-hosted infrastructure.',
    metrics: [
      { value: '', label: '' },
      { value: '', label: '' },
    ],
    projects: [
      {
        number: '01',
        title: '3D Interactive Portfolio Website',
        category: 'Software',
        description:
          'Built a fully interactive portfolio that uses motion, depth, and scroll-driven presentation to create a more immersive browsing experience.',
        bulletPoints: [
          '3D portfolio website using React Three Fiber and Three.js.',
          'Implemented a layered parallax system for smooth scroll-based transitions.',
          'Created dynamic camera movement, animations, and interactive elements.',
          'Optimized rendering performance through efficient texture and scene management.',
          'Structured the project for scalability with reusable components.',
        ],
        stack: ['React', 'JavaScript', 'JSX', 'CSS'],
        media: [],
      },
      {
        number: '02',
        title: 'Arduino Gear Indicator',
        category: 'Embedded Systems',
        description:
          'Built an embedded hardware project that reads vehicle state and displays the current gear in real time.',
        bulletPoints: [
          'Built a real-time gear indicator for a manual car using sensors and microcontroller logic.',
          'Designed and wired hardware components and the display system.',
        ],
        stack: ['C++'],
        media: [],
      },
      {
        number: '03',
        title: 'Self-Hosted Home Lab Server',
        category: 'Systems and Infastructure',
        description:
          'Built and maintain a self-hosted environment for containers, storage, networking, and hands-on systems administration.',
        bulletPoints: [
          'Using a repurposed PC running TrueNAS Scale and Linux.',
          'Deployed and managed Docker containers across multiple services.',
          'Gained hands-on experience with ZFS storage, networking, and system administration.',
          'Configured secure remote access and networking tools.',
          'Troubleshot real-world issues involving performance, networking, and data management.',
          'Developed a strong understanding of backend systems and infrastructure.',
        ],
        stack: ['Linux', 'Docker'],
        media: [],
      },
      {
        number: '04',
        title: 'AI Assistant Discord Bot',
        category: 'Software',
        description:
          'Created a Discord bot that supports a live community with AI-powered summaries, automation, and data-aware responses.',
        bulletPoints: [
          'Gemini-powered bot supporting 250+ users and 1000+ messages per week.',
          'Automates summarization, data tracking, and user interaction.',
          'Integrates APIs and external data sources for real-time responses.',
          
        ],
        stack: ['Python'],
        media: [],
      },
      {
        number: '05',
        title: 'AI Assistant',
        category: 'Software',
        description:
          'Developed a general-purpose assistant with search, reminders, and persistent task support using LLM integrations.',
        bulletPoints: [
          'Developed an assistant capable of web search, reminders, and data storage.',
          'Integrated LLM APIs for contextual responses and task execution.',
        ],
        stack: ['Python'],
        media: [],
      },
      {
        number: '06',
        title: '2D Platformer Game',
        category: 'Game',
        description:
          'Built a complete 2D platformer with core game systems, movement logic, and level progression inspired by classic titles.',
        bulletPoints: [
          'Built a complete 2D game with movement, collision detection, and progression.',
          'Designed gameplay systems inspired by classic platformers.',
        ],
        stack: ['Java'],
        media: [],
      },
    ],
  },
  experience: {
    kicker: '',
    title: 'Experience',
    description:
      'Hands-on experience building real-world software, ' +
      'AI-driven systems, and scalable solutions across production and personal projects.',
    items: [
      {
        period: 'Queens, NY | May 2025 - September 2025',
        role: 'Software Engineer Intern',
        company: 'Ubiq',
        logo: ubiqLogo,
        logoStyle: {
          maxWidth: '132px',
          maxHeight: '54px',
        },
        logoOffsetX: 20,
        logoOffsetY: 90,
        logoScale: 1.7,
        description:
          'Worked on a core video export feature used by 3,000+ users, handling both frontend and media processing.',
        bulletPoints: [
          'Built a full video export system from scratch using SwiftUI and AVFoundation.',
          'Designed the UI and backend logic for rendering and exporting user-generated content.',
          'Implemented end-to-end export functionality so users could share content across platforms.',
          'Handled media-processing edge cases to keep exports consistent and reliable.',
          'Worked closely with product and design to deliver a smooth user experience.',
        ],
        highlights: ['SwiftUI', 'AVFoundation', 'Media Processing'],
      },
      {
        period: 'Queens, NY | December 2024 - May 2025',
        role: 'Product Management Intern',
        company: 'Ubiq',
        logo: ubiqLogo,
        logoStyle: {
          maxWidth: '132px',
          maxHeight: '54px',
        },
        logoOffsetX: 20,
        logoOffsetY: 90,
        logoScale: 1.7,
        description: 'Supported product quality, user research, and UI refinement across the app.',
        bulletPoints: [
          'Tested features and identified issues across multiple areas of the app.',
          'Suggested improvements that enhanced usability and user experience.',
          'Helped define user personas and align product decisions with real behavior.',
          'Worked closely with engineering and design teams to refine UI/UX.',
        ],
        highlights: ['Product Thinking', 'User Research', 'UI/UX'],
      },
      {
        period: 'Queens, NY | January 2025 - June 2025',
        role: 'Digital Strategy & AI Intern',
        company: 'Allstate Insurance',
        logo: allstateLogo,
        logoStyle: {
          maxWidth: '138px',
          maxHeight: '42px',
        },
        logoOffsetX: 60,
        logoOffsetY: 90,
        logoScale: 3.5,
        description:
          'Worked on automation, data organization, and AI-assisted workflows to improve internal efficiency.',
        bulletPoints: [
          'Processed and organized large datasets using Python to improve data usability.',
          'Built automated workflows using ChatGPT, Google Docs, Trainual, Canopy Connect, and internal databases.',
          'Integrated multiple systems including Google Calendar, CRM tools, and internal databases into streamlined pipelines.',
          'Reduced manual effort and improved efficiency across data and marketing workflows.',
          'Contributed to AI-based segmentation and automation strategies.',
        ],
        highlights: ['Python', 'Automation', 'AI Workflows'],
      },
      {
        period: 'Queens, NY | August 2024 - December 2024',
        role: 'Data Integrity Intern',
        company: 'Runwei',
        logo: runweiLogo,
        logoStyle: {
          maxWidth: '118px',
          maxHeight: '52px',
        },
        logoOffsetX: 30,
        logoOffsetY: 90,
        logoScale: 1.5,
        description:
          'Focused on structuring and automating business data using AI tools.',
        bulletPoints: [
          'Processed and organized 100+ business listings weekly using AI-assisted workflows.',
          'Used NLP and LLM tools to extract structured data from unorganized sources.',
          'Built automated tracking and update workflows, reducing repetitive manual work.',
          'Maintained accuracy across datasets and ensured consistency with platform content.',
          'Collaborated with team members to improve internal data processes.',
        ],
        highlights: ['NLP', 'LLMs', 'Workflow Automation'],
      },
      {
        period: 'Garden City, NY | June 2024 - August 2024',
        role: 'STEM Instructor',
        company: 'Lavner Education',
        logo: lavnerEducationLogo,
        logoStyle: {
          maxWidth: '136px',
          maxHeight: '48px',
        },
        logoOffsetX: 60,
        logoOffsetY: 85,
        logoScale: 3,
        description:
          'Taught robotics, programming, and 3D modeling through hands-on instruction and real-time troubleshooting.',
        bulletPoints: [
          'Handled over 40 students robotics, programming, and 3D modeling weekly',
          'Guided students in building games, robots, and technical projects.',
          'Provided real-time troubleshooting for hardware and software issues.',
          'Maintained smooth class operations through hands-on instruction.',
        ],
        highlights: ['Teaching', 'Robotics', '3D Modeling'],
      },
      {
        period: 'Queens, NY | September 2022 - September 2024',
        role: 'Head of Marketing',
        company: 'Novu Designs',
        logo: novuDesignsLogo,
        logoStyle: {
          maxWidth: '132px',
          maxHeight: '52px',
        },
        logoOffsetX: 60,
        logoOffsetY: 80,
        logoScale: 4.5,
        description:
          'Lead marketing efforts that grow the client base and strengthen the company brand.',
        bulletPoints: [
          'Improve brand visibility and expanded clientele.',
          'Work directly with clients to bring project ideas to execution.',
          'Contributed to business growth through outreach, branding, and strategy.',
        ],
        highlights: ['Marketing', 'Client Strategy', 'Brand Growth'],
      },
      {
        period: 'Queens, NY | June 2022 - June 2024',
        role: 'Co-Founder',
        company: 'Clique Detailing',
        logo: cliqueLogo,
        logoStyle: {
          maxWidth: '116px',
          maxHeight: '58px',
        },
        logoOffsetX: 30,
        logoOffsetY: 55,
        logoScale: 3,
        description:
          'Organized a mobile car detailing business focusing on premium service and strong client relationships.',
        bulletPoints: [
          'Co-founded a mobile car detailing business serving over 10+ high-end clients weekly.',
          'Managed operations, scheduling, and customer relationships.',
          'Worked with 6 partners to deliver consistent service quality.',
          'Developed problem-solving and adaptability skills in real-world environments.',
        ],
        highlights: ['Operations', 'Leadership', 'Customer Service'],
      },
      {
        period: 'Queens, NY | November 2021 - August 2022',
        role: 'Retail Associate',
        company: 'Walgreens',
        logo: walgreensLogo,
        logoStyle: {
          maxWidth: '126px',
          maxHeight: '52px',
        },
        logoOffsetX: 30,
        logoOffsetY: 60,
        logoScale: 2,
        description:
          'Worked in a fast-paced retail environment supporting customers and coordinating with a large team.',
        bulletPoints: [
          'Assisted 200+ customers daily in a fast-paced retail environment.',
          'Adapted communication style to serve a diverse customer base.',
          'Collaborated with 20+ team members and multiple managers.',
        ],
        highlights: ['Customer Support', 'Teamwork', 'Adaptability'],
      },
      {
        period: 'New Hyde Park, NY | September 2020 - March 2021',
        role: 'Retail Associate',
        company: 'Party City',
        logo: partyCityLogo,
        logoStyle: {
          maxWidth: '126px',
          maxHeight: '52px',
        },
        logoOffsetX: 40,
        logoOffsetY: 50,
        logoScale: 2,
        description:
          'Delivered customer service in a high-volume store while helping maintain smooth daily operations.',
        bulletPoints: [
          'Provided service to 150+ customers daily in a high-volume setting.',
          'Developed strong communication and teamwork skills.',
          'Worked with team members to maintain efficient store operations.',
        ],
        highlights: ['Communication', 'Retail', 'Team Operations'],
      },
      {
        period: 'Queens, NY | July 2020 - August 2020',
        role: 'Data Entry',
        company: 'Summer Bridge Program (Hats & Ladders)',
        logo: hatsAndLaddersLogo,
        logoStyle: {
          maxWidth: '138px',
          maxHeight: '48px',
        },
        logoOffsetX: 60,
        logoOffsetY: 60,
        logoScale: 4.2,
        description:
          'A remote program centered on professional development, teamwork, and workplace communication.',
        bulletPoints: [
          'Built skills in communication, writing, and presentations.',
          'Worked with a team of about 20 peers under supervisor guidance.',
        ],
        highlights: ['Professional Development', 'Writing', 'Teamwork'],
      },
    ],
  },
  contact: {
    kicker: '',
    title: "Let’s connect.",
    description:
      "Focused on real systems, " + 'real problems, ' + "and work that has impact.",
    links: [
      { label: 'Resume', value: 'Resume' },
      { label: 'Linkden', value: '@handle' },
      { label: 'GitHub', value: 'Based in New York' },
    ],
    panelKicker: '',
    panelTitle: 'Send me a Message',
    panelText:
      "I’m actively looking for opportunities in the tech and engineering industry." +
      ' If you’re hiring or want to get in touch regarding projects, I’d love to connect.',
  },
}
