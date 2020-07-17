import React from 'react';
import './ContactInfo.css';
import { Grid, Typography } from '@material-ui/core';
import People from '../../Components/People/People';

const contactInfo = props => {
    return(
        <div>
            <div className="contactInfo__heading">
                <Typography variant="h3">{props.match.params.village}</Typography>
            </div>
            <Grid container spacing={2}>
                <Grid item sm={6} md={4} lg={3}>
                    <People PeoplePicture="https://materializecss.com/images/sample-1.jpg" PeopleName="ทดสอบ ชื่อจริง" PeoplePosition="ทดสอบ" />
                </Grid>
            </Grid>
        </div>
    )
}

export default contactInfo;