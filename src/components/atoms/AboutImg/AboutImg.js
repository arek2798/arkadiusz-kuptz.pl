import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const ImageStyled = styled.img`
    box-shadow: 35px 35px 0 #FF7675;
`

export const query = graphql`
  {
    file(name: {eq: "about_img"}) {
      childImageSharp {
        fluid(maxHeight: 650, maxWidth: 430) {
          src
          srcSet
          sizes
        }
      }
    }
  }
`

const AboutImg = () => {
    const data = useStaticQuery(query);
    return (
        <ImageStyled src={data.file.childImageSharp.fluid.src} alt="" />
    )
}

export default AboutImg;