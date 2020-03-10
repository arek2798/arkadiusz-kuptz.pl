import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const Form = styled.form`
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-row-gap: 25px;
    justify-items: center;
`
const Input = styled.input`
    width: 580px;
    height: 40px;
    border: 1px solid #888888;
    background: #FFFFFF;
    padding: 8px 14px;
`
const Textarea = styled.textarea`
    width: 580px;
    height: 210px;
    border: 1px solid #888888;
    background: #FFFFFF;
    padding: 14px;
`

class ContactForm extends React.Component {
    state = {
        email: "",
        content: "",
        correct: false
    }

    handleCorrect = () => {
        if (this.state.email.length > 10 && this.state.content.length > 15) {
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
            this.setState({
                email: "",
                content: "",
                correct: false
            })
        }
    }

    render() {

        return (
            <Form autoComplete="off">
                <Input name="email" type="email" placeholder="Twój email..." required onChange={this.handleText} value={this.state.email} />
                <Textarea name="content" placeholder="Treść wiadomości..." required onChange={this.handleText} value={this.state.content} />
                <Button disable={this.state.correct ? false : true} type="submit" onClick={this.handleSubmit}>Wyślij</Button>
            </Form>
        )
    }
}

export default ContactForm;