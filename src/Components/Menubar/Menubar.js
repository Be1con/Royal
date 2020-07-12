import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import Logo from '../../Assets/Royal.png';
import './Menubar.css';

class Menubar extends Component {
    render(){
        return(
            <Navbar className="menubar__main" alignLinks="right" brand={<img src={Logo} alt="Logo" style={{height: "100%"}} />} centerLogo menuIcon={<Icon>menu</Icon>} options={{draggable: true, edge: "left", inDuration: 250, outDuration: 200, preventScrolling: true}}>
                <NavItem>หน้าแรก</NavItem>
                <NavItem>ติดต่อเรา</NavItem>
            </Navbar>
        )
    }
}

export default Menubar