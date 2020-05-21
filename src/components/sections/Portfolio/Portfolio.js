import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import ProjectsWrapper from '../../molecules/ProjectsWrapper/ProjectsWrapper';

const Wrapper = styled.div`
    max-width: 1170px;
    margin: auto;
    padding: 80px 0;
    text-align: center;
`
const Filter = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Item = styled.p`
    cursor: pointer;
    transition: color 0.1s linear;
    color: ${({ active }) => active ? "#449EC6" : "#000000"};
    margin: 10px 10px;

    &:hover {
        color: #449EC6;
    }
`
class Portfolio extends React.Component {
    state = {
        activeFilter: "wszystko"
    }

    handleFilter = (filter) => {
        this.setState({
            activeFilter: filter
        })
    }

    render() {
        const { activeFilter } = this.state;

        return (
            <Wrapper className="portfolio">
                <SectionHeader title="Portfolio" subtitle="WYKONANE PRACE" />
                <Filter>
                    <Item active={activeFilter === "wszystko" ? true : false} onClick={() => this.handleFilter("wszystko")}>Wszystko</Item>
                    <Item active={activeFilter === "portfolio" ? true : false} onClick={() => this.handleFilter("portfolio")}>Strona portfolio</Item>
                    <Item active={activeFilter === "aplikacja" ? true : false} onClick={() => this.handleFilter("aplikacja")}>Aplikacja webowa</Item>
                    <Item active={activeFilter === "firmowa" ? true : false} onClick={() => this.handleFilter("firmowa")}>Strona firmowa</Item>
                </Filter>
                <ProjectsWrapper activeFilter={this.state.activeFilter} />
            </Wrapper >
        )
    }
}

export default Portfolio;