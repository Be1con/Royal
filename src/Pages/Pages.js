import React, { Component } from 'react';
import './Pages.css';
import { Container } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom';
import Menubar from '../Components/Menubar/Menubar';
import People from '../Components/People/People';

// For Pages
import Home from './Home/Home';
import ProvinceSelection from './ProvinceSelection/ProvinceSelection';
import VillageSelection from './VillageSelection/VillageSelection';
import ContactInfo from './ContactInfo/ContactInfo';

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
                </section>
            </Container>
        );
    }
}

export default Pages;