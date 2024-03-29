import React from 'react';
import styled from 'styled-components';

const PrivateMainContent: React.FC = () => {
    const Container = styled.div`
        width: 100%;
        height: 100%;
    `
    const Content = styled.h1`
        text-align: center;
        color: #FFFFFF;
    `
    return (
        <Container>
            <Content>Hello, you are sign up</Content>
        </Container>
    )
}

export default PrivateMainContent;