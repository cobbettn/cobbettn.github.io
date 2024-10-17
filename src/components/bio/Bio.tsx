import me from '../../assets/images/me.jpg'
import React from 'react';

const Bio = () => {
  return (
    <div className='container channel-container'>
      
      <div>
        <p> 
          Whether it’s the digital world or the world around us, we
          should aim to leave things better than when we found them. With
          nearly a decade of technology experience in software development, I
          enjoy the art of problem solving and collaborating with teams to 
          work towards a common goal. I also recognize the need to keep growing 
          and learning new things, and the importance of knowing how to adapt 
          when priorities change.
        </p>
        <p>  
          Now I’m shifting my focus to the natural world, and exploring how I 
          can apply a systems mindset to sustainable agriculture and home-scale
          horticulture solutions. When I'm not gardening or coding, I can 
          usually be found mushroom hunting in the hills of Pittsburgh, PA or 
          tinkering with retro game systems. 
        </p>
      </div>
      <img src={me}/>
    </div>
  )
}

export default Bio;