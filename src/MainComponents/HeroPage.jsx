
import devGif from '../assets/gif/developer.gif'
import { FaTelegram } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
const HeroPage = () => {

    return (
        <div className="containerOfHome pt-[100px] w-full flex justify-center items-center min-h-screen  md:px-24 px-5 py-10"
            id="home">



            <div className='flex max-[991px]:flex-col items-center p-7 bg-blue-400/10 backdrop:blur-lg rounded-xl'>
                <div class="information relative z-10 w-full text-slate-50  flex flex-col pb-[50px] items-start justify-start  gap-[25px]">

                    <div class="text-5xl w-full  flex items-center font-bold max-[776px]:justify-center max-[776px]:text-center">
                        <h1><span>Hi</span> I am <span class="text-blue-500 font-sans">Ayham</span></h1>
                    </div>

                    <p class="md:text-5xl text-3xl w-full max-[776px]:text-center">
                        <span className='text-green-600 font-semibold'>M.</span>
                        <span className='text-[#9b4b42] font-semibold'>E.</span>
                        <span className='text-blue-500 font-semibold'>R.</span>
                        <span className='text-[#5dc35b] font-semibold'>N </span>
                        Stack Developer
                    </p>
                    <div className='flex w-full gap-[18px] items-center text-3xl max-[776px]:justify-center'>
                        <SiMongodb className='icon1 text-green-600' />
                        <SiExpress className='icon2 text-[#9b4b42]' />
                        <FaReact className='icon3 text-blue-500 ' />
                        <IoLogoNodejs className='icon4 text-[#5dc35b]' />
                    </div>



                    <div className='w-full'>
                        <div className='flex gap-[25px] w-full items-center text-[20px] max-[776px]:justify-center '>
                            <a href="https://t.me/Ayham_Abo_Ajeeb" target='_blank'>
                                <FaTelegram className='hover:text-blue-500 duration-200 hover:translate-y-[-2px]' />
                            </a>

                            <a href="https://github.com/Ayham-A4M" target='_blank'>
                                <FaGithub className='duration-200 hover:text-stone-500 hover:translate-y-[-2px]' />
                            </a>
                            <a href="https://sy.linkedin.com/in/ayham-abo-ajeeb-5b1788339" target='_blank'>
                                <FaLinkedin className='duration-200 hover:text-blue-600 hover:translate-y-[-2px]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="image relative z-10 flex justify-center items-center pb-[20px]  md:pb-[50px] md:w-auto w-[100%]">
                    <img src={devGif} class="w-[80%] max-w-[550px] aspect-square rounded-md" />
                </div>
            </div>









        </div>
    )
}

export default HeroPage