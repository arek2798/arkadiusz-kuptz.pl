import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const ImageStyled = styled.img`
    box-shadow: 35px 35px 0 #FF7675;
    margin-right: 40px;
    margin-left:10px;
    
    @media (max-width: 1070px) {
      width: 300px;
    }
    
    @media (max-width: 950px) {
      width: 300px;
    }
`

export const query = graphql`
  {
    allDatoCmsAboutMe {
      nodes {
        aboutMeImage {
          fluid(maxWidth: 430, maxHeight: 650) {
            src
            sizes
            srcSet
          }
        }
      }
    }
  }
`

const AboutImg = () => {
  const data = useStaticQuery(query);
  return (
    <ImageStyled src={data.allDatoCmsAboutMe.nodes[0].aboutMeImage.fluid.src} alt="" />
  )
}

export default AboutImg;