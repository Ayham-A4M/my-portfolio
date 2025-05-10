import { useState } from "react"


const Link = ({to,Name,linkClick,setLinkClick}) => {
    
  return (
    <a href={`#${to}`} className={`text-[18px] px-5 py-1 hover:bg-[--main-blue] hover:text-slate-200 rounded-full font-light text-slate-200 ${linkClick==Name?'bg-[--main-blue] text-slate-200 font-bold':'bg-transparent'}`} onClick={()=>{setLinkClick(Name)}}>{Name}</a>

  )
}

export default Link