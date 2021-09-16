import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/yellow.mp4'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src = {Video} type="video/mp4" autoPlay loop muted playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>KUBAJ</HeroH1>
                    <HeroP>Coding</HeroP>
                    <Button primary="true" big="true" round="true" to="/about">View more</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
/* background: pink; */
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 1 rem;
position: relative;
margin-top: -88px;

`
const HeroBg = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;



`
const HeroContent = styled.div`
z-index: 3;
height: calc(100vh - 88px);
max-height: 100%;
padding: calc((100vw - 1300px) / 2);
`
const HeroH1 = styled.div`
font-size: clamp(1.5rem, 6vw, 4rem);
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1 rem;

`
const HeroP = styled.div`
font-size: clamp(1rem, 3vw, 3rem);
margin-bottom: 2rem;

`
const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 100vh;
max-height: 100%;
padding: 0;
color: black;
line-height: 1.1;
font-weight: bold;

// `
// const HeroContainer = styled.div`

// `