const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'ET.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Eva Timoney',
  role: 'Web Developer and Designer',
  description:'I am interested in blending technical skills with creativity to create efficient and innovative products.',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vRkSnYb9rnnkd4KESg5MQCTPqcTUsK-IQ77t9nbFVlXr6KNX_ZvklA-XGHSGTxFpg/pub',
  social: {
    linkedin: 'https://www.linkedin.com/in/evatimoney112814/',
    github: 'https://github.com/evatimoney',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Health and Wealth',
    description:
      'An interactive data visulization that compares the life expectancy and income of countries throughout the world.',
    stack: ['HTML', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com/evatimoney/WealthandHealth',
    livePreview: 'https://wealthandhealth-project.glitch.me/',
  },
  {
    name: 'Covid-19 Analyzation',
    description:
      'A series of interactive graphs that show various statistics about the Covid-19 virus that correspond to a drag and filter feature.',
    stack: ['Vega-Lite', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/evatimoney/Covid19-Data',
    livePreview: 'https://covid-19-data.glitch.me/',
  },
  {
    name: 'Coffee House Chains',
    description:
      'As an avid coffee drinker, I decided to create a visualization that depicts the leading coffee chains and their revenue.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/evatimoney/CoffeeChains',
    livePreview: 'https://coffeehouse-chains.glitch.me/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Figma',
  'Python',
  'Redux',
  'UNIX',
  'LINUX',
  'Git',
  'SQL',
  'Illustrator',
  'Photoshop',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'timoneev@bc.edu',
}

export { header, about, projects, skills, contact }
