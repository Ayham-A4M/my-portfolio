import React from 'react'
import TitleOfSkillBox from './TitleOfSkillBox'
import BoxOfSkills from './BoxOfSkills'
import reactLogo from '../assets/SkillsLogo/react-svgrepo-com.svg'
import javascript from '../assets/SkillsLogo/javascript-logo-svgrepo-com.svg'
import html from '../assets/SkillsLogo/html5-svgrepo-com.svg'
import typescript from '../assets/SkillsLogo/typescript-svgrepo-com.svg'
import css from '../assets/SkillsLogo/css3-svgrepo-com.svg'
import git from '../assets/SkillsLogo/git-svgrepo-com.svg'
import github from '../assets/SkillsLogo/github-142-svgrepo-com.svg'
import vite from '../assets/SkillsLogo/vite-svgrepo-com.svg'
import vscode from '../assets/SkillsLogo/vscode-svgrepo-com.svg'
import talwind from '../assets/SkillsLogo/tailwind-svgrepo-com.svg'
import vercel from '../assets/SkillsLogo/vercel-svgrepo-com.svg'
import mongo from '../assets/SkillsLogo/mongo-svgrepo-com.svg'
import express from '../assets/SkillsLogo/express.svg'
import nodejs from '../assets/SkillsLogo/nodejs-1-logo-svgrepo-com.svg'
import responsive from '../assets/SkillsLogo/responsive.svg'
import performance from '../assets/SkillsLogo/performance.svg'
import './Skills.css'


const SkillBox = () => {
    return (
        <div className='w-full relative  rounded-[8px] bg-[#1f3b4f] p-[20px] flex flex-col gap-[30px]'>
            <TitleOfSkillBox />
            <div className='flex flex-col gap-[200px]'>
                {/* Note: here containerOfBoxes each one has 2 boxes inside and felxbox  */}
                <div className='containerOfBoxes  w-[80%]  flex gap-3 justify-between max-[900px]:w-full'>

                    <BoxOfSkills title={'Languages'} logos={[javascript, typescript, html, css]} />
                    <BoxOfSkills title={'FrameWorks'} logos={[reactLogo, talwind, express]} />

                </div>

                <div className='containerOfBoxes  w-[80%] flex gap-3 justify-between max-[900px]:w-full'>

                    <BoxOfSkills title={'Tools'} logos={[git, github, vite, vscode, nodejs, mongo, vercel]} />
                    <BoxOfSkills title={'Techniques'} logos={[responsive, performance]} />
                </div>

            </div>
            <img src={vscode} alt="" className='pingpong absolute top-[40%] left-[60%] w-[30px] h-[30px]' />
            <img src={vite} alt="" className='pingpong absolute top-[40%] left-[60%] w-[30px] h-[30px] max-[650px]:hidden' />
            <img src={javascript} alt="" className='pingpong opacity-95  absolute top-[40%] left-[60%] w-[25px] h-[25px]' />
            <img src={reactLogo} alt="" className='pingpong opacity-95  absolute top-[40%] left-[60%] w-[30px] h-[30px]' />
            <img src={css} alt="" className='pingpong opacity-95  absolute top-[40%] left-[60%] w-[30px] h-[30px]' />
            <img src={talwind} alt="" className='pingpong opacity-95  absolute top-[40%] left-[60%] w-[30px] h-[30px]' />
            <img src={nodejs} alt="" className='pingpong opacity-95  absolute top-[40%] left-[60%] w-[30px] h-[30px] max-[650px]:hidden' />
            <img src={git} alt="" className='pingpong opacity-95  absolute top-[40%] left-[60%] w-[30px] h-[30px]' />
            <img src={mongo} alt="" className='pingpong opacity-95  absolute top-[40%] left-[60%] w-[30px] h-[30px] max-[650px]:hidden' />



        </div>
    )
}

export default SkillBox