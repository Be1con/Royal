import React, { Component } from 'react';
import './ContactInfo.css';
import { Grid, Typography } from '@material-ui/core';
import TempPeople from '../../Components/TempPeople/TempPeople';
import Modal from '../../Components/Modal/Modal';
import * as firebase from 'firebase/app';
class ContactInfo extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
                obj: {}
        }
    }
    componentDidMount() {
        const rootRef = firebase.database().ref('Mastersheet')

        rootRef.on('value', (snap) => {
            console.log(snap.val())
            this.setState({
                obj: snap.val()
            });
        });
    }
    render() {
        const openModal = () => {
            this.setState = {
                isOpen: true
            };
        }

        const closeModal = () => {
            this.setState = {
                isOpen: false
            }
        }

        return (
            <div>
                <div className="contactInfo__heading">
                    
                    <Typography variant="h3">หมู่บ้าน{this.props.match.params.village}</Typography>
                    {/* <Typography variant="h3">หมู่บ้าน {props.PeopleName}</Typography> */}
                </div>
                {

                Object.entries(this.state.obj).map((item) => {
                if(item[1].Building === this.props.match.params.village)
                {
                return(    
                <Grid container spacing={2}>
                    <Grid item sm={6} md={4} lg={3}>
                        <TempPeople PeoplePicture={item[1].Image}   PeopleName={item[1].FirstName}  PeoplePosition={item[1].Postion}   PeopleDuty={item[1].Duty} PeopleLocation={item[1].Province} PeoplePhoneNumber={item[1].MobileNumber} PeopleLINE={item[1].LineID} OpenModal={openModal} />
                    </Grid>
                </Grid>
                )
                }
                })
                }
            </div>
        )
    }
}

export default ContactInfo;