// import tvFrame from './assets/tv-frame.png';
import { ReactNode, useState } from 'react';
import tvFrame from '../../assets/images/tv-alpha500px.png'

interface Props {
  children?: ReactNode,
  link: string
}

const TVFrame = ({ children, ...props } : Props) => {
  // const { height, width } = useWindowDimensions
  const commonStyles = {position: 'absolute', width:'20vh', height:'20vh'}
  const [glow, setGlow] = useState(false)
  const followLink = () => {
    // has to be wrong
    if (props.link !== 'undefined') {
      window.location.href = props.link
    }
  }

  return (
    <div onClick={followLink} className='grid-item'>
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
      <div className='tv-content' style={{display: 'flex', filter: `brightness(${glow ? 2 : 1.5})`}} >
        { children }
      </div>
    </div>
  );
};

export default TVFrame;