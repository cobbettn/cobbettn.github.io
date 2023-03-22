// import tvFrame from './assets/tv-frame.png';
import tvFrame from '../../assets/images/tv-alpha500px.png'
import { useWindowDimensions } from '../../hooks/useWindowSize';

const TVFrame = ({ children }) => {
  // const { height, width } = useWindowDimensions
  
  return (
    <div className='grid-item'>
      <img style={{position: 'absolute', width:'20vh', height:'20vh', zIndex:100}} 
        src={tvFrame} 
        alt="Television Frame" />
      <div style={{position: 'absolute', width:'20vh', height:'20vh'}}>
        {children}
      </div>
    </div>
  );
};

export default TVFrame;