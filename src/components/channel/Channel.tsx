// import tvFrame from './assets/tv-frame.png';
import { ReactNode, useState } from 'react';
import tvFrame from '../../assets/images/tv-alpha500px.png'
import staticGif from '../../assets/images/static.gif';
import React from 'react';

export interface IChannel {
  description: string,
  name: string,
  image?: string,
  link?: string,
  content?: JSX.Element
}

interface ChannelProps {
  channel: IChannel,
  children: ReactNode
}

const Channel = ({channel, children}: ChannelProps) => {
  const [glow, setGlow] = useState(false)
  const followLink = () => {
    if (channel.link) {
      // timer link here
      window.location.href = channel.link
    }
    if (channel.content) {
      // set view state here (channel.name)
    }
  }

  return (
    <div onClick={followLink} className="grid-item">
      <img
        className='tv-frame' 
        src={tvFrame} 
      />
      <img 
        className='tv-content' 
        src={channel.image ?? staticGif}
        alt={channel.description} 
        title={channel.description}
      />
    </div>
  );
};

export default Channel;