import githubLogo from './assets/images/github.png'
import linkedinLogo from './assets/images/linkedin.png'
import colorBars from './assets/images/colorBars.png'
import resumeIcon from './assets/images/resumeIcon.png'
import codeIcon from './assets/images/codeSymbol.png'
import bioIcon from './assets/images/bioIcon.jpg'
import inat from './assets/images/inat.jpg'
import steam from  './assets/images/steam.png'
import wordpress from './assets/images/wordpress.png'
import logic from './assets/images/logic.jpg'
import neocities from './assets/images/neocities.png'
import shroom from './assets/images/shroom.jpg'

import Resume from './assets/Resume.pdf'

export enum Channels {
  bio,
  mushroom,
  pico8,
  logicCalc
}

export interface IChannel {
  description: string,
  name: string,
  image?: string,
  link?: string,
  view?: Channels
}

// 16 channels
export const channels: (IChannel | undefined)[] = [
  // row 1
  {
    name: 'bio',
    description: 'bio',
    image: bioIcon,
    view: Channels.bio
  },
  {
    name: 'github',
    description: 'github',
    image: githubLogo,
    link: 'https://github.com/cobbettn',
  },
  {
    name: 'blog',
    description: 'blog',
    image: wordpress,
    link: 'https://blog.ncobbett.com'
  },
  {
    name: 'code',
    image: codeIcon,
    link: 'https://github.com/cobbettn/cobbettn.github.io',
    description: 'github repository for this website'
  },

  // row 2
  {
    name: 'resume',
    description: 'resume',
    image: resumeIcon,
    link: Resume,
  },
  {
    name: 'linkedin',
    description: 'linkedin',
    image: linkedinLogo,
    link: 'https://www.linkedin.com/in/nathan-cobbett/',
  },
  {
    name: 'inaturalist',
    description: 'inaturalist',
    image: inat,
    link: "https://www.inaturalist.org/people/skatepunk"
  },
  {
    name: 'neocities',
    description: 'neocities',
    image: neocities,
    link: 'https://ncobbett.neocities.org/'
  },

  // row 3
  {
    name: 'steam',
    description: 'steam',
    image: steam,
    link: "https://steamcommunity.com/profiles/76561198262196266/"
  },
  {
    name: 'mushroom',
    description: 'mushroom',
    image: shroom,
    view: Channels.mushroom
  },
  {
    name: 'truth table calculator',
    description: 'truth table calculator',
    image: logic,
    link: 'https://ncobbett.com/TruthTables'
  },
  undefined,

  // row 4
  undefined,
  undefined,
  undefined,
  undefined
];