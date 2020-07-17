import React, { Component } from 'react';
import './VillageSelection.css';
import Title from '../../Components/Title/Title';
import { Grid, Typography } from '@material-ui/core';
import Provinces from '../../Data/Province.json';
import EachProvince from '../../Data/Config.json';
import VillageList from '../../Components/VillageList/VillageList';
import * as firebase from 'firebase/app';

class VillageSelection extends Component {
    constructor() {
        super();
        this.state = {
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
        let storeProvince = "";
        let amphoeOrKhet = "อำเภอ";
        let tambonOrKhwaeng = "ตำบล";

        const selectedRegion = Provinces.filter(region => region.name.match(this.props.match.params.region));
        selectedRegion.map(regionProvince => {
            regionProvince.list.map(item => {
                if (item.english === this.props.match.params.province) {
                    storeProvince = item.thai;
                }
                return (null);
            });
            return (null);
        });

        const filteredProvince = EachProvince.filter(eachProvince => eachProvince.province.includes(storeProvince));

        return (
            <div>
                <Title TitleHeading={filteredProvince[0].province} />
                {
                    Object.entries(this.state.obj).map((item) => {
                        { console.log(item[1].Building) }
                        if (item[1].Province === filteredProvince[0].province) {
                            if (filteredProvince[0].province === "กรุงเทพมหานคร") {
                                amphoeOrKhet = "เขต";
                                tambonOrKhwaeng = "แขวง";
                            }

                            return (
                                <div>
                                    <Typography variant="h5">อำเภอ{item[1].District}</Typography>
                                    {console.log(item[1].Building)}
                                    <Grid container spacing={1}>
                                        <Grid item sm={12} md={6} lg={4} className="villageSelection__padding">
                                            <VillageList    VillageName={item[1].Building}
                                                            VillageTambon={item[1].District}
                                                            VillageAmphoe={item[1].SubDistrict}
                                                            VillageTambonPrefix={tambonOrKhwaeng}
                                                            VillageAmphoePrefix={amphoeOrKhet}
                                                            UrlRegion={this.props.match.params.region}
                                                            UrlProvince={this.props.match.params.province} />
                                        </Grid>
                                    </Grid>
                                </div>
                            );
                        }
                    })
                }
            </div>
        );

    }
}
export default VillageSelection;



