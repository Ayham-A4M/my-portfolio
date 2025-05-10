
import HeaderOfSection from './HeaderOfSection'
import pic from '../assets/gif/developer2.gif'

import InformationAboutMe from '../Componentss/informationAboutMe'
import { FaFeatherAlt } from "react-icons/fa";
const information = [
    { title: 'Email :', value: 'ayham10.aboajeb@gmail.com' },
    { title: 'Employment :', value: 'open' },
    { title: 'Name :', value: 'Ayham Abo Ajeeb' },
    { title: 'Education :', value: 'IT graduated-2028' }

]
const AboutMe = () => {

    return (
      
        <div id='about' className="containerOfAboutme min-h-screen w-full py-3 md:px-24 px-5   flex flex-col justify-center gap-[75px]">
            <HeaderOfSection NameOfSection={'About Me'} icon={<FaFeatherAlt />} />
            <div class="flex w-full justify-around items-center flex-row gap-5 max-md:flex-col-reverse max-[776px]:flex-wrap gap-y-14  ">

                <img
                    src={pic}
                    alt="Profile Picture"
                    class="rounded w-64 max-w-[300px] hover:scale-110 hover:-translate-y-8 hover:translate-x-6 transition-all duration-500 ease-in-out"
                />


                <div class="relative z-30 bg-blue-400/20 backdrop-blur-sm flex flex-col gap-5 w-full rounded-sm max-w-[670px] p-9 shadow-sm shadow-blue-400">

                    <p class="text-slate-200 font-medium text-xl w-full leading-relaxed">
                        Hi, I'm Ayham Abo Ajeeb, a passionate and dedicated
                        full stack web developer with a strong desire to create beautiful
                        and user-friendly online experiences. Though my professional experience may be limited,
                        I am excited to contribute to a company that values growth and innovation, as it will allow me to further
                        refine my abilities and expand my skill set.
                    </p>


                    <div class="flex flex-wrap justify-between gap-4">

                        {

                            information.map((element) => (
                                <InformationAboutMe title={element.title} value={element.value} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AboutMe