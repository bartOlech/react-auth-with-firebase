import React from 'react';
import styled from 'styled-components';

interface IProps {
    projectTittle: string,
    projectContent: string
}

const ProjectTemplate: React.FC<IProps> = (props) => {
    const Container = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    `
    const  Box = styled.div`
        height: 100%;
        width: 60%;
        border: 1px solid #C5CAE9;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const Tittle = styled.h2`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        font-family: 'Montserrat', sans-serif;
        color: #BDBDBD;
    `
    const Content = styled.p`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        font-family: 'Montserrat', sans-serif;  
        color: #FFFFFF;
    `
    return (
        <Container>
            <Box>
                <Tittle>{props.projectTittle}</Tittle>
                <Content>{props.projectContent}</Content>
            </Box>
        </Container>
    )
}

export default ProjectTemplate;