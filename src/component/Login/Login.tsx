import React from 'react';
import styled from 'styled-components';
import FacebookIco from '../../img/social/facebook.png';
import GoogleIco from '../../img/social/google.png';

const Login: React.FC = () => {

    const Container = styled.div`
        width: 400px;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FFFFFF;
        border-radius: 2px;
    `
    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    `
    const Label = styled.label`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
    `
    const Input = styled.input`
        width: 70%;
        height: 40px;
        border: 1px solid #BDBDBD;
        margin-top: 10px;
        border-radius: 2px;
    `
    const SocialBtnContainer = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    `
    const FacebookBtn = styled.button`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: url(${FacebookIco});
        background-repeat: no-repeat;
        background-size: cover;
        outline: none;
        margin-right: 10px;
        cursor: pointer;
    `
    const GoogleBtn = styled.button`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: url(${GoogleIco});
        background-repeat: no-repeat;
        background-size: cover;
        outline: none;
        margin-left: 10px;
        cursor: pointer;
    `  
    const SendButton = styled.button`
        width: 140px;
        height: 40px;
        background-color: #303F9F;
        color: #fff;
        cursor: pointer;
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        font-family: 'Montserrat', sans-serif;
        border: none;
        border-radius: 2px;
        margin-top: 140px;
    `
    return (
        <Container>
            <Form>
                <SocialBtnContainer>
                    <FacebookBtn style={{marginLeft: '10px'}}></FacebookBtn>
                    <GoogleBtn></GoogleBtn>
                </SocialBtnContainer>
                <Label htmlFor='input-email'>Email</Label>
                <Input id='input-email' type='text'></Input>
                <Label htmlFor='input-password'>Password</Label>
                <Input id='input-password' type='password'></Input>
                <SendButton>Sign in</SendButton>
            </Form>
        </Container>
    )
}

export default Login;