import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Menu } from '@material-ui/icons'
import Logo from '../../Assets/Royal.png';
import './Menubar.css';

const menubar = props => {
    return(
        <AppBar className="menubar__flexgrow">
            <Toolbar>
                <IconButton className="menubar__margin" edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <div className="menubar__flexgrow" />
                <img src={Logo} height="64px" alt="Logo" />
                <div className="menubar__flexgrow" />
                <Button color="inherit" component={Link} to={`/`}>หน้าแรก</Button>
            </Toolbar>
        </AppBar>
    );
}

export default menubar;