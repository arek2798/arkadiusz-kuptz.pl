import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import ProjectsSlider from '../../molecules/ProjectsSLider/ProjectsSlider';

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 80px 0;
    text-align: center;
`
class Portfolio extends React.Component {
    render() {
        return (
            <Wrapper className="portfolio">
                <SectionHeader title="Portfolio" subtitle="WYKONANE PRACE" />
                <ProjectsSlider />
            </Wrapper >
        )
    }
}

export default Portfolio;