import React from 'react';
import './People.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, ButtonBase } from '@material-ui/core';

const people = props => {
    return(
        <div>
            <ButtonBase onClick={props.OpenModal}>
                <Card className="people__card">
                    <CardActionArea>
                        <CardMedia className="people__media" image={props.PeoplePicture} title={props.PeopleName} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.PeopleName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.PeoplePosition}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ButtonBase>
        </div>
    );
}

export default people;