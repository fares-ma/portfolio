import { motion } from 'framer-motion';
import React from 'react'

import styled from 'styled-components';
import { Github } from '../components/AllSvgs';



const Box = styled(motion.li)`
width: 18rem;
height: 40vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 2rem;
margin-right: 6rem;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solid ${props => props.theme.body};
box-shadow: 0 4px 15px rgba(0,0,0,0.1);
transition: all 0.3s ease;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
box-shadow: 0 10px 25px rgba(252, 246, 244, 0.4);
transform: translateY(-10px);
}
`
const Title = styled.h2`
font-size: calc(1.2em + 0.5vw);
font-weight: 600;
`

const Description = styled.p`
font-size: calc(0.9em + 0.2vw);
font-family: 'Karla',sans-serif;
font-weight: 400;
line-height: 1.5;
margin-bottom: auto;
margin-top: 1rem;
`
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 1rem;
display:flex;
flex-wrap:wrap;
gap: 0.5rem;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.span`
font-size:calc(0.7em + 0.2vw);
padding: 0.2rem 0.6rem;
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
border-radius: 12px;

${Box}:hover &{
background-color: ${props =>props.theme.text};
color: ${props =>props.theme.body};
}
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1.5rem;
`

const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding: 0.6rem 2rem;
border-radius: 5px;
font-size:calc(1em + 0.5vw);
font-weight: 600;
transition: all 0.3s ease;

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};
    transform: scale(1.05);
}
`

const Git = styled.a`
color: inherit;
text-decoration: none;
transition: all 0.3s ease;

${Box}:hover &{
    transform: scale(1.2);
    &>*{
        fill:${props =>props.theme.text};
    }
}
`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link href={demo} target="_blank">
                    Visit
                </Link>
                <Git  href={github}  target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card
