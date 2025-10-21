import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Arrow from './Arrow.jsx'
import Hero_Text from './HeroText.jsx'

const LeftContent = () => {
  return (
    <div className='w-1/3 h-full flex flex-col justify-between text-black '>
      <div className="p-6">
        <h3 className='text-7xl leading-[1.2] mb-7 font-bold '>Prospective<br/><span className='text-gray-600'>Customer </span><br/>segmentation</h3>
        <p className='text-xl  text-gray-700 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
       <div className='text-8xl'>
        <ArrowUpRight size={80} />
        
      </div>
    </div>
  )
}

export default LeftContent