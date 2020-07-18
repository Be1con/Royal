import React, { Component } from 'react';
import './ContactInfo.css';
import { Grid, Typography } from '@material-ui/core';
import People from '../../Components/People/People';
import Modal from '../../Components/Modal/Modal';

class ContactInfo extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
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
                    <Typography variant="h3">{this.props.match.params.village}</Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item sm={6} md={4} lg={3}>
                        <People PeoplePicture="https://materializecss.com/images/sample-1.jpg" PeopleName="ทดสอบ ชื่อจริง" PeoplePosition="ทดสอบ" OpenModal={openModal} />
                    </Grid>
                </Grid>
                <Modal Open={this.state.openModal} Close={closeModal} />
            </div>
        )
    }
}

export default ContactInfo;