const Box = ({width,top,left}) => {
    return (
        <div className={`SquareBox ${width} shadow-[--main-blue] shadow-sm aspect-square  rounded-sm bg-transparent border-[2px] border-[--main-blue] absolute z-0 ${top} ${left}`}>
        </div>
    )
}

export default Box