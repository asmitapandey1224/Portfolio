import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "C++",
    icon: web,
  },
  {
    title: "Data Structure and Algorithm",
    icon: mobile,
  },
  {
    title: "ReactJs",
    icon: backend,
  },
  {
    title: "JavaScript",
    icon: creator,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "HTML/CSS",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SIH'23 Internal Hackathon",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "15th September, 2023",
    points: [
      "Secured 3rd position in SIH'23 Internal Hackathon Round.",
      "Participated with 5 other members in a group named THE THINK TANK.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "HACTOBERFEST 2022",
    icon: tesla,
    iconBg: "#383E56",
    date: "13th October, 2022",
    points: [
      "Participated in HACTOBERFEST 2022 and received all badges upto level 4.",
      "Developed few projects of python and push them on github.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Devtown Bootcamp",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "It was a 7 days bootcamp with Devtown.",
      "It was a bootcamp for making Hotstar-Clone using HTML, CSS and JavaScript.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      "Recieved Participation and Completion Certificate from Microsoft, Google, Amazon and Devtown.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Educational-Website",
    description:
      "Our educational website to provide an engaging learning experience. Seamlessly blending visually appealing design with interactive elements, we aim to make learning intuitive and enjoyable.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://asmitapandey1224.github.io/Educational-Website/",
  },
  {
    name: "Shopping Cart",
    description:
      "Our shopping cart is a dynamic web application provides users with a smooth and interactive shopping experience.User-friendly, our cart ensures a seamless online shopping journey for customers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://asmitapandey1224.github.io/ShoppingCart/",
  },
  {
    name: "Shopping Website",
    description:
      "With a modern and responsive design, users can browse, search, and purchase products effortlessly. Leveraging Node.js for backend functionalities ensures fast loading times and secure data handling.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };