import React from 'react'
import Navbar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx'
const section_1 = (props) => {
  console.log(props.users);
  return (
    <div className=' text-white h-screen w-full   '>
        <Navbar />
        <Page1Content users={props.users} />
    </div>
  )
}

export default section_1