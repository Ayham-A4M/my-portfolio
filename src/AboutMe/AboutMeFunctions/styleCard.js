

const Style=' TimeLineCard relative w-[48%]  bg-slate-300 max-[460px]:w-[80%] max-[460px]:left-[10%] max-[460px]:mb-[50px] rounded-[10px] px-[20px] py-[10px]'
const styleCard=(position)=>{



    return position=='left'?('left-0'+Style):('left-[52%]'+Style)
}
export default styleCard