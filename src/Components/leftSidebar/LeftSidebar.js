import { ButtonBase, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useStyle from './style';
import { getUsers } from '../../Api/api_tweet';

const Tweetest = ({ name, id, img }) => {
    var classes = useStyle()
    return (
        <Grid container direction={"row"} className={classes.Tweetest}>
            <img src={img} alt={"عکس پروفایل"} style={{ width: 50 }} />
            <Grid item container className={classes.profileTweetests}>
                <Typography className={classes.profileName} style={{ direction: "rtl", fontWeight: 'bold' }}>{name}</Typography>
                <Typography className={classes.profileId} style={{ direction: "rtl" }}>{id}</Typography>
            </Grid>
        </Grid>
    )
}
const LeftSidebar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
      };
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }  
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers((isOk, data) => {
            if (!isOk)
                return alert("لیست اعضا دریافت نشد");
            setUsers(data);
        })
    }, []);
    var classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick ={openMenu}>
                <img src={"/images/user img.png"} alt={"عکس پروفایل"} style={{ width: 'max-content' }} />
                <Grid item container className={classes.profile}>
                    <Typography className={classes.profileName}>محمد مهدی سعیدی</Typography>
                    <Typography className={classes.profileId}>M._.M</Typography>
                </Grid>
            </Grid>
            <Grid item container className={classes.bestOfTweet} direction={"column"} >
                <Typography className={classes.titleBest} >
                    فعال ترین توییت بازها
            </Typography>
                <Divider style={{ margin: '0 -5% 0 -5%' }} />
                {
                    users.map((item, index) => {
                        return (
                            <React.Fragment>
                                <Link to={`/Users/${item.name}`}>
                                    <ButtonBase disableRipple={true}>
                                        <Tweetest name={item.name} id={item.id} img={item.img} />
                                    </ButtonBase>
                                </Link>
                                {
                                    index !== users.length - 1 && <Divider style={{ margin: '0 -5% 0 -5%' }} />
                                }
                            </React.Fragment>
                        )
                    })
                }
            </Grid>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick = {()=>{localStorage.clear();window.location.reload()}}>خروج</MenuItem>
            </Menu>
        </div>
    )
}
export default LeftSidebar
