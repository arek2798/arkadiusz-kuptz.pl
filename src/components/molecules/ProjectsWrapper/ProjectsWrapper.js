import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import WorkField from '../../atoms/WorkField/WorkField';

const FieldsWrapper = styled.div`
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 1170px) {
        justify-content: space-around;
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
        thumb {
            fixed(height: 600, width: 700) {
                src
            }
        }
      }
    }
  }
`

const ProjectsWrapper = ({ activeFilter }) => {
  const data = useStaticQuery(query);
  const activeWorks = data.allDatoCmsPortfolio.nodes.filter(work => work.projectType === activeFilter || activeFilter === "wszystko");

  return (
    <FieldsWrapper>
      {activeWorks.map(work => <a href={work.link} target="_blank" rel="noopener noreferrer" key={work.id}><WorkField src={work.thumb.fixed.src} title={work.projectTitle} tech={work.technologies} /></a>)}
    </FieldsWrapper >
  )
}

export default ProjectsWrapper;