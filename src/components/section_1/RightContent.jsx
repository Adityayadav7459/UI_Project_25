import React from 'react'
import RightCard from './RightCard.jsx'


const RightContent = (props) => {
  return (
    <div id='right' className='w-2/3 h-full  p-5 rounded-4xl flex flex-nowrap gap-6 overflow-x-auto'>

      {props.users.map(function(elem,idx){
        return <RightCard img={elem.img} intro={elem.intro} tag={elem.tag} key={idx} id={idx} color={elem.color}/>
      })}

    </div>)
}

export default RightContent