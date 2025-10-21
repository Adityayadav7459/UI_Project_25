import React from 'react'
import Section_1 from './components/section_1/section_1.jsx'
import Section_2 from './components/section_2/section_2.jsx'
const App = () => {

  const users = [
    {
      img:'https://media.istockphoto.com/id/1552881556/photo/tablet-designer-and-serious-woman-research-in-business-startup-office-at-night-on-deadline.jpg?s=1024x1024&w=is&k=20&c=MCaIMSopkBzpNIGlisIEcgTQrYkVTedkXmVCrlUZ5kY=',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag:'satisfied',
      color:"darkgreen"
    },
    {
      img:'https://media.istockphoto.com/id/2042526830/photo/successful-businesswoman-using-laptop-working-in-office-business-technology-corporate-concept.jpg?s=1024x1024&w=is&k=20&c=J0E4zF6xZCAaqSbSC3oK76pogD3XekWpW0Rl4OJUonE=',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag:'Underserved',
       color:"olive"
    },
    {
      img:'https://media.istockphoto.com/id/1424988699/photo/businessman-contemplating-in-the-office-looking-through-the-window.jpg?s=1024x1024&w=is&k=20&c=CRSn821TE4cwvNRCMJc-IpRx85sXlDJY-H0uV3vaQEw=',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag:'Underbanked',
       color:"darkblue"
    },
    {
      img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag:'satisfied',
       color:"silver"
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661750077330-617653eea55e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag:'satisfied',
       color:"brown"
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661549839875-27c32b2fa2ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag:'satisfied',
       color:"maroon"
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661638162972-00ee1c6822d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag:'satisfied',
       color:"green"
    },
    {
      img:'https://images.unsplash.com/photo-1507831228884-93d43e81a99d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=985',
      intro:'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag:'satisfied',
       color:"black"
    }
  ]
  return (
    <div>
      <Section_1 users={users} />
      <Section_2  />
    </div>
  )
}

export default App