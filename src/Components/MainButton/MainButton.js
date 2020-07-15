import React from 'react';
import { Link, ButtonBase, Paper, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import './MainButton.css';

const mainButton = props => {
    return(
        <ButtonBase>
            <Link underline="none" component={RouterLink} to={`/${props.Routing}`}>
                <Paper className="mainbutton__container" elevation={3} style={{backgroundColor: props.Color}}>
                    <div className="mainbutton__image">
                        <img className="mainbutton__vector" src={props.Vector} alt={props.Name} width="200px" height="200px" />
                    </div>
                    <Typography variant="body1" className="mainbutton__title">{props.Name}</Typography>
                </Paper>
            </Link>
        </ButtonBase>
    );
};

export default mainButton