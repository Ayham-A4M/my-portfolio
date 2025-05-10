import React from 'react'

const HeaderOfSection = ({ NameOfSection,icon}) => {
    return (
        // <div className=' HeaderOfSection w-fit rounded-sm py-[15px]  px-[60px] relative  bg-[var(--SectionsBlue)]' style={{ transform: `${rotatePosition == 'left' ? 'rotate(-5deg)' : 'rotate(5deg)'}` }} >
        //     <span className='text-[20px] font-medium text-slate-200'>{NameOfSection}</span>
        //     <div className='absolute w-[12px] rounded-full h-[12px] bg-slate-800 border-white border top-[20%] ' style={rotatePosition == 'left' ? { right: '8px' } : { left: '8px' }}>
        //     </div>
        //     <div className='absolute w-[12px] rounded-full h-[12px] bg-slate-800 border-white border top-[60%] ' style={rotatePosition == 'left' ? { right: '8px' } : { left: '8px' }}>
        //     </div>
        // </div>
        <div className='flex justify-start'>
            <h1 className='text-slate-200 text-[30px] font-medium font-sans flex gap-[10px] items-center'>{NameOfSection}<span className='text-[#7CB9E8]'>{icon}</span></h1>
        </div>
    )
}

export default HeaderOfSection