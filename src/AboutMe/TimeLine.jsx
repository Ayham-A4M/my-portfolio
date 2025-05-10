import React from 'react'
import TimeLineCard from './TimeLineCard'
import InfoStatment from './InfoStatment'

const TimeLine = () => {
    return (
        <div className="timeline w-[100%] ml-[100px] max-[776px]:ml-[0px]">
            <div className="container-timeline w-[100%] relative after:max-[460px]:left-[5%]">

                <TimeLineCard position={'left'} title={'Information'}>
                    <div className='flex flex-col gap-[10px]'>
                        <InfoStatment title={'Age'} details={'18'} />
                        <InfoStatment title={'Email'} details={'ayham10.aboajeeb@gmail.com'} />
                        <InfoStatment title={'Mobile'} details={'+963 934255004'} />
                    </div>
                </TimeLineCard>

                <TimeLineCard position={'right'} title={'Details'}>
                    <div >
                        <p className='text-[14px] text-slate-700 font-normal'>
                            I'm a front-end developer with a strog passion for creating visualy appending and user-friendly web
                            application.
                            I am vary passionate about improving my coding skills & developing web application
                            <br />
                            <br />
                            I founded with C++ and
                            i have also gained a solid foundation in HTML CSS and java script
                            I am always eager to learn new technology and techniques to improve my skills
                            <br />
                        </p>
                    </div>
                </TimeLineCard>

            </div>
        </div>
    )
}

export default TimeLine