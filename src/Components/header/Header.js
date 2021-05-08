import React from 'react'
import { IconButton, Typography, useMediaQuery } from '@material-ui/core';
import useStyle from './style';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/styles';
import { ToggleLeftSide, ToggleSide, useLayoutDispatch } from '../../context/LayoutContext';

const Header = ({ title, icon }) => {
    const theme = useTheme();
    const classes = useStyle();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobileSize = useMediaQuery(theme.breakpoints.between('xs','426'));
    const layoutDispatch = useLayoutDispatch();
    return (
        <div className={classes.header}>
            {isTabletSize && <IconButton style={{padding:0 , marginLeft:'0.5rem'}} disableRipple={true} onClick ={()=>{ToggleSide(layoutDispatch)}}>
                <MenuIcon/>
            </IconButton>}
            {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>
            {isMobileSize && <IconButton style={{padding:'0 68% 0 0' , marginLeft:'0.5rem'}} disableRipple={true} onClick ={()=>{ToggleLeftSide(layoutDispatch)}}>
            <MenuIcon/>
            </IconButton>}
        </div>
    )
}
export default Header;