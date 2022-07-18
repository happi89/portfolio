const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://farhaan-patel.vercel.app',
  title: 'FP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Farhaan Patel',
  role: 'Fullstack Web Developer with a passion for learning and creating!',
  description: '',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/farhaan-patel-4658ba237/',
    github: 'https://github.com/happi89',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tweeter',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'NextJS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Netflix',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'NextJS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Ecommerce Store',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Redux', 'TypeScript', 'React', 'NodeJS', 'Express'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Food Tinder App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Live Chat App',
    description: 'Discord Clone with live video and chat rooms',
    stack: ['Socket.io', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Weather App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  {
    name: 'Frontend',
    stack: [
      'HTML',
      'CSS',
      'Tailwind',
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Redux',
      'Material UI',
      'NextJS',
      'Jest',
      'Cypress',
    ],
  },
  {
    name: 'Backend',
    stack: [
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'MySQL',
      'Firebase',
      'Docker',
      'Sockets.io',
      'AWS',
      'Jest',
      'Redis',
    ],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'React',
  'NextJS',
  'Redux',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Node',
  'Express',
  'sockets.io,
  'MongoDB',
  'MySQL',
  'GraphQL',
  'React Native',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'farhaanpatel99@gmail.com',
}

export { header, about, projects, skills, contact }
