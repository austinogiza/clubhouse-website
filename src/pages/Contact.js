import React, { useEffect } from 'react'
import styled from 'styled-components'
import { clubColor } from '../styles/color'
import {Link } from 'react-router-dom'
const Contact = () => {

    useEffect(()=>{
document.title = 'Contact - Clubhouse'

    }, [])
    return (
      <Body className="w-full py-4 px-4 flex flex-col justify-center items-center h-screen 2xl:h-96 lg:h-96 xl:h-96">
    <Header className='flex flex-row  items-center h-12  border-b border-1 justify-start w-full'>
   <Link  className='flex flex-row  items-center h-12  border-b border-1 justify-start w-full' to='/'><Hand className=' w-8 h-8'><img src="https://res.cloudinary.com/austinogiza/image/upload/v1624761608/icon_wave.2872aeea710c_gxrtcw.png" alt="" /></Hand><h3 className=" font-semibold  text-sm my-1 mx-1.5">Clubhouse</h3></Link></Header>

       <Section className='max-w-md w-full h-full flex flex-col mx-auto justify-center items-center '>
    
          <Bodytext className='flex cursor-pointer  w-72  h-40 flex-col justify-center items-center hover:shadow-lg rounded-md focus:shadow-lg transition pt-10 pb-10 text-center mt-8'>
          <h3 className="text-xl  text-black font-semibold">Support 🔖</h3>
        <h1 className=' text-gray-700  mt-2 text-sm text-center font-light'>  Contact us for questions about the app</h1>
          </Bodytext>
        
        
       </Section>
      </Body>
    )
}


const Body = styled.div`
background: ${clubColor.primary};
`
const Section = styled.div``
const Header = styled.div``

const Bodytext = styled.div``
const Hand = styled.div``

export default Contact
