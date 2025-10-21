import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
     <div className=" p-6 mb-4 flex flex-col justify-between gap-40 rounded-4xl shadow-lg">
       <h2 className='text-black bg-amber-50 text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center self-start'>{props.id + 1}</h2>
       
            <p className=' font-bold text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, et expedita exercitationem nihil eligendi dolorum est velit in veniam, incidunt saepe, voluptates nemo ratione! Ducimus quo laboriosam error sequi itaque?</p>
            <div className='flex justify-between'><button style={{ backgroundColor: props.color }} className='text-white  font-medium rounded-full px-5 hover:scale-105 hover:py-5 hover:cursor-pointer'>{props.tag}</button>
            <button ><div className=' text-white flex font-medium rounded-full px-3 py-3 hover:cursor-pointer items-center'>
        <ArrowRight  size={20} />
        
      </div></button>
            
            
            </div>
        </div>
  )
}

export default RightCardContent