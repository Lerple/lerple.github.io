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
        title: 'Resume Intent Classification System',
        category: 'Software',
        description:
          'K.A.I.R.O. V1.0 is a lightweight neural network resume assistant that classifies natural language questions and routes them to structured answers about experience, projects, and technical skills.',
        bulletPoints: [
          'Implemented the system in Python with PyTorch, NLTK, and JSON-based training data for local deployment.',
          'Trained a feedforward neural network classifier on bag-of-words features for intent-based question answering.',
          'Structured the dataset around recruiter-style prompts covering internships, projects, skills, education, and portfolio work.',
          'Kept the architecture lightweight so the model can be retrained quickly as new experience and projects are added.',
        ],
        stack: ['Python', 'PyTorch', 'NLTK', 'NLP'],
        media: [],
      },
      {
        number: '02',
        title: 'Hybrid Multi-Model AI Orchestrator',
        category: 'Software',
        description:
          'K.A.I.R.O. V2.1 is a hybrid AI assistant that routes tasks across local and cloud-based models for contextual conversations, automation, web search, and data retrieval.',
        bulletPoints: [
          'Combined Python, Gemini API, Ollama, and local LLMs into a single hybrid inference workflow.',
          'Implemented task classification, model routing, response aggregation, and context-aware conversation handling.',
          'Routed requests based on task complexity, privacy needs, and execution requirements.',
          'Showcases practical AI engineering across orchestration, API integration, and multi-model workflows.',
        ],
        stack: ['Python', 'Gemini API', 'Ollama', 'Local LLMs'],
        media: [],
      },
      {
        number: '03',
        title: 'Interactive 3D Portfolio Platform',
        category: 'Software',
        description:
          'A browser-based 3D portfolio experience that presents projects, experience, and technical depth through real-time rendering, layered motion, and immersive navigation.',
        bulletPoints: [
          'Created with React, Three.js, and React Three Fiber for interactive rendering in the browser.',
          'Uses a layered multi-parallax system with dynamic camera movement and animated scene transitions.',
          'Organized around reusable components to support maintainability and future expansion.',
          'Optimized rendering performance so multiple 3D sections remain smooth and responsive.',
          'Reframes a standard portfolio into a more product-like and memorable presentation experience.',
        ],
        stack: ['React', 'Three.js', 'React Three Fiber', 'JavaScript', 'CSS'],
        media: [],
      },
      {
        number: '04',
        title: 'Community Feedback Intelligence Engine',
        category: 'Software',
        description:
          "An internal AI analysis tool built for Ubiq to monitor Discord activity, surface product feedback trends, identify recurring bugs, and connect community engagement with platform usage.",
        bulletPoints: [
          "Built internally for Ubiq's Discord ecosystem using Gemini 2.5 and token-efficient prompting strategies.",
          'Analyzed channel activity to surface top requested features, recurring user pain points, and the most commonly reported bugs.',
          'Generated ranked activity views for Discord participation, top platform users, and correlation between community engagement and app usage.',
          'Turned raw community conversation into structured product insight that was easier for the team to review and act on.',
        ],
        stack: ['Python', 'Gemini API', 'Discord', 'Analytics'],
        media: [],
      },
      {
        number: '05',
        title: 'Self-Hosted Infrastructure Lab',
        category: 'Systems and Infastructure',
        description:
          'A self-hosted infrastructure environment for containerized services, storage management, networking, and hands-on systems administration.',
        bulletPoints: [
          'Runs on an Intel i7 Chromebox with a 5-bay disk enclosure and multi-drive storage setup.',
          'Uses TrueNAS Scale, Linux, and Docker for development, testing, and self-hosted services.',
          'Supports 10+ Docker containers and 5+ users across multiple services.',
          'Covers networking, remote access, storage management, and service uptime in a real home lab environment.',
          'Provided practical experience troubleshooting performance, networking, and data reliability issues.',
        ],
        stack: ['TrueNAS Scale', 'Linux', 'Docker', 'Networking'],
        media: [],
      },
      {
        number: '06',
        title: 'Embedded Gear Position Detection System',
        category: 'Embedded Systems',
        description:
          'An embedded automotive system that detects and displays a manual vehicle gear position in real time using custom hardware, sensing logic, and control software.',
        bulletPoints: [
          'Designed the system around custom PCBs, hall sensors, and an ESP-based microcontroller.',
          'Wrote embedded software to infer the current gear and update the display in real time.',
          'Integrated sensing hardware, control logic, and output behavior into a practical automotive-focused device.',
          'Highlights hands-on experience across embedded programming, hardware integration, signal interpretation, and real-world system design.',
        ],
        stack: ['C++', 'Custom PCB', 'Hall Sensors', 'Embedded Systems'],
        media: [],
      },
      {
        number: '07',
        title: 'Logic-Complete 2D Platformer',
        category: 'Game',
        description:
          'A logic-complete 2D platformer featuring core gameplay systems, movement logic, and level progression inspired by classic titles.',
        bulletPoints: [
          'Implemented player movement, collision detection, and progression systems.',
          'Focused on gameplay flow and mechanics inspired by classic platformers.',
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
          "Contributed to production iOS development at Ubiq, an immersive spatial social media platform, by building a core video export pipeline for spatial stories used by 3,000+ users.",
        bulletPoints: [
          'Worked in a small engineering team of three developers, including the Head Developer, on production-level iOS features.',
          'Built a full video export system from scratch using SwiftUI, AVFoundation, and iOS media frameworks.',
          'Wrote 600+ lines of production Swift code covering export UI, media rendering, encoding logic, progress states, and share-ready output.',
          'Solved media pipeline challenges including timing synchronization, video layer ordering, animation rendering issues, and large-file edge cases.',
          'Delivered a core feature that enabled cross-platform sharing of user-generated spatial stories and improved the overall product experience.',
        ],
        highlights: ['SwiftUI', 'AVFoundation', 'iOS Media Pipelines'],
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
        description:
          'Supported product testing, user experience analysis, and feature refinement across Ubiq before transitioning into the software engineering internship.',
        bulletPoints: [
          'Tested application workflows across story creation, navigation, content flows, export functionality, and UI responsiveness.',
          'Identified bugs, UI inconsistencies, and usability issues across multiple parts of the product.',
          'Suggested UI simplifications and product improvements based on feature behavior and user friction points.',
          'Collaborated with engineers, designers, and product leadership on feature planning, bug triage, and refinement.',
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
          'Built automation workflows and AI-assisted data pipelines to improve operational efficiency, system connectivity, and internal data accessibility.',
        bulletPoints: [
          'Processed and structured large customer and operational datasets using Python-based automation workflows.',
          'Built integrations across Google Docs, Google Calendar, CRM tools, Trainual, Canopy Connect, and internal databases.',
          'Used ChatGPT and LLM-based workflows to reduce manual data entry and automate repetitive internal processes.',
          'Improved data access, workflow efficiency, and communication across connected business systems.',
          'Supported digital strategy initiatives through practical automation and AI-driven process improvement.',
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
          'Focused on AI-assisted data automation, business listing processing, and workflow optimization to improve data quality and consistency.',
        bulletPoints: [
          'Processed 100+ business listings weekly while cleaning inconsistent records and standardizing formatting.',
          'Used custom OpenAI models and Python workflows to extract business information from unstructured sources.',
          'Automated classification and dataset structuring tasks to reduce repetitive manual work.',
          'Maintained database accuracy and improved consistency across business listing datasets.',
          'Collaborated with internal teams to improve data workflows and operational efficiency.',
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
        period: 'Queens, NY | September 2022 - Present',
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
          'Lead marketing strategy, client outreach, and brand development to strengthen positioning and support business growth.',
        bulletPoints: [
          'Develop and execute marketing campaigns that strengthen brand visibility and client acquisition.',
          'Work directly with clients to define project requirements, scope, and execution plans.',
          'Contribute to business growth through outreach, branding strategy, and project coordination.',
        ],
        highlights: ['Marketing', 'Client Strategy', 'Brand Growth'],
      },
      {
        period: 'Queens, NY | June 2022 - Present',
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
          'Co-founded and operated a mobile car detailing business focused on service quality, scheduling, and client relationship management.',
        bulletPoints: [
          'Coordinated operations, scheduling, service logistics, and client communication in a real customer-facing business.',
          'Worked with 6 partners to maintain service quality and deliver consistent execution.',
          'Developed hands-on experience in entrepreneurship, operations management, and customer relationship handling.',
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
