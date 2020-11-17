import React from 'react';
import styled from 'styled-components';
import ProjectBtn from '../ProjectBtn/ProjectBtn';

const Wrapper = styled.div`
    width: 450px;
    text-align: left;
`

const ProjectsChooser = ({ projects, activeProject, changeProject }) => {
    return (
        <Wrapper>
            {projects.map((project, index) => <ProjectBtn key={index} active={project.title == activeProject.title} action={() => changeProject(index)}>{project.title}</ProjectBtn>)}
        </Wrapper>
    )
}

export default ProjectsChooser;