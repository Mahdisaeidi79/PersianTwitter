import React, { useState } from 'react'
import { IconButton, Menu, MenuItem, Typography, useMediaQuery } from '@material-ui/core';
import useStyle from './style';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/styles';
import { ToggleLeftSide, ToggleSide, useLayoutDispatch } from '../../context/LayoutContext';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import PersonIcon from '@material-ui/icons/Person';

const Header = ({ title, icon }) => {
    const theme = useTheme();
    const classes = useStyle();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobileSize = useMediaQuery(theme.breakpoints.between('xs', '600'));
    const layoutDispatch = useLayoutDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const openRightsidebar = () => {
        ToggleSide(layoutDispatch);
        setAnchorEl(null);
    }
    const openLeftsidebar = () => {
        ToggleLeftSide(layoutDispatch)
        setAnchorEl(null);
    }
    return (
        <div className={classes.header}>
            {isTabletSize && <IconButton style={{ padding: 0, marginLeft: '0.5rem' }} disableRipple={true} onClick={openMenu}>
                <MenuIcon />
            </IconButton>}
            {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem className={classes.menuItem}><HomeIcon style={{ paddingLeft: '0.5rem' }} /><Link to={"/"}>خانه</Link></MenuItem>
                <MenuItem onClick={openRightsidebar} className={classes.menuItem}><WhatshotOutlinedIcon style={{ paddingLeft: '0.5rem' }}/>داغ ترین هشتگ ها</MenuItem>
                {isMobileSize && <MenuItem onClick={openLeftsidebar} className={classes.menuItem}><PersonIcon style={{ paddingLeft: '0.5rem' }}/>فعال ترین توییت باز ها</MenuItem>}
            </Menu>

        </div>
    )
}
export default Header;