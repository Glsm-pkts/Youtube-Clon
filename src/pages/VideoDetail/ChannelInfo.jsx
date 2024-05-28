import React from 'react'
import { AiFillLike, AiFillDislike  } from "react-icons/ai";

const ChannelInfo = ({video}) => {
  console.log(video);
  return (
    <div className='flex justify-between'>
<div className='flex items-center gap-4'>
  <img src={video.channelThumbnail[0].url} className='rounded-full w-12 h-12' />
  <div>
  <h4 className='font-bold'>{video.channelTitle}</h4>
    <p className='text-gray-400'>{video.subscriberCountText}</p>
  </div>
    <button className='bg-white p-2 text-black transition h-9 rounded-full hover:bg-gray-400'>Abone Ol</button>
  
  
  
  </div> 
  
  {/**sağ taraf */}  
  <div className='flex items-center rounded-full bg-[#272727] cursor-pointer'>  
<div className='py-2 px-6 border-r'><AiFillLike /></div>
<div className='py-2 px-6'><AiFillDislike /></div>

</div>

  </div>
    
  )
};

export default ChannelInfo
