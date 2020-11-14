import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import emailjs from 'emailjs-com';

const Form = styled.form`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-row-gap: 25px;
    justify-items: center;
    max-width: 600px;
    padding: 0 10px;
    margin: auto;
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #888888;
    background: #FFFFFF;
    padding: 8px 14px;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 210px;
    border: 1px solid #888888;
    background: #FFFFFF;
    padding: 14px;
`

class ContactForm extends React.Component {
    state = {
        name: "",
        email: "",
        content: "",
        correct: false
    }

    handleCorrect = () => {
        if (this.state.name.length > 5 && this.state.email.length > 10 && this.state.content.length > 15) {
            this.setState({
                correct: true
            })
        } else {
            this.setState({
                correct: false
            })
        }
    }

    handleText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.handleCorrect)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.correct) {
            emailjs.init('user_MMXt8vNJ38HCCBEQQzb4x');
            const templateParams = {
                user_name: this.state.name + " (" + this.state.email + ")",
                to_name: "arkad.kuptz@gmail.com",
                message: this.state.content
            };
            emailjs
                .send("contact_service", "contact_form", templateParams)
                .then(
                    (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                    },
                    (err) => {
                        console.log("FAILURE!", err);
                    }
                );

            this.setState({
                name: "",
                email: "",
                content: "",
                correct: false
            })
        }
    }

    render() {

        return (
            <Form autoComplete="off" >
                <Input name="name" type="name" placeholder="Twoje imię..." required onChange={this.handleText} value={this.state.name} />
                <Input name="email" type="email" placeholder="Twój email..." required onChange={this.handleText} value={this.state.email} />
                <Textarea name="content" placeholder="Treść wiadomości..." required onChange={this.handleText} value={this.state.content} />
                <Button disable={this.state.correct ? false : true} type="submit" onClick={this.handleSubmit}>Wyślij</Button>
            </Form>
        )
    }
}

export default ContactForm;