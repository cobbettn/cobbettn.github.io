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
      link: 'https://github.com/cobbettn',
      description: 'my github profile',
    },
    {
      name: 'linkedin',
      image: linkedinLogo,
      link: 'https://www.linkedin.com/in/nathan-cobbett/',
      description: 'LinkedIn'
    },
    {
      name: 'resume',
      image: resumeIcon,
      link: Resume,
      description: 'my resume'
    },
    {
      name: 'in progress',
      image: colorBars,
      description: 'in progress'
    },

    {
      name: 'code',
      image: codeIcon,
      link: 'https://github.com/cobbettn/cobbettn.github.io',
      description: 'repository for this site'
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
  ]

  return (
    <div className="grid-container">
      { 
        channels.map((channel, i) => (
          <TVFrame channel={channel ?? {name: '', description: ''}}  key={`channel-${i}`}>
            <img 
            className='channelImage' 
            src={channel?.image ?? tvStatic} 
            alt={channel?.description} />
          </TVFrame>
        )) 
      }
    </div>   
  )
}

export default App
