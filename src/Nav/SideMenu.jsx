import { MdHome } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { IoIosGitNetwork } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
function SideMenu({ clickMenu ,setClickMenu }) {
    return (
        <>
            {
                <div className=" sideMenu max-w-[60px] px-[15px] text-[20px] rounded-b-[15px] text-slate-200 top-[-150%] flex flex-col gap-[25px] justify-center py-[30px] fixed duration-300  right-[16px] z-40" style={{top:`${clickMenu?'71px':'-150%'}`}}>
                        <a href="#home" onClick={()=>{setClickMenu(false)}}><MdHome className="hover:text-slate-200 duration-300 cursor-pointer "/></a>
                        <a href="#about" onClick={()=>{setClickMenu(false)}}><IoIosInformationCircle className="hover:text-slate-200 duration-300 cursor-pointer "/></a>
                        <a href="#skills" onClick={()=>{setClickMenu(false)}}><IoIosGitNetwork className="hover:text-slate-200 duration-300 cursor-pointer "/></a>
                        <a href="#projects" onClick={()=>{setClickMenu(false)}}><FaCode className="hover:text-slate-200 duration-300 cursor-pointer "/></a>
                        <a href="#contact" onClick={()=>{setClickMenu(false)}}><FaTelegramPlane className="hover:text-slate-200 duration-300 cursor-pointer "/></a>
                </div>
            }
        </>
    )
}

export default SideMenu