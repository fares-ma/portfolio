import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(0.5rem + 0.9vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 11.5rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const CVButton = styled.a`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: calc(0.6rem + 0.5vw);
  font-family: 'Karla', sans-serif;
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: bold;
  
  &:hover {
    transform: scale(1.1);
    color: ${props => props.theme.text};
    background-color: transparent;
    border: 1px solid ${props => props.theme.text};
  }
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        <div>
        I'm a passionate <strong>Backend .NET Developer</strong> based in Cairo, Egypt. I specialize in building highly scalable, production-ready RESTful APIs and robust server-side architectures.
        <br /> <br/>
        My technical stack revolves around <strong>.NET Core, Clean Architecture, CQRS, and EF Core</strong>. I thrive on optimizing database performance, implementing caching layers with Redis, and writing reliable, test-driven code using xUnit.
        <br/> <br/>
        I believe that software engineering is a true craft driven by <strong>SOLID principles</strong>. I constantly strive to transform complex business requirements into organized, maintainable systems.
        </div>
        <CVButton href="/Fares_Mohamed_CV.pdf" download="Fares_Mohamed_CV.pdf" target="_blank">
            Download CV
        </CVButton>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
