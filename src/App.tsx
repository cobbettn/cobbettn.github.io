import { useState } from 'react'
import AllChannels from './components/allChannels/AllChannels'
import { channels } from './data'
import Bio from './components/bio/Bio'
import { Channels } from './data'


function App() {
  const [view, setView] = useState<Channels | null>(null);
  
  const renderView = () => {
    switch (view) {
      case Channels.bio:
        return <Bio setView={setView}/>
      default:
        return <AllChannels channels={channels} setView={setView}/>;
    }
  }

  return (
    <>{ renderView() }</>
  )
}

export default App
