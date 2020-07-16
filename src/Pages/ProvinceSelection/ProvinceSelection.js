import React, { Component } from 'react';
import Title from '../../Components/Title/Title';
import ProvinceButton from '../../Components/ProvinceButton/ProvinceButton';
import './ProvinceSelection.css';
import { Grid } from '@material-ui/core';
import Provinces from '../../Data/Province.json';

class ProvinceSelection extends Component {    
    render(){
        const colorList = [
            "#3E1CF2",
            "#821C1C",
            "#920EB3",
            "#4EBD68",
            "#D1D924",
            "#644ACE",
            "#EB6EB4",
            "#078238",
            "#41C18B",
            "#FF7878",
            "#1F2A8E",
            "#22A3EE",
            "#1F738E",
            "#44B110",
            "#079EA4",
            "#B5883B",
            "#A7DB15",
            "#FFFF01",
            "#3BB467",
            "#342FD8",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000"
        ];
        let filteredProvinces = Provinces.filter(eachRegion => eachRegion.name.includes(this.props.match.params.region));

        return(
            <div>
                <Title TitleHeading="เลือกจังหวัดที่ท่านต้องการ" TitleSubheading="โรงเรียนจิตอาสาฯ ช่วยเหลือไฟป่า" />
                    {
                        filteredProvinces.map((eachProvince) => {
                            return(
                                <Grid container spacing={1}>
                                {
                                    eachProvince.list.map((eachItem, index) => (
                                        <Grid item sm={4} md={3} lg={2}>
                                            <ProvinceButton ProvinceVector={eachItem.vector}
                                                            ProvinceName={eachItem.thai}
                                                            ProvinceColor={colorList[index]}
                                                            Routing={eachItem.english}
                                                            CurrentPage={this.props.match.params.region} />
                                        </Grid>
                                    ))
                                }
                                </Grid>
                            )
                        })
                    }
            </div>
        );
    }
}

export default ProvinceSelection;