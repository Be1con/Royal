// For Required Modules
import React, { Component } from 'react';
import { Container } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom';

// For Internal Components
import Menubar from '../Components/Menubar/Menubar';

// For Pages
import Home from './Home/Home';
import ProvinceSelection from './ProvinceSelection/ProvinceSelection';
import VillageSelection from './VillageSelection/VillageSelection';
import ContactInfo from './ContactInfo/ContactInfo';

// For CSS
import './Pages.css';

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
                </section>
            </Container>
        );
    }
}

export default Pages;