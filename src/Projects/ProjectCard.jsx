import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { IoRadio } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";




const ProjectCard = ({ information }) => {
    return (
        <div className='projectCard duration-300 p-[3px] w-full grid max-[900px]:grid-cols-1 gap-4 grid-cols-2'>

            {information.left ?
                <>

                    <Carousel className="flex items-center">
                        <CarouselContent className='w-fit rounded-[8px]'>
                            {information.ProjectPictures && information.ProjectPictures.map((picture) => (
                                <CarouselItem>
                                    <div className='w-fit rounded-[8px]'>
                                        <img src={picture} loading='lazy' className='w-full aspect-[16/8]  rounded-[6px]' />
                                    </div>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <CarouselPrevious className='absolute left-[10px] w-[25px] h-[25px] border-[--main-blue] border-[2px] duration-300 hover:bg-slate-800 hover:text-slate-100' />
                        <CarouselNext className='absolute right-[10px] w-[25px] h-[25px] border-[--main-blue] border-[2px] duration-300 hover:bg-slate-800 hover:text-slate-100' />
                    </Carousel>



                    <div className='bg-gray-300/15  rounded-[8px] describeProject flex relative overflow-hidden flex-col gap-[15px] px-[10px] py-[20px]'>


                        <h1 className={`${information.TitleColor} font-bold font-sans text-4xl`}>{information.NameOfProject}</h1>
                        <div className='w-fit rounded-[6px] p-3 bg-slate-400/20 text-slate-200  font-semibold text-[18px]'>
                            <h1>{information.ProjectType}</h1>
                            <div className='flex gap-2'>
                                {
                                    information.Technologies &&
                                    information.Technologies.map((element, i) => (
                                        <span className='' key={i}>{element}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <p className='text-[20px] font-light text-slate-200'>{information.Description}</p>
                        <div className='flex pl-1 flex-col gap-[15px] text-slate-200'>
                            {
                                information.Features &&
                                information.Features.map((element, i) => (
                                    <div className='flex gap-3 items-baseline text-[20px]'>
                                        <span className='text-blue-500 text-[20px]'>&#x2022;</span>
                                        <span className='font-light'>
                                            {element}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='w-full flex gap-3 items-center'>
                            <a href={information.live} target='_blank' className='duration-300 text-[13px] hover:bg-violet-600 hover:text-slate-100 gap-1 border-[2px] rounded-[4px] font-semibold text-violet-600 border-violet-600 flex items-center px-[15px] py-1'>
                                Live
                                <IoRadio />
                            </a>
                            <a href={information.repo} target='_blank' className='duration-300 text-[13px] hover:bg-slate-300 hover:text-slate-800 text-slate-300 gap-1 border-[2px] rounded-[4px] font-semibold  flex items-center px-[15px] py-1'>
                                github
                                <FaGithubSquare />
                            </a>
                        </div>

                    </div>
                </>


                :


                <>
                    <div className='bg-gray-300/15  rounded-[8px] describeProject flex relative overflow-hidden flex-col gap-[15px] px-[10px] py-[20px]'>


                        <h1 className={`${information.TitleColor} font-bold font-sans text-4xl`}>{information.NameOfProject}</h1>
                        <div className='w-fit rounded-[6px] p-3 bg-slate-400/20 text-slate-200  font-semibold text-[18px]'>
                            <h1>{information.ProjectType}</h1>
                            <div className='flex gap-2'>
                                {
                                    information.Technologies &&
                                    information.Technologies.map((element, i) => (
                                        <span className='' key={i}>{element}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <p className='text-[20px] font-light text-slate-200'>{information.Description}</p>
                        <div className='flex pl-1 flex-col gap-[15px] text-slate-200'>
                            {
                                information.Features &&
                                information.Features.map((element, i) => (
                                    <div className='flex gap-3 items-baseline text-[20px]'>
                                        <span className='text-blue-500 text-[20px]'>&#x2022;</span>
                                        <span className='font-light'>
                                            {element}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='w-full flex gap-3 items-center'>
                              <a href={information.live} target='_blank' className='duration-300 text-[13px] hover:bg-violet-600 hover:text-slate-100 gap-1 border-[2px] rounded-[4px] font-semibold text-violet-600 border-violet-600 flex items-center px-[15px] py-1'>
                                Live
                                <IoRadio />
                            </a>
                            <a href={information.repo} target='_blank' className='duration-300 text-[13px] hover:bg-slate-300 hover:text-slate-800 text-slate-300 gap-1 border-[2px] rounded-[4px] font-semibold  flex items-center px-[15px] py-1'>
                                github
                                <FaGithubSquare />
                            </a>
                        </div>

                    </div>
                    <Carousel className="flex items-center">
                        <CarouselContent className='w-fit rounded-[8px]'>
                            {information.ProjectPictures && information.ProjectPictures.map((picture) => (
                                <CarouselItem>
                                    <div className='w-fit rounded-[8px]'>
                                        <img src={picture} loading='lazy' className='w-full aspect-[16/8]  rounded-[6px]' />
                                    </div>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <CarouselPrevious className='absolute left-[10px] w-[25px] h-[25px] border-[--main-blue] border-[2px] duration-300 hover:bg-slate-800 hover:text-slate-100' />
                        <CarouselNext className='absolute right-[10px] w-[25px] h-[25px] border-[--main-blue] border-[2px] duration-300 hover:bg-slate-800 hover:text-slate-100' />
                    </Carousel>




                </>








            }




        </div>
    )
}

export default ProjectCard