import me from '../../assets/images/me.jpg';
import React from 'react';
import { Channels } from '../../data';

interface BioProps {
  setView: any
}

function Bio({setView}: BioProps) {
  return (<div onClick={() => setView(null)} className='container channel-container'>bio</div>)
}

export default Bio;