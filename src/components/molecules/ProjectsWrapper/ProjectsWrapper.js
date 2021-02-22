import React from 'react';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { useWindowWidth } from '../../hooks/hooks';
import WorkField from '../../atoms/WorkField/WorkField';

const FieldsWrapper = styled.div`
    padding: 60px 0;
    display: flex;
    justify-content: flex-start;
    transition: transform 0.5s ease-in-out;
    transform: ${({ margin }) => css`translateX(${margin + "px"})`};

    @media (max-width: 1170px) {
        padding: 20px 0;
    }

`

export const query = graphql`
  {
    allDatoCmsPortfolio {
      nodes {
        id
        projectTitle
        technologies
        link
        projectType
        description
        thumb {
            fixed(height: 600, width: 700) {
                src
            }
        }
      }
    }
  }
`

const ProjectsWrapper = ({ activeProject }) => {
  const data = useStaticQuery(query);
  const works = data.allDatoCmsPortfolio.nodes

  const width = useWindowWidth();

  let margin = ((width - 1187) / 2) < 0 ? 0 : (width - 1187) / 2;
  if (width < 750) {
    margin = (width - 440) / 2;
  }

  const translate = margin - (activeProject * (width < 750 ? 440 : 750));

  return (
    <FieldsWrapper margin={translate}>
      {works.map((work, index) => <WorkField key={index} index={index} src={work.thumb.fixed.src} title={work.projectTitle} tech={work.technologies} link={work.link} desc={work.description} />)}
    </FieldsWrapper >
  )
}

export default ProjectsWrapper;