import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectsWrapper from '../../molecules/ProjectsWrapper/ProjectsWrapper';
import { useEffect } from 'react';

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 80px 0;
    text-align: center;
    overflow: hidden;

    @media (max-width: 750px) {
        padding-bottom: 40px;
    }
`
const SectionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    max-width: 1170px;
    margin: auto;

    h3 {
        font-family: 'Poppins';
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.7px;
        color: #449EC6;
        margin-bottom: 20px;
    }

    @media (max-width: 1170px) {
        padding: 0px 30px;
    }
    @media (max-width: 530px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`
const Arrows = styled.div`
    display: grid;
    grid-template-columns: 40px 40px;
    grid-column-gap: 40px;
    align-items: center;
    justify-items: center;
    margin-bottom: 20px;
`
const Arrow = styled.button`
    background: transparent;
    border: none;
    outline: none;
    padding: 10px;
    border-bottom: ${({ active }) => active ? "2px solid #449EC6" : "none"};
    cursor: pointer;

    svg > path {
        fill: ${({ active }) => active ? "#449EC6" : "#cdcdcd"};
    }
`

export const query = graphql`
  {
    allDatoCmsPortfolio {
      nodes {
        id
      }
    }
  }
`

const Portfolio = () => {
    const [activeProject, setActiveProject] = useState(1);
    const [projectsNum, setProjectsNum] = useState(0);

    const data = useStaticQuery(query);

    useEffect(() => {
        setProjectsNum(data.allDatoCmsPortfolio.nodes.length);
    }, [data]);

    const handleActiveProject = (right) => {
        if (right && activeProject < projectsNum - 1) {
            setActiveProject(activeProject + 1)
        } else if (!right && activeProject > 0) {
            setActiveProject(activeProject - 1)
        }
    }

    return (
        <Wrapper className="portfolio">
            <SectionHeader>
                <h3>Wykonane projekty</h3>
                <Arrows>
                    <Arrow active={activeProject !== 0} onClick={() => handleActiveProject(false)}>
                        <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8966 0L0 15.0184L0.620689 15.6441L1.27782 16.2699L14.8966 30L16.6521 28.2301L4.78898 16.2699H36V13.7301H4.78898L16.6521 1.76993L14.8966 0Z" fill="black" />
                        </svg>
                    </Arrow>
                    <Arrow active={activeProject < projectsNum - 1} onClick={() => handleActiveProject(true)}>
                        <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.1034 0L36 15.0184L35.3793 15.6441L34.7222 16.2699L21.1034 30L19.3479 28.2301L31.211 16.2699H0V13.7301H31.211L19.3479 1.76993L21.1034 0Z" fill="black" />
                        </svg>
                    </Arrow>
                </Arrows>
            </SectionHeader>
            <ProjectsWrapper activeProject={activeProject} />
        </Wrapper >
    )
}

export default Portfolio;