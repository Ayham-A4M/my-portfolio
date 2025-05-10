

const InformationAboutMe = ({title,value}) => {
  return (  
    <div class="flex flex-col min-w-[150px]">
    <span class="text-blue-300 font-semibold">{title}</span>
    <span class="text-slate-100">{value}</span>
</div>
  )
}

export default InformationAboutMe