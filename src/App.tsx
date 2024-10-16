import Channel from './components/channel/Channel'
import githubLogo from './assets/images/GitHub_Logo_White.png'
import linkedinLogo from './assets/images/linkedin.png'
import colorBars from './assets/images/SMPTE_Color_Bars.svg.png'
import tvStatic from './assets/images/static.gif'
import resumeIcon from './assets/images/resume-icon.png'
import codeIcon from './assets/images/codeicon.png'
import bioIcon from './assets/images/about-icon.jpg'
import Resume from './assets/Resume.pdf'
import { useState } from 'react'

function App() {
  const channels = [
    // row 1
    {
      name: 'bio',
      description: 'bio',
      image: bioIcon,
      content: (<div>bio</div>)
    },
    null,
    null,
    {
      name: 'resume',
      description: 'resume',
      image: resumeIcon,
      link: Resume,
    },


    null,
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
    null,


    null,
    {
      name: 'in progress',
      image: colorBars,
      description: 'in progress'
    },
    {
      name: 'code',
      image: codeIcon,
      link: 'https://github.com/cobbettn/cobbettn.github.io',
      description: 'github repository for this website'
    },

    null,

    null,
    null,
    null,
    null,
  ]

  return (
    <>
      <div>ncobbett.com</div>
      <div className="grid-container">
        { 
          channels.map((channel, i) => (
            <Channel channel={channel ?? {name: '', description: ''}}  key={`channel-${i}`}>
              <img 
                className='channelImage' 
                src={channel?.image ?? tvStatic} 
                alt={channel?.description}
                title={channel?.description} 
              />
            </Channel>
          )) 
        }
      </div>
    </>
  
  )
}

export default App
