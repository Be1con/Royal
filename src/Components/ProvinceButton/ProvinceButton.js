import React from 'react';
import { Link, ButtonBase, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import './ProvinceButton.css';

const provinceButton = props => {
    return(
        <div>
            <ButtonBase>
                <Link underline="none" component={RouterLink} to="#">
                    <div>
                        <div className="provinceButton__circular" style={{backgroundColor: props.ProvinceColor}}>
                            <div className="provinceButton__image">
                                <img className="provinceButton__vector" src={props.ProvinceVector} alt={props.ProvinceName} width="150px" height="150px" />
                            </div>
                        </div>
                        <Typography variant="h5" className="provinceButton__text">
                            {props.ProvinceName}
                        </Typography>
                    </div>
                </Link>
            </ButtonBase>
        </div>
    )
}

export default provinceButton;