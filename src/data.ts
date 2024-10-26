import githubLogo from './assets/images/github.png'
import linkedinLogo from './assets/images/linkedin.png'
import colorBars from './assets/images/colorBars.png'
import resumeIcon from './assets/images/resumeIcon.png'
import codeIcon from './assets/images/codeSymbol.png'
import bioIcon from './assets/images/bioIcon.jpg'
import inat from './assets/images/inat.jpg'
import steam from  './assets/images/steam.png'

import Resume from './assets/Resume.pdf'

export enum Channels {
  bio,
  mushroom
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
  undefined,
  undefined,
  {
    name: 'resume',
    description: 'resume',
    image: resumeIcon,
    link: Resume,
  },

  // row 2
  undefined,
  {
    name: 'github',
    description: 'github',
    image: githubLogo,
    link: 'https://github.com/cobbettn',
  },
  {
    name: 'linkedin',
    description: 'linkedin',
    image: linkedinLogo,
    link: 'https://www.linkedin.com/in/nathan-cobbett/',
  },
  undefined,

  // row 3
  undefined,
  // {
  //   name: 'in progress',
  //   description: 'in progress',
  //   image: colorBars,
  // },
  {
    name: 'mushroom',
    description: 'mushroom',
    image: colorBars,
    view: Channels.mushroom
  
  },
  {
    name: 'inaturalist',
    description: 'inaturalist',
    image: inat,
    link: "https://www.inaturalist.org/people/skatepunk"
  },
  undefined,

  // row 4
  {
    name: 'code',
    image: codeIcon,
    link: 'https://github.com/cobbettn/cobbettn.github.io',
    description: 'github repository for this website'
  },
  undefined,
  undefined,
  {
    name: 'steam',
    description: 'steam',
    image: steam,
    link: "https://steamcommunity.com/profiles/76561198262196266/"
  },
];