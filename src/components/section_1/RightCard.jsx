import React from 'react'
import RightCardContent from './RightCardContent.jsx'


const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden rounded-4xl p-4 relative'>
      {/* background image placed absolutely so content can sit on top */}
      <img
        className='absolute inset-0 h-full w-full object-cover rounded-4xl z-0'
        src={props.img}
        alt=""
      />

      {/* subtle dark overlay for better contrast */}
      <div className='absolute inset-0 rounded-4xl bg-black/30 z-5 pointer-events-none' />

      {/* content should be above the image */}
      <div className='relative z-10'>
        <RightCardContent tag={props.tag} intro={props.intro} id={props.id} color={props.color}/>
      </div>
    </div>
  )
}

export default RightCard