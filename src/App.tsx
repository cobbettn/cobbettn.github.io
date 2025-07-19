import { useState } from 'react'
import AllChannels from './components/allChannels/AllChannels'
import { channels, Channels } from './data'
import Bio from './components/views/bio/Bio'

import Mushroom from './components/views/mushroom/Mushroom'


function App() {
  const [view, setView] = useState<Channels | null>(null);

  const View = ({children}: any) => {
    return (
      <div className='view-container'>
        {children}
        <button className='close-button' onClick={() => setView(null)}>close</button>
      </div>
    );
  }
  
  const renderView = () => {
    switch (view) {
      case Channels.bio:
        return <View><Bio/></View>
      case Channels.mushroom:
        return <View><Mushroom/></View>
      default:
        return <AllChannels channels={channels} setView={setView}/>;
    }
  }

  return (
    <>{ renderView() }</>
  )
}

export default App
