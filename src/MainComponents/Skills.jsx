import React from 'react'
import HeaderOfSection from './HeaderOfSection'
import SkillBox from '../Skills/SkillBox'
import { RxMagicWand } from "react-icons/rx";
const Skills = () => {
    return (
        <div id='skills' className="containerOfSkills w-[100%] px-[10px] pt-[10px]   min-[1100px]:px-[100px] min-h-[100vh] pb-[50px]  flex flex-col md:flex-nowrap flex-wrap gap-[50px]">

            <HeaderOfSection NameOfSection={'My Skills'} icon={<RxMagicWand/>} />

            <SkillBox />

        </div>
    )
}

export default Skills