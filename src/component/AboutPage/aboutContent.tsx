import React from 'react';
import styled from 'styled-components';

const AboutContent: React.FC = () => {
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
            <Content>Here is the information about our application...</Content>
        </Container>
    )
}

export default AboutContent;