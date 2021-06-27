import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { clubColor } from '../styles/color'
import {Link } from 'react-router-dom'
const Blog = () => {
    const [load, setLoad]= useState(true)

    useEffect(()=>{
document.title = 'Blog - Clubhouse'
setLoad(true)
    }, [])
    return (
      <Body className="w-full py-4 px-4 flex flex-col justify-center items-center h-full">
       <Header className='flex flex-row  items-center  h-12  border-b border-1 justify-start w-full'>
   <Link  className='flex flex-row  items-center  h-12  border-b border-1 justify-start w-full' to='/'><Hand className=' w-8 h-8'><img src="https://res.cloudinary.com/austinogiza/image/upload/v1624761608/icon_wave.2872aeea710c_gxrtcw.png" alt="" /></Hand><h3 className=" font-semibold  text-sm my-1 mx-1.5">Clubhouse</h3></Link></Header>

       <Section className='max-w-2xl w-full h-full flex flex-col mx-auto justify-center items-center '>
    
      {load && [1,2,3,4,5,6,7,8].map(data=>
        <Bodytext className='flex cursor-pointer  max-w-2xl w-full  h-40 flex-col  items-start hover:shadow-lg rounded-md focus:shadow-lg transition text-left  pt-4 pr-10 pl-10    pb-4 mt-8'>
          <p>June 24, 2021</p>
          <h3 className="text-xl  text-black font-semibold mt-2">Creator First: Brazil</h3>
        <h1 className=' text-gray-700   mt-2 text-sm text-left font-light '>  Contact us for questions about the app</h1>
        <p className='text-left mt-2'>Today, we are proud to continue on our international expansion with the announcement of Creator First Brazil!</p>
          </Bodytext>
      )}
        
        
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

export default Blog
