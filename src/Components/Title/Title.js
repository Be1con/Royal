import React from 'react';
import './Title.css';
import { Typography } from '@material-ui/core';

const title = props => {
    return(
        <div className="title__mainblock">
            <Typography variant="h5">
                {props.TitleSubheading}
            </Typography>
            <Typography variant="h3" className="title__heading">
                {props.TitleHeading}
            </Typography>
        </div>
    );
};

export default title;