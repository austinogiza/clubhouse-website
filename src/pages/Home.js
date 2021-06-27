import React from 'react'
import styled from 'styled-components'
import { clubColor } from '../styles/color'

const Home = () => {
    return (
      <Body className="w-full py-4 px-4 flex flex-col justify-center items-center h-screen  mb-5 2xl:mb-12 xl:mb-12 lg:mb-12 2xl:h-96 lg:h-96 xl:h-96">

       <Section className='max-w-md w-full h-full flex flex-col mx-auto justify-center items-center '>
       <Header className='flex flex-row justify-center items-center'><Hand className='w-10 h-10'><img src="https://res.cloudinary.com/austinogiza/image/upload/v1624761608/icon_wave.2872aeea710c_gxrtcw.png" alt="" /></Hand><h3 className=" font-semibold text-xl my-1 mx-1.5">Clubhouse</h3></Header>
          <Bodytext className='w-full text-center mt-8'>
        <h1 className=' text-gray-700 text-xl text-center'>  Hey, we're still opening up but anyone can join with an invite from an existing user!</h1>
          </Bodytext>
          <Bodytext>
         <h3  className=' text-gray-700  text-sm mt-8 text-center'> Sign up to see if you have friends on Clubhouse who can let you in. We can't wait for you to join!</h3>
          </Bodytext>
          <Bodyrow className="w-full max-w-md mx-auto mt-4">
              <Platforms className='flex flex-row justify-center items-center'>
              <Platformlink  className=' h-12 my-2 mx-1.5' href="#" target="_blank" rel="noopener noreferrer">  <Platformsimg src="https://res.cloudinary.com/austinogiza/image/upload/v1624761434/appstore.6f955d329ad7_qf6nla.svg"/> </Platformlink>
                <Platformlink className=' h-12 my-2 mx-1.5' h href="#" target="_blank" rel="noopener noreferrer"><Platformsimg src="https://res.cloudinary.com/austinogiza/image/upload/v1624761436/googleplay.a1b4ed6211c9_q3mxcd.svg" /> </Platformlink>
          
              </Platforms>
          </Bodyrow>
          
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
const Bodyrow = styled.div``
const Platforms = styled.div``
const Platformlink = styled.a``
const Platformsimg = styled.img``
export default Home
