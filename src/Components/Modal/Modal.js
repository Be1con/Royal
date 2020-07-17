import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogActions, Grid, Avatar, DialogContent, ButtomNavigation } from '@material-ui/core';
import './Modal.css';

class Modal extends Component {
    constructor() {
        super(props);

        this.state = {
            spacing: 5,
            setSpacing: 5,
            value: 'recents',
            setValue: 'recents'
        }
    }

    render() {
        const classes = useStyles();

        const useStyles = makeStyles({
            root: {
                flexGrow: 1,
            },

            large: {
                width: theme.spacing(12),
                height: theme.spacing(12),
            },

            buttonPadding: {
                padding: '300px',
                margin: '300px',
            },

            bg: {
                backgroundColor: '#259740',
            },

            paper: {
                height: 140,
                width: 100,
            },

            container: {

                width: '95vw',
                padding: '9px',
                margin: '7px',
                height: '7vw'
            },

            control: {
                padding: theme.spacing(4),
            }
        });

        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });

        return (
            <Dialog fullScreen open={open} TransitionComponent={Transition} keepMounted onClose={this.props.Close} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">
                    <Grid container className={classes.root}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={this.state.spacing}>
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
                    <Card className={classes.root} className={classes.buttonPadding} className={classes.container}>
                        <HomeIcon color="primary" />
                        นายพิทักษ์ ทองคำส่วน นายกองค์การบริหารส่วนตำบลไฟป่า
                    </Card>
                    <Card className={classes.root} className={classes.buttonPadding} className={classes.container}>
                        <HomeIcon color="primary" />
                        นายพิทักษ์ ทองคำส่วน นายกองค์การบริหารส่วนตำบลไฟป่า
                    </Card>
                    <Card className={classes.root} className={classes.buttonPadding} className={classes.container}>
                        <HomeIcon color="primary" />
                        นายพิทักษ์ ทองคำส่วน นายกองค์การบริหารส่วนตำบลไฟป่า
                    </Card>
                    <Card className={classes.root} className={classes.buttonPadding} className={classes.container}>
                        <HomeIcon color="primary" />
                        นายพิทักษ์ ทองคำส่วน นายกองค์การบริหารส่วนตำบลไฟป่า
                    </Card>
                </DialogContent>
                <MuiThemeProvider>
                    <DialogActions className={classes.bg}>
                        <BottomNavigation value={value} onChange={handleChange} className={classes.root} className={classes.bg}>
                            <BottomNavigationAction onClick={this.props.Close} label="Close" value="recents" />
                        </BottomNavigation>
                    </DialogActions>
                </MuiThemeProvider>
            </Dialog>
        )
    }
}

export default Modal;