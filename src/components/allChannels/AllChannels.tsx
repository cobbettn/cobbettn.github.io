import { IChannel } from "../../data";

import Channel from "../channel/Channel";

interface AllChannelsProps {
  channels: (IChannel | undefined)[],
  setView: any
}

function AllChannels({channels, setView} : AllChannelsProps) {
  return (    
    <div className="container grid-container ">
      { 
        channels.map((channel, i) => 
          <Channel channel={channel} key={i} setView={setView}/>
        )
      }
    </div>
  );
}

export default AllChannels;