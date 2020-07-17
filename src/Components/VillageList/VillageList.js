import React from 'react';
import { Paper, Typography, Grid, ButtonBase, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './VillageList.css';

const villageList = props => {
    return(
        <ButtonBase>
            <Link underline="none" component={RouterLink} to={`/${props.UrlRegion}/${props.UrlProvince}/${props.VillageAmphoe}/${props.VillageTambon}/${props.VillageName}`}>
                <Paper className="villageList__paper">
                    <Grid container spacing={2}>
                        <Grid item>
                            <div>
                                <Typography variant="h3">{props.VillageName}</Typography>
                                <Typography variant="body1">ตำบล{props.VillageTambon} อำเภอ{props.VillageAmphoe}</Typography>
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
            </Link>
        </ButtonBase>
    );
};

export default villageList;