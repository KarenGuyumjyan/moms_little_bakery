const IconText = ({ textData }) => {
  return (
    <div className=' text-sm flex gap-1 flex-col'>
        {textData.icon}
        <p>textData.title</p>
    </div>
  )
}

export default IconText
