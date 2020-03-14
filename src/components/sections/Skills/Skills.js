import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import SkillBox from '../../atoms/SkillBox/SkillBox';

const Wrapper = styled.div`
    padding: 80px 0%;
    background: #F3F3F3;
`
const SkillsWrapper = styled.div`
    max-width: 1170px;
    margin: auto;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1170px) {
        justify-content: space-around;
    }
`

export const query = graphql`
  {
    allDatoCmsSkill {
        nodes {
          id
          skillName
          skillDescription
          icon {
            url
          }
        }
      }
  }
`

const Skills = () => {
    const data = useStaticQuery(query);
    return (
        <Wrapper className="skills">
            <SectionHeader title="Umiejętności" subtitle="UŻYWANE TECHNOLOGIE" />
            <SkillsWrapper>
                {data.allDatoCmsSkill.nodes.map(skill => (
                    <SkillBox
                        key={skill.id}
                        svg={skill.icon.url}
                        title={skill.skillName}
                        description={skill.skillDescription}
                    />
                ))}
            </SkillsWrapper>
        </Wrapper>

    )
}

export default Skills;