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
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-column-gap: 30px;
    justify-content: center;
`
const Item = styled.p`
    cursor: pointer;
    transition: color 0.1s linear;
    color: ${({ active }) => active ? "#FF7675" : "#000000"};

    &:hover {
        color: #FF7675;
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