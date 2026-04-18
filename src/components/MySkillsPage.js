import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul{
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin-left: 0;
    margin-top: 0.5rem;
}
li{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
}
${Main}:hover li {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
}
p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Backend Developer
</Title>
<Description>
Building scalable APIs with Clean Architecture, CQRS, and N-Tier patterns.
</Description>
<Description>
<strong>Core Skills</strong>
<ul>
    <li>C#</li>
    <li>ASP.NET Core Web API / MVC</li>
    <li>Entity Framework Core</li>
    <li>LINQ</li>
    <li>SOLID</li>
    <li>Repository</li>
    <li>Unit of Work</li>
</ul>
</Description>
<Description>
<strong>Auth & Security</strong>
<ul>
    <li>ASP.NET Identity</li>
    <li>JWT</li>
    <li>RBAC</li>
    <li>OAuth2</li>
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Databases & DevOps
</Title>
<Description>
Ensuring data reliability, caching, and efficient deployment for environments.
</Description>
<Description>
<strong>Databases & Cloud</strong>
<ul>
    <li>SQL Server</li>
    <li>Redis</li>
    <li>Elasticsearch</li>
    <li>AWS S3</li>
</ul>
</Description>
<Description>
<strong>Testing & DevOps</strong>
<ul>
    <li>Docker</li>
    <li>Git</li>
    <li>xUnit</li>
    <li>Moq</li>
    <li>FluentAssertions</li>
    <li>Postman</li>
    <li>Swagger UI</li>
</ul>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
