import TVFrame from './components/tv/TVFrame'
import githubLogo from './assets/images/GitHub_Logo_White.png'
import linkedinLogo from './assets/images/linkedin.png'
import colorBars from './assets/images/SMPTE_Color_Bars.svg.png'
import tvStatic from './assets/images/static.gif'

function App() {
  // 5 x 5 grid
  const channels = [
    {
      name: 'github',
      image: githubLogo,
      link: ''
    },
    {
      name: 'linkedin',
      image: linkedinLogo,
      link: ''
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
    null,
    null,
    null,
    
  ]

  return (
    <div className="grid-container">
      { channels.map((channel, i) => (
        <TVFrame key={`channel-${i}`}>
          <img className='channelImage' style={{width: '20vh'}} src={channel?.image ?? tvStatic} alt="" />
        </TVFrame>
      ))}
    </div>
  )
}

export default App
