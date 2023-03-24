import TVFrame from './components/tv/TVFrame'
import githubLogo from './assets/images/GitHub_Logo_White.png'
import linkedinLogo from './assets/images/linkedin.png'
import colorBars from './assets/images/SMPTE_Color_Bars.svg.png'
import tvStatic from './assets/images/static.gif'
import resumeIcon from './assets/images/resume-icon.png'
import codeIcon from './assets/images/codeicon.png'
import Resume from './assets/Resume.pdf'

function App() {
  // 5 x 5 grid
  const channels = [
    {
      name: 'github',
      image: githubLogo,
      link: 'https://github.com/cobbettn'
    },
    {
      name: 'linkedin',
      image: linkedinLogo,
      link: 'https://www.linkedin.com/in/nathan-cobbett/'
    },
    {
      name: 'resume',
      image: resumeIcon,
      link: Resume
    },
    {
      image: colorBars
    },
    {
      name: 'code',
      image: codeIcon,
      link: 'https://github.com/cobbettn/cobbettn.github.io'
    },

    null,
    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,
    null,
  ]

  return (
    <div className="grid-container">
      { 
        channels.map((channel, i) => (
          <TVFrame link={`${channel?.link}`} key={`channel-${i}`}>
            <img 
            className='channelImage' 
            style={{width: '15vh', height: '15vh'}} 
            src={channel?.image ?? tvStatic} 
            alt="" />
          </TVFrame>
        )) 
      }
    </div>
  )
}

export default App
