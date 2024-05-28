import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import { VideoContext } from '../context/VideoContext'
import VideoCard from '../components/VideoCard';
import Loader from '../components/Loader';

const Feed = () => {
  const {videos, isLoading, error} = useContext(VideoContext);
  console.log(videos);
  return (
    <div className='flex'>
    <SideBar/>
    <div className='videos'>
      {isLoading ? (
      <Loader/>
      ) : error ? (
      <p>error</p>
      ) : (
      videos?.map((item) => item.type === "video" && <VideoCard video={item} key={item.videoId}/>)) }
    </div>
    </div>
  )
}

export default Feed;
