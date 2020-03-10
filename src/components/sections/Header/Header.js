import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

const StyledHeader = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(${({ bgimage }) => bgimage});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`

const HeaderContent = styled.div`
    width: 440px;
    height: 370px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Author = styled.div`
    color: #ffffff;
    text-align: center;
`

const Name = styled.p`
    font-weight: 500;
    font-size: 55px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2.5px;
    line-height: 50px;
    margin: 0;
`

const Position = styled.p`
    font-weight: 700;
    font-size: 38px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    line-height: 50px;
    margin: 0;
`

const Social = styled.div`
    width: 70px;
    display: flex;
    justify-content: space-between;

    svg {
        cursor: pointer;

        path {
            transition: all ease-in-out .2s;
        }

        &:hover path {
            fill: #FF7675;
        }
    }
`

const jump = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translate(-50%, 0);
    }

    40% {
        transform: translate(-50%, -30px);
    }

    60% {
        transform: translate(-50%, -15px);
    }
`;

const Arrows = styled.div`
    position: absolute;
    width: 20px;
    bottom: 10px;
    left: 50%;
    cursor: pointer;
    animation: ${jump} 2s infinite;
`

const query = graphql`
  {
    header: file(name: {eq: "header_bg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080) {
          src
          srcSet
          sizes
        }
      }
    }
    person: file(name: {eq: "person"}) {
      childImageSharp {
        fixed(height: 176, width: 176) {
          src
          srcSet
        }
      }
    }
  }
