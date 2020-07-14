import React from 'react';
import { Link, ButtonBase } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import './MainButton.css';

const mainButton = props => {
    return(
        <ButtonBase>
            <Link underline="none" component={RouterLink} to="#">
                <div className="mainbutton__button" style={{backgroundColor: props.RegionColor}}>
                    <div className="mainbutton__image">
                        <img className="mainbutton__vector" src={props.RegionVector} alt={props.RegionName} width="200px" height="200px" />
                    </div>
                    <span>{props.RegionName}</span>
                </div>
            </Link>
        </ButtonBase>
    );
};

export default mainButton