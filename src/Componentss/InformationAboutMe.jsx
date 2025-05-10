

const InformationAboutMe = ({ title, value }) => {
  return (
    <div className="flex flex-col min-w-[150px]">
      <span className="text-blue-300 font-semibold">{title}</span>
      <span className="text-slate-100">{value}</span>
    </div>
  )
}

export default InformationAboutMe