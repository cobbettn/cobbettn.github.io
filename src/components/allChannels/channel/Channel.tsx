// import tvFrame from './assets/tv-frame.png';
import tvFrame from '../../../assets/images/tv.png'
import staticGif from '../../../assets/images/static.gif';
import { IChannel } from '../../../data';

import React from 'react';

interface ChannelProps {
  channel?: IChannel,
  setView?: any,
}

const Channel = ({channel, setView}: ChannelProps) => {
  const click = () => {
    if (channel?.link) {
      // timer link here
      window.location.href = channel.link
    }
    if (channel?.view !== undefined) {
      setView();
    }
  }

  return (
    <div onClick={click} className="grid-item">
      <img
        className='tv-frame' 
        src={tvFrame} 
        style={{cursor: channel ? 'pointer': 'default'}}
      />
      <img 
        className='tv-content' 
        src={channel?.image ?? staticGif}
        alt={channel?.description} 
        title={channel?.description}
      />
    </div>
  );
};

export default Channel;