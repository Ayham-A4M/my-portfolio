import React from 'react'
import HeaderOfSection from './HeaderOfSection'
import { LiaLaptopCodeSolid } from "react-icons/lia";
import ProjectCard from '../Projects/ProjectCard';
import Project1Pictures from '../Projects/ProjectFunctions/Project1Pictures';
import Project2Pictures from '../Projects/ProjectFunctions/Project2Pictures';
import Project3Pictures from '../Projects/ProjectFunctions/Project3Pictures';


const Projects = () => {

    const Projects = [
        {
            NameOfProject: 'ApexSport',
            Description: "ApexSport is an sport ecommerce website where admin can make CURD operation on the products, and users can shop from them.Built using the MERN stack.I developed the Frontend using ReactJS and Tailwind CSS, and implemented the backend using ExpressJS and Mongodb for the database.with a focus on implementing solid principles to ensure a structured and organized codebase.Key features of the app include:",
            Features: [
                'JWT access and refresh token handling for secure authentication.',
                'Implemented responsive design principles to ensure optimal user experience across different devices.',        
                'Role management to control user permissions.',
                'Integration with Stripe payment gateway for secure online transactions.'
            ],
            ProjectType: 'FullStack',
            Technologies: ['ReactJS', 'Talwind CSS', 'MongoDb', 'ExpressJs'],
            ProjectPictures: Project3Pictures(),
            TitleColor: 'text-blue-600',
            left: true,
            repo:'https://github.com/Ayham-A4M/ApexSport-Back-End',
            live:'https://apex-sport.vercel.app/',
        },
        {
            NameOfProject: 'InfoTech',
            Description: 'InfoTech is a responsive and visually appealing landing page for a digital marketing agency.I developed it using React.js and used AOS for the animations. Key features of the app include:',
            Features: ['Implemented responsive design principles to ensure optimal user experience across different devices.', 'Beautiful scroll and fade-in animations using AOS library'],
            ProjectType: 'Frontend',
            Technologies: ['ReactJS', 'Talwind CSS'],
            ProjectPictures: Project1Pictures(),
            TitleColor: 'text-violet-500',
            left: false, // true ? mean photos left and information right
            live:'https://ayham-a4m.github.io/Info-Tech',
            repo:'https://github.com/Ayham-A4M/Info-Tech',
        },
        {
            NameOfProject: 'Seven',
            Description: 'Seven is a responsive and visually appealing landing page for a digital marketing agency.I developed it using html css js and used AOS for the animations. Key features of the app include:',
            Features: ['Implemented responsive design principles to ensure optimal user experience across different devices.', 'Beautiful scroll and fade-in animations using AOS library'],
            ProjectType: 'Frontend',
            Technologies: ['HTML', 'CSS', 'JavaScript'],
            ProjectPictures: Project2Pictures(),
            TitleColor: 'text-red-500',
            left: true,
            live:'https://ayham-a4m.github.io/Seven/',
            repo:'https://github.com/Ayham-A4M/Seven'
        }


    ]

    return (


        <div id='projects' className="containerOfProjects  w-[100%] px-[10px] pt-[10px]   min-[1100px]:px-[100px] min-h-[100vh] pb-[50px]  flex flex-col md:flex-nowrap flex-wrap gap-[50px]">
            <HeaderOfSection NameOfSection={'Projects'} icon={<LiaLaptopCodeSolid />} />
            <div className='flex flex-col gap-y-[50px]'>
                {
                    Projects.map((singleProject) => (
                        <ProjectCard information={singleProject} />
                    ))
                }
                {/* <ProjectCard NameOfProject={'Seven'} ProjectType={'Frontend'} Technologies={['HTML', 'CSS', 'Java Script']} ProjectPictures={Project2Pictures()} TitleColor={'text-red-500'} /> */}
            </div>

        </div>
    )
}

export default Projects