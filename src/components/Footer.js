import React from 'react'
import styled from 'styled-components'
import { clubColor } from '../styles/color'
import {Link } from 'react-router-dom'
const Footer = () => {


    return (
      <Body className="w-full py-4 max-w-sm mx-auto text-center px-4 mb-4 flex flex-col justify-center items-center h-10">
   
<Section className='container text0-center'>
        <Header className='flex flex-row flex-wrap text-center items-center justify-center'>
       <Bodytext className='items-start justify-start flex flex-row w-auto  h-auto text-blue-500 text-sm my-2 mx-1.5 text-center '>
       <Platforms to='/' className=' w-1 h-1 mr-1 mb-1 rounded-full  text-orange-400 '>.</Platforms> Home</Bodytext>

<Bodytext className='items-start justify-start flex flex-row w-auto h-auto text-blue-500 text-sm my-2 mx-1.5  text-center' > <Platforms className=' w-1 h-1 mr-1 mb-1 rounded-full  text-orange-400 '>.</Platforms> Jobs</Bodytext>
<Bodytext to='/blog' className='items-start justify-start flex flex-row w-auto h-auto text-blue-500 text-sm my-2 mx-1.5 text-center ' > <Platforms className=' w-1 h-1 mr-1 mb-1 rounded-full  text-orange-400 '>.</Platforms>Blog</Bodytext>

<Bodytext to='/contact' className='items-start justify-start flex flex-row w-auto h-auto text-blue-500 text-sm my-2 mx-1.5  text-center' > <Platforms className=' w-1 h-1 mr-1 mb-1 rounded-full  text-orange-400 '>.</Platforms>Contact</Bodytext>
<Bodytext to='/press' className='items-start justify-start flex flex-row w-auto h-auto text-blue-500 text-sm my-2 mx-1.5  text-center' > <Platforms className=' w-1 h-1 mr-1 mb-1 rounded-full  text-orange-400 '>.</Platforms>Guidelines
Press</Bodytext>

<Bodytext className='items-start justify-start flex flex-row w-auto h-auto text-blue-500 text-sm my-2 mx-1.5  text-center' > <Platforms className=' w-1 h-1 mr-1 mb-1 rounded-full  text-orange-400 '>.</Platforms>Privacy</Bodytext>
<Bodytext className='items-start justify-start flex flex-row w-auto h-auto text-blue-500 text-sm my-2 mx-1.5  text-center' > <Platforms className=' w-1 h-1 mr-1 mb-1 rounded-full  text-orange-400 '>.</Platforms>Terms</Bodytext>

        </Header>
        
       </Section>
      </Body>
    )
}


const Body = styled.div`
background: ${clubColor.primary};
`
const Section = styled.div``
const Header = styled.ul``

const Bodytext = styled(Link)``
const Platforms = styled.span``

export default Footer
