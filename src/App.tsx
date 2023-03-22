import TVFrame from './components/tv/TVFrame'
import githubLogo from './assets/images/GitHub_Logo_White.png'
import linkedinLogo from './assets/images/linkedin.png'
import colorBars from './assets/images/SMPTE_Color_Bars.svg.png'

function App() {
  const totalChannels = 25;
  const channels = [
    {
      name: 'github',
      image: githubLogo,
    },
    {
      name: 'linkedin',
      image: linkedinLogo
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
          <img className='channelImage' style={{width: '20vh'}} src={channel?.image ?? colorBars} alt="" />
        </TVFrame>
      ))}
    </div>
  )
}

export default App
