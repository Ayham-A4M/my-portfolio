

const Footer = () => {
  return (
    <div className="w-full relative overflow-hidden h-[300px]">
        <div className="footerTriangle w-56 aspect-square bg-[--main-blue] absolute bottom-[-50%] left-[50%] rotate-45 translate-x-[-50%] "></div>
        <div className="footerTriangle w-48 aspect-square bg-[--main-blue] absolute bottom-[-50%] left-[50%] rotate-45  "></div>
        <div className="footerTriangle w-48 aspect-square bg-[--main-blue] absolute bottom-[-50%] left-[50%] translate-x-[-200px] rotate-45  "></div>
    </div>
  )
}

export default Footer