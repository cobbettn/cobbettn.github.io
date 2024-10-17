import { useState } from 'react'
import AllChannels from './components/allChannels/AllChannels'
import { channels } from './data'
import Bio from './components/bio/Bio'
import { Channels } from './data'


function App() {
  const [view, setView] = useState<Channels | null>(null);

  const View = ({children}: any) => {
    return <div onClick={() => setView(null)}>{children}</div>
  }
  
  const renderView = () => {
    switch (view) {
      case Channels.bio:
        return <View><Bio/></View>
      default:
        return <AllChannels channels={channels} setView={setView}/>;
    }
  }

  return (
    <>{ renderView() }</>
  )
}

export default App
