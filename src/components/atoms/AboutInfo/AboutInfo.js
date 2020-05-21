import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Button from '../Button/Button';

const Wrapper = styled.div`
    width: 600px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    
    @media (max-width: 600px) {
        width: 100%;
    }
`
const Title = styled.h2`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 2.5px;
    color: #449EC6;
    margin-bottom: 30px;

    @media (max-width: 370px) {
        font-size: 42px;
    }
`
const FirstParagraph = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
    line-height: 30px;
    text-align: justify;
`
const SecondParagraph = styled.p`
    font-size: 16px;
    color: #6F6F6F;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 20px;
`

export const query = graphql`
  {
    allDatoCmsAboutMe {
      nodes {
        firstParagraph
        secondParagraph
      }
    }
  }
`

const AboutInfo = () => {
    const data = useStaticQuery(query);

    return (
        <Wrapper>
            <div>
                <Title>Kim jestem ?</Title>
                <FirstParagraph>{data.allDatoCmsAboutMe.nodes[0].firstParagraph}</FirstParagraph>
                <SecondParagraph>{data.allDatoCmsAboutMe.nodes[0].secondParagraph}</SecondParagraph>
            </div>
            <Button>Pobierz CV</Button>
        </Wrapper>
    )
}
export default AboutInfo;