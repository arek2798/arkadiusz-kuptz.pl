import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectDesc from '../../atoms/ProjectDesc/ProjectDesc';
import ProjectGraphic from '../../atoms/ProjectGraphic/ProjectGraphic';
import ProjectsChooser from '../../atoms/ProjectsChooser/ProjectsChooser';
import ajpl from '../../../assets/images/ajpl.png';
import aj from '../../../assets/images/aj.png';
import mw from '../../../assets/images/mw.png';

const Wrapper = styled.div`
    width: 100%;
    max-width: 2500px;
    height: 800px;
    /* background: #CCC; */
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const projects = [
    {
        title: "Wizytówka Senior DevOpsa",
        color: "#0A223A",
        img: aj,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem provident eum fuga, quam perferendis odio eveniet fugiat similique. Quisquam architecto provident nisi sapiente ipsum? Ullam totam est architecto blanditiis.",
        tech: ["JavaSript", "React", "HTML", "CSS", "RWD", "Gatsby"],
        link: "https://aleksander-jablonski.com/",
        type: "left"
    },
    {
        title: "Strona firmowa",
        color: "#2577C0",
        img: mw,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit voluptatum quia iste iure explicabo doloribus, commodi distinctio id nihil quisquam cupiditate laborum debitis, placeat tenetur error? Debitis, laboriosam ratione",
        tech: ["JavaSript", "HTML", "CSS", "RWD"],
        link: "https://www.melekswladyslawowo.pl/",
        type: "right"
    },
]

const ProjectsSlider = () => {
    const [animationStart, setAnimationStart] = useState(false);
    const [activeProject, setActiveProject] = useState(projects[0]);
    const [activeId, setActiveId] = useState(0);

    const changeProject = (id) => {
        setAnimationStart(true);
        setActiveId(id);
    }

    const nextProject = () => {
        setActiveProject(projects[activeId]);
        setTimeout(() => setAnimationStart(false), 800);
    }

    useEffect(() => {
        if (animationStart === true) setTimeout(nextProject, 400);
    }, [animationStart])

    return (
        <Wrapper>
            <ProjectsChooser projects={projects} activeProject={activeProject} changeProject={changeProject} />
            <ProjectGraphic activeProject={activeProject} animationStart={animationStart} />
            <ProjectDesc animationStart={animationStart} activeProject={activeProject} />
        </Wrapper>
    )
}

export default ProjectsSlider;