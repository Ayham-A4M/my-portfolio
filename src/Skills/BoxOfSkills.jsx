

const BoxOfSkills = ({ title, logos, children }) => {
    return (
        <div className='flex flex-col gap-[15px] w-fit'>
            <span className='text-slate-200 font-medium text-[18px]'>{title}</span>
            {children && children}
            <div className='flex gap-[5px] gap-y-2 w-full flex-wrap'>
                {logos.map((picture,i) => (
                    <>
                        <div data-tooltip-id="hh" className='w-[40px] hover:translate-y-[-3px] duration-300 h-[40px] bg-blue-950 rounded-full flex justify-center items-center' style={{ boxShadow: `0 4px 2px -1px #1F75FE ` }}>
                            <img src={picture} className='w-[25px] h-[25px]' />
                        </div>
                       
                    </>
                ))}
            </div>
        </div>)
}

export default BoxOfSkills