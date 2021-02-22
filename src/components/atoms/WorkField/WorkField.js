import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    width: 100%;
    padding: 10px 40px;
    font-family: 'Poppins';
    display: grid;
    grid-template-columns: auto 250px;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    font-size: 10px;
    
    @media (max-width: 750px) {
        grid-template-columns: 1fr;
        font-size: 9px;
        padding: 10px 10px;
    }
`
const Image = styled.img`
    max-width: 700px;
    height: 500px;
    margin: 10px;
    object-fit: cover;
    transition: all 0.2s linear;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);

    @media (max-width: 750px) {
        width: 400px;
        height: 350px;
    }
`
const Wrapper = styled.div`
    margin: 0 20px 50px;
    text-align: right;

    @media (max-width: 750px) {
        width: 400px;
    }
`
const Title = styled.p`
    font-weight: 500;
    font-size: 2.8em;
    font-family: 'Poppins';
    text-align: left;
`
const Tech = styled.p`
    max-width: 400px;
    font-size: 1.6em;
    color: #6F6F6F;
    margin: 5px 0px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;

    a {
        font-size: 18px;
        text-decoration: underline;
        width: 100%;
    }
`
const Item = styled.span`
    margin: 5px 10px;
`
const Desc = styled.div`
    font-size: 1.6em;
    text-align: left;
`
const Link = styled.a`
    font-size: 20px;
    text-decoration: none;
    letter-spacing: 0.5px;
    margin-right: 40px;
    color: #6f6f6f;

    &:visited {
        color: #6f6f6f;
    }
    &:hover {
        color: #449EC6;
    }
    
    @media (max-width: 750px) {
        margin-right: 0px;
    }
`

const WorkField = ({ src, title, tech, opacity, link, desc }) => {
    const techArray = tech.split("/");

    return (
        <Wrapper opacity={opacity}>
            <Image src={src} />
            <Info>
                <div>
                    <Title>{title}</Title>
                    <Desc>
                        <p>{desc}</p>
                    </Desc>
                </div>
                <div>
                    <Tech>
                        {techArray.map((tech, index) => <Item key={index}>#{tech}</Item>)}
                    </Tech>
                </div>
            </Info>
            <Link href={link} target="_blank" rel="noopener noreferrer">Zobacz projekt →</Link>
        </Wrapper>
    )
}

export default WorkField;