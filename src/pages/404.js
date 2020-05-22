import React from "react"
import styled from 'styled-components';
import Footer from '../components/sections/Footer/Footer';

const Wrapper = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: auto max-content;
`
const Content = styled.div`
  text-align: center;
  margin: 150px 0 50px;
`

const NotFoundPage = () => (
  <Wrapper>
    <Content>
      <h1>Strona nie istnieje!</h1>
      <p>Spróbuj wyszukać coś innego lub przejdź do <a href="https://www.arkadiusz-kuptz.pl">strony głównej</a>.</p>
    </Content>
    <Footer />
  </Wrapper>
)

export default NotFoundPage
