import React from 'react';
import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard'
import PrivateMainContent from './component/PrivateContent/PrivateMainContent';
import PublicMainContent from './component/PublicContent/PublicMainContent';
import AboutPage from './component/AboutPage/aboutContent';
import Login from './component/Login/Login';
import AddProject from './component/Projects/AddProject';


const App: React.FC = () => {
  const [auth, setAuth] = useState(false)

  const Container = styled.div`
    width: 100%;
    height: 100%;
  `

  return (
    <Container>
      <Router>
      <Dashboard></Dashboard>
        {auth?(
          <div>
            <Route exact path='/' component={PrivateMainContent}></Route>
          </div>
        ):(
          <div>
            <Route exact path='/' component={PublicMainContent}></Route>
          </div>
        )}
        <Route path='/about' component={AboutPage}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/addproject' component={AddProject}></Route>
      </Router>
    </Container>
  );
}

export default App;
