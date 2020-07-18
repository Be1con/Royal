import React from 'react';
import './TempPeople.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, ButtonBase } from '@material-ui/core';

const tempPeople = props => {
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
                            <Typography variant="body1" color="textSecondary" component="p">
                                {props.PeoplePosition} | {props.PeopleDuty}
                            </Typography>
                            <Typography variant="body2">
                                เบอร์โทรศัพท์: {props.PeoplePhoneNumber} LINE: {props.PeopleLINE}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ButtonBase>
        </div>
    );
}

export default tempPeople;