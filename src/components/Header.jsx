import { Link, useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  //form gönderilince çalışacak fonksiyon
  const handleSubmit = (e) => {

    e.preventDefault();//sayfanını yenilenmesin engeller

    //aratılacak metin
    const text = e.target[0].value;
    //metin boşsa fonk durdur
    if(text.trim() === "") return;
    navigate(`/results?search_query=${text}`);
  };


  return (
   <header className="flex justify-between items-center p-4 ">

    <Link className="flex items-center gap-2" to={"/"}>
    <img className="w-[50px]"  src="Youtube_logo.png" alt="Logo" />
    <h1 className=" text-2xl font-mono max-sm:hidden">Youtube</h1>
    </Link>
    
    <form onSubmit={handleSubmit} className="group flex border border-gray-400 rounded-[20px] overflow-hidden">

       <input type="text" placeholder="Ara.." className=" group-hover:border-blue-500 group-hover:border border border-transparent bg-black text-white py-2 px-5 outline-none rounded-l-[20px] focus:border-blue-500" />

        <button className="px-4 text-2xl bg-zinc-800"> 
        <CiSearch /> </button>

    </form>

    <div className="flex gap-3 text-xl cursor-pointer">
    <FaBell className="hover:text-gray-400 transition duration-500" />
    <FaVideo className="hover:text-gray-400 transition duration-500"/>
    <MdVideoLibrary className="hover:text-gray-400 transition duration-500"/>
    </div>

   </header>
  )
}

export default Header
