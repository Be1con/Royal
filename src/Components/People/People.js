import React from 'react';
import './People.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'

const people = props => {
    return(
        <div>
            <Link underline="none" component={RouterLink} to="#">
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
            </Link>
        </div>
    );
}

export default people;