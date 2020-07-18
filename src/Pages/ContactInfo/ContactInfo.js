import React, { Component } from 'react';
import './ContactInfo.css';
import { Grid, Typography } from '@material-ui/core';
import TempPeople from '../../Components/TempPeople/TempPeople';
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
                    <Typography variant="h3">หมู่บ้าน{this.props.match.params.village}</Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item sm={6} md={4} lg={3}>
                        <TempPeople PeoplePicture="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" PeopleName="นายสุขสมัย ใจกระจ่าง" PeoplePosition="เจ้าหน้าที่รักษาป่าไม้" PeopleDuty="ผู้ดูแลป่าไม้" PeopleLocation="หมู่บ้านธันญการร เลขที่ 51/1 หมู่ที่ 3 แขวงท่าแร้ง เขตบางเขน จังหวัดกรุงเทพมหานคร" PeoplePhoneNumber="000000000000" PeopleLINE="SuksamaiJai" OpenModal={openModal} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ContactInfo;