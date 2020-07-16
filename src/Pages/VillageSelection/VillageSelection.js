import React, { Component } from 'react';
import './VillageSelection.css';
import Title from '../../Components/Title/Title';
import { Grid, Typography } from '@material-ui/core';
import Provinces from '../../Data/Province.json';
import EachProvince from '../../Data/Config.json';
import VillageList from '../../Components/VillageList/VillageList';

class VillageSelection extends Component {
    render(){
        let storeProvince = "";

        const selectedRegion = Provinces.filter(region => region.name.match(this.props.match.params.region));
        selectedRegion.map(regionProvince => {
            regionProvince.list.map(item => {
                if (item.english === this.props.match.params.province){
                    storeProvince = item.thai;
                }
                return(null);
            });
            return(null);
        });

        const filteredProvince = EachProvince.filter(eachProvince => eachProvince.province.includes(storeProvince));
        
        return(
            <div>
                <Title TitleHeading={filteredProvince[0].province} />
                {
                    filteredProvince[0].amphoe.map((amphoe) => {
                        return(
                            <div>
                                <Typography variant="h5">อำเภอ{amphoe.name}</Typography>
                                {
                                    amphoe.tambon.map(tambon => {
                                        return(
                                            <Grid container spacing={1}>
                                                <div className="villageSelection__padding">
                                                    <VillageList VillageName="Test" VillageTambon={tambon} VillageAmphoe={amphoe.name} />
                                                </div>
                                            </Grid>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default VillageSelection;