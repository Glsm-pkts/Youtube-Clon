import { Link } from "react-router-dom";
import { categories } from "../constants";
import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";


function SideBar() {
  
const{selectedCategory, setSelectedCategory}= useContext(VideoContext);




  return <div className="flex flex-col p-1 md:p-4 ">
    {
         categories?.map((item, i)=>(
            <Link onClick={() => setSelectedCategory(item)} key={i}>
               <div className={`
               ${selectedCategory.name === item.name &&"bg-[#2D2D2D]"}
               flex gap-2 py-4 px-2 md:px-3 items-center md:text-lg cursor-pointer hover:bg-[#2D2D2D] rounded-md`}>
               <span className="max-md:text-2xl">{item.icon}</span>
                <span className="max-md:hidden line-clamp-1">{item.name}</span>
               </div>
               {item.divider && <hr/>}
            </Link>
        ))
    }
  </div>
  
}

export default SideBar
