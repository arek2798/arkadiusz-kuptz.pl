import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import ContactForm from '../../molecules/ContactForm/ContactForm';

const Wrapper = styled.div`
    max-width: 1170px;
    margin: auto;
    padding: 0 0 80px; 
`

const Contact = () => (
    <Wrapper className="contact">
        <SectionHeader title="Kontakt" subtitle="ZAPRASZAM DO WSPÓŁPRACY" />
        <ContactForm />
    </Wrapper>
)

export default Contact;