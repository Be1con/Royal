import React, { Component } from 'react';
import './Pages.css';
import { Container } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom';
import Menubar from '../Components/Menubar/Menubar';
import People from '../Components/People/People';
import Title from '../Components/Title/Title';
import MainButton from '../Components/MainButton/MainButton';
import ProvinceButton from '../Components/ProvinceButton/ProvinceButton';

// For Pages
import Home from './Home/Home';
import ProvinceSelection from './ProvinceSelection/ProvinceSelection';
import VillageSelection from './VillageSelection/VillageSelection';
import ContactInfo from './ContactInfo/ContactInfo';

import Central from '../Assets/Cluster/central.svg';
import Krabi from '../Assets/Provinces/Southern/Krabi.svg';

class Pages extends Component {
    render() {
        return(
            <Container maxWidth="lg" className="Pages">
                <Menubar />

                <section className="Pages__Display">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/:region" exact component={ProvinceSelection} />
                        <Route path="/:region/:province" exact component={VillageSelection} />
                        <Route path="/:region/:province/:amphoe/:tambon/:village" exact component={ContactInfo} />
                    </Switch>
                    <People PeoplePicture="https://materializecss.com/images/sample-1.jpg" PeopleName="ทดสอบ ชื่อจริง" PeoplePosition="ทดสอบ" />
                    <ProvinceButton ProvinceVector={Krabi} ProvinceName="กระบี่" ProvinceColor="#fff000" />
                </section>
            </Container>
        );
    }
}

export default Pages;