import React, {Component} from 'react';
import styled from 'styled-components';
import db from '../../config/fbConfig';

interface IState {
    tittle: string,
    content: string
}

    const Container = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const HeaderText = styled.h1`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        font-family: 'Montserrat', sans-serif;  
        color: #FFFFFF;
        font-size: 2em;
    `
    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    `
    const Label = styled.label`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        font-family: 'Montserrat', sans-serif;  
        color: #FFFFFF;
    `
    const Input = styled.input`
        height: 30px;
        width: 200px;
        margin-bottom: 40px;
        border: none;
        border-radius: 1px;
    `
    const Button = styled.button`
        width: 100px;
        height: 40px;
        background-color: #00BCD4;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 2px;
        cursor: pointer;
    `

class AddProject extends Component<IState> {

    state: IState = {
        tittle: '',
        content: ''
    }

    handleChange = (e: any) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        const { tittle, content } = this.state;
        db.firestore().collection("projects").add({
            Tittle: tittle,
            Content: content,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    render() {
        const {tittle, content}= this.state;
        return (
            <Container>
                <HeaderText>Add project</HeaderText>
                <Form onSubmit={this.handleSubmit}>
                    <Label htmlFor='tittle'>Tittle</Label>
                    <Input value={tittle} id='tittle' type='text' onChange={this.handleChange}></Input>
                    <Label htmlFor='content'>Content</Label>
                    <Input value={content} id='content' type='text' onChange={this.handleChange}></Input>
                    <Button style={{marginTop: '-20px'}}>Add</Button>
                </Form>
            </Container>
        )
    } 
}

export default AddProject;