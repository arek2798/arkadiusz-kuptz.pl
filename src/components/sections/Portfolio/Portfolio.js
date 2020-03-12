import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import WorkField from '../../atoms/WorkField/WorkField';

const Wrapper = styled.div`
    max-width: 1170px;
    margin: auto;
    padding: 80px 0;
    text-align: center;
`
const Filter = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
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
const FieldsWrapper = styled.div`
    padding: 60px 0;
    display: grid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1170px) {
        justify-content: space-around;
    }
`

class Portfolio extends React.Component {
    state = {
        activeFilter: "wszystko"
    }

    works = [
        {
            id: 0,
            type: "portfolio",
            src: "portfolio.png",
            title: "strona portfolio",
            tech: "html / css / javascript / php"
        },
        {
            id: 1,
            type: "aplikacja",
            src: "portfolio.png",
            title: "aplikacja",
            tech: "html / css / react"
        },
        {
            id: 2,
            type: "portfolio",
            src: "portfolio.png",
            title: "strona portfolio",
            tech: "html / css / javascript / php"
        },
    ]

    handleFilter = (filter) => {
        this.setState({
            activeFilter: filter
        })
    }

    render() {
        const { activeFilter } = this.state;
        const activeWorks = this.works.filter(work => work.type === activeFilter || activeFilter === "wszystko");

        return (
            <Wrapper className="portfolio">
                <SectionHeader title="Portfolio" subtitle="WYKONANE PRACE" />
                <Filter>
                    <Item active={activeFilter === "wszystko" ? true : false} onClick={() => this.handleFilter("wszystko")}>Wszystko</Item>
                    <Item active={activeFilter === "portfolio" ? true : false} onClick={() => this.handleFilter("portfolio")}>Portfolio</Item>
                    <Item active={activeFilter === "aplikacja" ? true : false} onClick={() => this.handleFilter("aplikacja")}>Aplikacje</Item>
                </Filter>
                <FieldsWrapper>
                    {activeWorks.map(work => <WorkField key={work.id} src={work.src} title={work.title} tech={work.tech} />)}
                </FieldsWrapper>
            </Wrapper >
        )
    }
}

export default Portfolio;