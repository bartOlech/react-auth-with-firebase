import React, {Component} from 'react';
import styled from 'styled-components';
import ProjectTemplate from '../Projects/ProjectTemplate';
import db from '../../config/fbConfig';

interface IState {
    tittle: string[],
    content: string[],
    loaded: boolean
}

const Container = styled.div`
        width: 100%;
        height: 100%;
    `
    const Content = styled.h1`
        text-align: center;
        color: #FFFFFF;
    `
    const Box = styled.div`
        margin-bottom: 20px;
    `

class PublicMainContent extends Component<IState>{
    state: IState = {
        tittle: [],
        content: [],
        loaded: false
    }
    componentDidMount () {
        const { tittle, content } = this.state;
        db.firestore().collection("projects").get().then((snapshot:any) => {
            snapshot.forEach((doc:any) => {
                tittle.push(doc.data().Tittle)
                content.push(doc.data().Content)
            });
        }).then(() => {
            this.setState({
                loaded: true
            })
        })
    }
    
    render() {
        const { tittle, content } = this.state;
        return (
            <Container>
                <Content>Hello, you are not sing up...</Content>
                {tittle?this.state.tittle.map((el, index) => {
                    return (
                        <Box key={index}>
                            <ProjectTemplate 
                                projectTittle={el}
                                projectContent={content[index]}
                            ></ProjectTemplate>
                        </Box>
                    )
                }):null}
                
            </Container>
        )
    }
}

export default PublicMainContent;