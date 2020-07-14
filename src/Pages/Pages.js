import React, { Component } from 'react';
import './Pages.css';
import Menubar from '../Components/Menubar/Menubar';
import People from '../Components/People/People';
import MainButton from '../Components/MainButton/MainButton';
import Central from '../Assets/Cluster/central.svg';

class Pages extends Component {
    render() {
        return(
            <div className="Pages">
                <Menubar />

                <section className="Pages__Display">
                    <People PeoplePicture="https://materializecss.com/images/sample-1.jpg" PeopleName="ทดสอบ ชื่อจริง" PeoplePosition="ทดสอบ" />
                    <MainButton RegionVector={Central} RegionName="ภาคกลาง" RegionColor="#f0f0f0" />
                </section>
            </div>
        );
    }
}

export default Pages;