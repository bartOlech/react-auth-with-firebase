import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Dashboard: React.FC = () => {

    const NavLinkStyle = {
        textDecoration: 'none',
        color: '#212121',
        outline: 'none'
    }

    // doesn't work ???
    const Active = { 
        color: '#fff',
    }

    const Menu = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #303F9F;
    `
    const MenuLinks = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 50px;
        background-color: #FFFFFF;
        color: #212121;
        text-align: center;
        padding-bottom: 5px;
        margin-right: 1px;
        transition: .5s;
        &:hover {
            background-color: #3F51B5;
            cursor: pointer;
        }
        
    `

    const setMenu = () => {
       
    }

    return (
        <Menu>
            <MenuLinks onClick={setMenu}>
                <NavLink activeStyle={Active} style={NavLinkStyle} to='about'>About</NavLink>
            </MenuLinks>
            <MenuLinks onClick={setMenu}>
                <NavLink activeStyle={Active} style={NavLinkStyle} to='login'>Login</NavLink>
            </MenuLinks>
            <MenuLinks onClick={setMenu}>
                <NavLink activeStyle={Active} style={NavLinkStyle} to='addproject'>Add project</NavLink>
            </MenuLinks>
            <MenuLinks onClick={setMenu}>
                <NavLink style={NavLinkStyle} to='/'>Start</NavLink>
            </MenuLinks>
        </Menu>
    )
}

export default Dashboard;