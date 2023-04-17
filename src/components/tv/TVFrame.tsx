// import tvFrame from './assets/tv-frame.png';
import { ReactNode, useState } from 'react';
import tvFrame from '../../assets/images/tv-alpha500px.png'
import React from 'react';

interface Channel {
  description: string,
  name: string,
  image?: string,
  link?: string,
  action?: any
}

interface TVFrameProps {
  channel: Channel,
  children: ReactNode
}

const TVFrame = ({channel, children}: TVFrameProps) => {
  const [glow, setGlow] = useState(false)
  const followLink = () => {
    if (channel.link) {
      window.location.href = channel.link
    }
    if (channel.action) {
      channel.action();
    }
  }

  return (
    <div onClick={followLink} className={`grid-item` && channel.link !== undefined || channel.action !== undefined ? 'linkHover' : ''}>
      <img
        onMouseEnter={() => setGlow(true)}
        onMouseLeave={() => setGlow(false)}
        className='tv-content'
        style={{zIndex: 1}} 
        src={tvFrame} 
        alt={channel.description} 
        title={channel.description}/>
      <div className='tv-content' style={{display: 'flex', filter: `opacity(${glow ? 1 : 0.8})`}} >
        { children }
      </div>
    </div>
  );
};

export default TVFrame;