import React from 'react';
import { Paper, Typography, Grid, ButtonBase } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './VillageList.css';

const villageList = props => {
    return(
        <ButtonBase>
            <Paper className="villageList__paper">
                <Grid container spacing={2}>
                    <Grid item>
                        <div>
                            <Typography variant="h3">{props.VillageName}</Typography>
                            <Typography variant="body1">{props.VillageTambon} {props.VillageAmphoe}</Typography>
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="villageList__span" />
                    </Grid>
                    <Grid item>
                        <ArrowForwardIosIcon />
                    </Grid>
                </Grid>
            </Paper>
        </ButtonBase>
    );
};

export default villageList;