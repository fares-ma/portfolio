// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const CVBtnGlobal = styled.a`
position: fixed;
top: 2.2rem;
left: calc(50% + 3rem);
background-color: transparent;
color: ${props => props.theme.text || "#000"};
padding: 0.3rem 1.2rem;
border-radius: 20px;
border: 2px solid ${props => props.theme.text || "#000"};
font-family: 'Karla', sans-serif;
font-weight: 600;
font-size: 0.9em;
text-decoration: none;
z-index: 3;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
    background-color: ${props => props.theme.text || "#000"};
    color: ${props => props.theme.body || "#FCF6F4"};
    transform: scale(1.05);
}

@media (max-width: 48em) {
    display: none;
}
`

const PowerButton = () => {
    return (
        <>
            <Power>
                <NavLink to="/">
                    <PowerBtn width={30} height={30} fill='currentColor' />
                </NavLink>
            </Power>
            <CVBtnGlobal href="/Fares_Mohamed_CV.pdf" download="Fares_Mohamed_CV.pdf" target="_blank">
                Download CV
            </CVBtnGlobal>
        </>
    )
}

export default PowerButton
