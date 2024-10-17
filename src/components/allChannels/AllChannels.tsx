import { IChannel } from "../../data";

import Channel from "../channel/Channel";

interface AllChannelsProps {
  channels: (IChannel | undefined)[],
  setView: any
}

const AllChannels = ({channels, setView} : AllChannelsProps) => {
  return (    
    <div className="container grid-container ">
      { 
        channels.map((channel, i) => 
          <Channel channel={channel} key={i} setView={() => setView(channel?.view)}/>
        )
      }
    </div>
  );
}

export default AllChannels;