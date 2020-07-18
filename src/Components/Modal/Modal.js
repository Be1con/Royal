import React, { Component, useState } from 'react';
import { Dialog, DialogTitle, DialogActions, Grid, Avatar, DialogContent, BottomNavigation, BottomNavigationAction, Slide, Card } from '@material-ui/core';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Home, Phone, Message, Business } from '@material-ui/icons'
import green from '@material-ui/core/colors/green';
import './Modal.css';

class Modal extends Component {
    render () {
        const [spacing, setSpacing] = useState(5);

        const theme = createMuiTheme({
            palette: {
                primary: green,
                secondary: {
                    main: '#2e7d32',
                },
                spacing: 8,
            },
        });

        const useStyles = makeStyles({
            large: {
                width: theme.spacing(12),
                height: theme.spacing(12),
            },
            control: {
                padding: theme.spacing(4),
            }
        });

        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });

        const classes = useStyles();

        return (
            <Dialog fullScreen open={this.props.Open} TransitionComponent={Transition} keepMounted onClose={this.props.Close} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">
                    <Grid container className="modal__main">
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={spacing}>
                                {[0, 1].map((value) => (
                                    <Grid key={value} item>
                                        <Avatar alt="Remy Sharp" src="https://drive.google.com/thumbnail?id=1W_uouwkbc7C5aEyO3iRjXuIeP-GNsblb"
                                            className={classes.large} value='vdvdv' />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Card className="modal__main modal__buttonPadding modal__container">
                        <Business color="primary" />
                        นายกองค์การบริหารส่วนตำบลไฟป่า
                    </Card>
                    <Card className="modal__main modal__buttonPadding modal__container">
                        <Home color="primary" />
                        ที่อยู่
                    </Card>
                    <Card className="modal__main modal__buttonPadding modal__container">
                        <Phone color="primary" />
                        0819995555
                    </Card>
                    <Card className="modal__main modal__buttonPadding modal__container">
                        <Message color="primary" />
                        PitakT
                    </Card>
                </DialogContent>
                <MuiThemeProvider>
                    <DialogActions className="modal__background">
                        <BottomNavigation className="modal__main modal__background">
                            <BottomNavigationAction onClick={this.props.Close} label="Close" value="recents" />
                        </BottomNavigation>
                    </DialogActions>
                </MuiThemeProvider>
            </Dialog>
        )
    }
}

export default Modal;