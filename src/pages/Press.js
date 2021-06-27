import React, { useEffect } from 'react'
import styled from 'styled-components'
import { clubColor } from '../styles/color'
import {Link } from 'react-router-dom'
import image from '../assets/clubhouse.png'
const Press = () => {
    
    useEffect(()=>{
        document.title = 'Press - Clubhouse'
        
            }, [])
    return (
      <Body className="w-full py-4 px-4 flex flex-col justify-center items-center h-screen 2xl:h-96 lg:h-96 xl:h-96">
   <Header className='flex flex-row  items-center h-12  border-b border-1 justify-start w-full'>
   <Link  className='flex flex-row  items-center h-12  border-b border-1 justify-start w-full' to='/'><Hand className=' w-8 h-8'><img src="https://res.cloudinary.com/austinogiza/image/upload/v1624761608/icon_wave.2872aeea710c_gxrtcw.png" alt="" /></Hand><h3 className=" font-semibold  text-sm my-1 mx-1.5">Clubhouse</h3></Link></Header>
       <Section className='max-w-md w-full h-full flex flex-col mx-auto justify-center items-center '>
     
          <Bodytext className='w-full text-center mt-8'>
        <h1 className=' text-gray-700  text-base text-center'>For press enquiries, email <br />
    <Platformlink href="#" target="_blank" rel="noopener noreferrer" className=" text-blue-700 ">press@clubhouse.com</Platformlink></h1>
          </Bodytext>
          <Bodytext className=' w-60  mt-6 mb-2 h-20'>
          <Hand className=' w-60 h-20 '><img  className='w-full h-full' src={image} alt="" /></Hand>
          </Bodytext>
          <Bodytext>
         <h3  className=' text-gray-700  text-base mt-8 text-center'> Clubhouse Logo <span className='text-xs   w-6 h-6 pt-1 pb-1 pr-1 pl-1 font-normal mx-1.5 rounded-sm bg-red-600 text-white '>PDF</span>
</h3>
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
const Hand = styled.div``
const Bodytext = styled.div``
const Platformlink = styled.a``
export default Press
