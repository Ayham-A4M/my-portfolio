import React from 'react'

const InfoStatment=({title,details})=>{
  return (
    <div><span className='text-blue-800 font-medium title'>{title}:</span> <span className='text-wrap break-words text-[16px] font-normal details'>{details}</span></div>
  )
}

export default InfoStatment