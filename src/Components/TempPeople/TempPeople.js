import React from 'react';
import './TempPeople.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, ButtonBase } from '@material-ui/core';

const tempPeople = props => {
    const telNumber = "tel:" + props.PeoplePhoneNumber;
    const LINE = "http://line.me/ti/p/~" + props.PeopleLINE;

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
                                เบอร์โทรศัพท์: <a href={telNumber}>{props.PeoplePhoneNumber}</a> LINE: <a href={LINE}>{props.PeopleLINE}</a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ButtonBase>
        </div>
    );
}

export default tempPeople;