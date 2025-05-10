import styleCard from './AboutMeFunctions/styleCard'
import './AboutMe.css'

const TimeLineCard = ({ position, children, title }) => {
    return (
        <div className={
            styleCard(position)
        }>
            <div><h1 className='text-[18px] font-semibold text-slate-700'>{title}</h1></div>
            {children}
        </div>
    )
}

export default TimeLineCard