`

const Header = () => {
    const data = useStaticQuery(query)
    const { header, person } = data;
    return (
        <StyledHeader bgimage={header.childImageSharp.fluid.src} className="main">
            <HeaderContent >
                <img src={person.childImageSharp.fixed.src} alt="" />
                <Author>
                    <Name>Arkadiusz Kuptz</Name>
                    <Position>Frontend Developer</Position>
                </Author>
                <Social>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.72314 9L9.16752 6.10437H6.38908V4.22531C6.38908 3.43313 6.77721 2.66094 8.02158 2.66094H9.28471V0.195625C9.28471 0.195625 8.13846 0 7.04252 0C4.75439 0 3.25877 1.38688 3.25877 3.8975V6.10437H0.715332V9H3.25877V16H6.38908V9H8.72314Z" fill="white" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.18437 12.4187C5.18437 12.4812 5.1125 12.5312 5.02187 12.5312C4.91875 12.5406 4.84688 12.4906 4.84688 12.4187C4.84688 12.3562 4.91875 12.3062 5.00938 12.3062C5.10313 12.2969 5.18437 12.3469 5.18437 12.4187ZM4.2125 12.2781C4.19063 12.3406 4.25313 12.4125 4.34688 12.4312C4.42813 12.4625 4.52188 12.4312 4.54063 12.3687C4.55938 12.3062 4.5 12.2344 4.40625 12.2063C4.325 12.1844 4.23438 12.2156 4.2125 12.2781ZM5.59375 12.225C5.50312 12.2469 5.44062 12.3063 5.45 12.3781C5.45937 12.4406 5.54063 12.4813 5.63438 12.4594C5.725 12.4375 5.7875 12.3781 5.77812 12.3156C5.76875 12.2563 5.68438 12.2156 5.59375 12.225ZM7.65 0.25C3.31563 0.25 0 3.54063 0 7.875C0 11.3406 2.18125 14.3063 5.29688 15.35C5.69688 15.4219 5.8375 15.175 5.8375 14.9719C5.8375 14.7781 5.82812 13.7094 5.82812 13.0531C5.82812 13.0531 3.64063 13.5219 3.18125 12.1219C3.18125 12.1219 2.825 11.2125 2.3125 10.9781C2.3125 10.9781 1.59687 10.4875 2.3625 10.4969C2.3625 10.4969 3.14062 10.5594 3.56875 11.3031C4.25312 12.5094 5.4 12.1625 5.84688 11.9563C5.91875 11.4563 6.12188 11.1094 6.34688 10.9031C4.6 10.7094 2.8375 10.4562 2.8375 7.45C2.8375 6.59062 3.075 6.15938 3.575 5.60938C3.49375 5.40625 3.22813 4.56875 3.65625 3.4875C4.30937 3.28437 5.8125 4.33125 5.8125 4.33125C6.4375 4.15625 7.10938 4.06563 7.775 4.06563C8.44063 4.06563 9.1125 4.15625 9.7375 4.33125C9.7375 4.33125 11.2406 3.28125 11.8938 3.4875C12.3219 4.57187 12.0563 5.40625 11.975 5.60938C12.475 6.1625 12.7812 6.59375 12.7812 7.45C12.7812 10.4656 10.9406 10.7062 9.19375 10.9031C9.48125 11.15 9.725 11.6187 9.725 12.3531C9.725 13.4062 9.71562 14.7094 9.71562 14.9656C9.71562 15.1687 9.85938 15.4156 10.2563 15.3438C13.3813 14.3062 15.5 11.3406 15.5 7.875C15.5 3.54063 11.9844 0.25 7.65 0.25ZM3.0375 11.0281C2.99687 11.0594 3.00625 11.1313 3.05938 11.1906C3.10938 11.2406 3.18125 11.2625 3.22187 11.2219C3.2625 11.1906 3.25313 11.1187 3.2 11.0594C3.15 11.0094 3.07812 10.9875 3.0375 11.0281ZM2.7 10.775C2.67813 10.8156 2.70937 10.8656 2.77187 10.8969C2.82187 10.9281 2.88438 10.9187 2.90625 10.875C2.92812 10.8344 2.89687 10.7844 2.83437 10.7531C2.77187 10.7344 2.72188 10.7437 2.7 10.775ZM3.7125 11.8875C3.6625 11.9281 3.68125 12.0219 3.75312 12.0813C3.825 12.1531 3.91562 12.1625 3.95625 12.1125C3.99687 12.0719 3.97813 11.9781 3.91563 11.9187C3.84688 11.8469 3.75313 11.8375 3.7125 11.8875ZM3.35625 11.4281C3.30625 11.4594 3.30625 11.5406 3.35625 11.6125C3.40625 11.6844 3.49063 11.7156 3.53125 11.6844C3.58125 11.6437 3.58125 11.5625 3.53125 11.4906C3.4875 11.4188 3.40625 11.3875 3.35625 11.4281Z" fill="white" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.13375 14H0.23125V4.65312H3.13375V14ZM1.68094 3.37812C0.752813 3.37812 0 2.60937 0 1.68124C6.64312e-09 1.23543 0.177098 0.807877 0.492335 0.49264C0.807572 0.177403 1.23513 0.000305176 1.68094 0.000305176C2.12675 0.000305176 2.5543 0.177403 2.86954 0.49264C3.18478 0.807877 3.36188 1.23543 3.36188 1.68124C3.36188 2.60937 2.60875 3.37812 1.68094 3.37812ZM13.9969 14H11.1006V9.44999C11.1006 8.36562 11.0787 6.97499 9.59156 6.97499C8.0825 6.97499 7.85125 8.15312 7.85125 9.37187V14H4.95188V4.65312H7.73562V5.92812H7.77625C8.16375 5.19374 9.11031 4.41874 10.5225 4.41874C13.46 4.41874 14 6.35312 14 8.86562V14H13.9969Z" fill="white" />
                    </svg>
                </Social>
            </HeaderContent>
            <Arrows onClick={() => scrollTo('.about')}>
                <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.93745 13.0187L0.437451 4.51875C-0.150049 3.93125 -0.150049 2.98125 0.437451 2.4L1.84995 0.9875C2.43745 0.4 3.38745 0.4 3.9687 0.9875L9.99369 7.0125L16.0187 0.9875C16.6062 0.4 17.5562 0.4 18.1374 0.9875L19.5624 2.39375C20.1499 2.98125 20.1499 3.93125 19.5624 4.5125L11.0624 13.0125C10.4749 13.6063 9.52495 13.6062 8.93745 13.0187ZM11.0624 25.0187L19.5624 16.5187C20.1499 15.9312 20.1499 14.9812 19.5624 14.4L18.1499 12.9875C17.5624 12.4 16.6124 12.4 16.0312 12.9875L9.99994 19.0063L3.97495 12.9812C3.38745 12.3937 2.43745 12.3937 1.8562 12.9812L0.437451 14.3937C-0.150049 14.9812 -0.150049 15.9313 0.437451 16.5125L8.93745 25.0125C9.52495 25.6063 10.4749 25.6062 11.0624 25.0187Z" fill="white" />
                </svg>
            </Arrows>
        </StyledHeader >
    )
};

export default Header;