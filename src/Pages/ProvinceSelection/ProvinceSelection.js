import React from 'react';
import Title from '../../Components/Title/Title';
import ProvinceButton from '../../Components/ProvinceButton/ProvinceButton';
import './ProvinceSelection.css';
import { Grid } from '@material-ui/core';
import Krabi from '../../Assets/Provinces/Southern/Krabi.svg'

const provinceSelection = props => {
    return(
        <div>
            <Title TitleHeading="เลือกจังหวัดที่ท่านต้องการ" TitleSubheading="โรงเรียนจิตอาสาฯ ช่วยเหลือไฟป่า" />
            <Grid container spacing={1}>
                <ProvinceButton ProvinceVector={Krabi} ProvinceName="กระบี่" ProvinceColor="#fff000" />
            </Grid>
        </div>
    )
}

export default provinceSelection;