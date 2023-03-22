// import tvFrame from './assets/tv-frame.png';
import { useState } from 'react';
import tvFrame from '../../assets/images/tv-alpha500px.png'
import { useWindowDimensions } from '../../hooks/useWindowSize';

const TVFrame = ({ children }) => {
  // const { height, width } = useWindowDimensions
  const commonStyles = {position: 'absolute', width:'20vh', height:'20vh'}
  const [glow, setGlow] = useState(false)

  return (
    <div className='grid-item'>
      <img
        onMouseEnter={() => {
          setGlow(true)
        }}
        onMouseLeave={() => {
          setGlow(false)
        }}
        className='tv-content'
        style={{zIndex: 100}} 
        src={tvFrame} 
        alt="Television Frame" />
      <div className='tv-content' style={{display: 'flex', filter: `brightness(${glow ? 1.33 : 1})`}} >
        { children }
      </div>
    </div>
  );
};

export default TVFrame;