import React from 'react';

import { Grid } from '@material-ui/core';
import { People, Info } from '@material-ui/icons'
import Title from '../../Components/Title/Title';
import MainButton from '../../Components/MainButton/MainButton';

import Northern from '../../Assets/Cluster/northern.svg';
import Northeastern from '../../Assets/Cluster/northeastern.svg';
import Central from '../../Assets/Cluster/central.svg';
import Southern from '../../Assets/Cluster/southern.svg';

import './Home.css';

const home = props => {
    return(
        <div>
            <Title TitleHeading="เลือกภูมิภาคที่ท่านต้องการ" TitleSubheading="โรงเรียนจิตอาสาฯ ช่วยเหลือไฟป่า" />
            <Grid container spacing={1}>
                <Grid item xs={6} md={4} lg={3}>
                    <MainButton Vector={Northern} Name="ภาคเหนือ" Color="#8729BD" Routing="northern" />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <MainButton Vector={Northeastern} Name="ภาคตะวันออกเฉียงเหนือ" Color="#BD6029" Routing="northeastern" />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <MainButton Vector={Central} Name="ภาคกลาง" Color="#33BD29" Routing="central" />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <MainButton Vector={Southern} Name="ภาคใต้" Color="#296FBD" Routing="southern" />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <MainButton Vector={People} Name="คณะกรรมการ" Color="#1790DE" Routing="board" />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                    <MainButton Vector={Info} Name="เกี่ยวกับโครงการ" Color="#41C18B" Routing="northern" />
                </Grid>
            </Grid>
        </div>
    )
}

export default home;