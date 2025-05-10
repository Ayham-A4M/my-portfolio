import HeaderOfSection from "./HeaderOfSection"
import { BiMessageDots } from "react-icons/bi";
const Contact = () => {
    return (
        <div id="contact" className="min-h-screen flex flex-col gap-[50px] items-center justify-center w-[95%]">
             <HeaderOfSection NameOfSection={'Contact with me'} icon={<BiMessageDots/>} />
            <form action="https://formsubmit.co/ayham10.aboajeb@gmail.com"    method="POST" className="flex flex-col gap-[30px] max-w-[1000px] rounded-[6px] w-full p-3 bg-blue-100/10 backdrop-blur-md">
            
                <input type="text" name="Name" placeholder="Name" className="bg-slate-300  py-2 pl-2 outline-none rounded-[8px] border-2 border-[#2467af] w-full" />
                <input type="text" name="Email" placeholder="Email" className="py-2  bg-slate-300 pl-2 outline-none  rounded-[8px] border-2 border-[--main-blue] w-full" />
                <input type="text" name="_honey" className="hidden" />
                <textarea name="_subject" required placeholder="Message..." className="py-1 pl-2 bg-slate-300 outline-none  rounded-[8px] border-2 h-60 border-[--main-blue] w-full"></textarea>
                <div className="flex justify-center items-center">
                    <button type="submit" className="submitButton rounded-full border-2 border-[--main-blue] py-1 px-6 font-normal">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact