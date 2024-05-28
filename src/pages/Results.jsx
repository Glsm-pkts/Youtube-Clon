import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { useSearchParams } from 'react-router-dom';
import api from '../utils/api';
import VideoCard from '../components/VideoCard';

const Results = () => {
    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState();
    const [data, setData] = useState([]);
   const query = searchParams.get("search_query");
    useEffect(() => {
        const params ={
            query:query,
            token: page > 1 ? token : undefined,

        }
     api.get("/search", {params}).then((res)=> {
        setToken(res.data.continuation);
        setData((prev) => prev.concat(res.data.data));
     }) 
    },[query, page]);
  return (
    <div className='flex gap-3 '>
      <SideBar />
      <div className='mx-auto h-[90vh] overflow-auto'>
        <h2 className='text-xl mt-4'>
        <span className='mt-3'>{query}</span> için sonuçlar
        </h2>
        <div className='flex flex-col justify-center mt-5'>
          {data.map(
            (item) =>
  item.type === "video" && <VideoCard key={item.id} video = {item} isRow={true}/>
          )} 
           <button onClick={() => setPage(page +1)} className='bg-zinc-600 py-2 px-5 rounded my-10 hover:bg-zinc-900 transition mx-auto'>Daha Fazla</button>
        </div>
      </div>
    </div>
  );
};

export default Results
