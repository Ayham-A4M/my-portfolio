import { CiMenuFries } from "react-icons/ci";
import handleClickMenu from "../Nav/NavFunctions/handleClickMenu";
import Link from "../Nav/Link";
import { useState } from "react";


const Nav = ({clickMenu,setClickMenu}) => {
    const [linkClick,setLinkClick]=useState(false);
    return (
        <div
            className="header-nav    duration-300  z-50 w-full   flex justify-between items-center md:px-[60px] px-[25px] py-[10px] text-slate-50 fixed  min-h-[70px]">
            <div>
                <span className="text-blue-400  font-bold font-sans text-xl"> &lt; Ayham /&gt;</span>
            </div>
            <div className="links-container  max-[768px]:hidden flex basis-1/2 justify-end text-[14px] items-center gap-[20px]">
                <Link to={'home'} Name={'Home'} linkClick={linkClick} setLinkClick={setLinkClick}/>
                <Link to={'about'} Name={'About'} linkClick={linkClick} setLinkClick={setLinkClick}/>
                <Link to={'skills'} Name={'Skills'} linkClick={linkClick} setLinkClick={setLinkClick}/>
                <Link to={'projects'} Name={'Projects'} linkClick={linkClick} setLinkClick={setLinkClick}/>
                <Link to={'contact'} Name={'Contact'} linkClick={linkClick} setLinkClick={setLinkClick}/>
            </div>
            <div className="menu w-fit hidden max-[768px]:block">
               
                <CiMenuFries className="text-slate-200 text-[35px] cursor-pointer" onClick={()=>{ handleClickMenu(clickMenu,setClickMenu);
                }} /> 
            </div>
        </div>
    )
}
 

export default Nav