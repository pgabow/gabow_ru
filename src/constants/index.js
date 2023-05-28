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
  nextjs,
  nikitaPage,
  stupidopia,
  stupidblog,
} from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "",
    date: "",
    points: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    title: "React Developer",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: shopify,
    iconBg: "",
    date: "",
    points: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: meta,
    iconBg: "",
    date: "",
    points: [
      "",
      "",
      "",
      "",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "CFO",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "",
    name: "C",
    designation: "COO",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// blue-text-gradient
// pink-text-gradient
// green-text-gradient
// orange-text-gradient
// green-pink-gradient
// violet-gradient

const projects = [
  {
    name: 'Nikita.gabow.ru',
    description: 'Personal page my son' + `\n`,
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: nikitaPage,
    source_code_link: 'http://nikita.gabow.ru/',
  },
  {
    name: 'Stupidopia',
    description: 'Stupidopia is AI prompting tool for share stupid prompts',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws-s3',
        color: 'orange-text-gradient',
      },
    ],
    image: stupidopia,
    source_code_link: 'https://stupidopia.vercel.app/',
  },
  {
    name: 'Stupid AI Blog',
    description: `Stupid AI-powered John Doe's Blog`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'graphql',
        color: 'pink-text-gradient',
      },
      {
        name: 'hygraph',
        color: 'orange-text-gradient',
      },
    ],
    image: stupidblog,
    source_code_link: 'https://stupid-ai-johndoe-blogs.vercel.app/',
  },
]

export { services, technologies, experiences, testimonials, projects };
