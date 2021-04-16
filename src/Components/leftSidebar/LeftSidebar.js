import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from './style';

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

const tweetest = [
    {
        name: 'xiaomi',
        id: '@xiaomi',
        img: 'images/xiaomi.png'
    },
    {
        name: 'Samsung',
        id: '@samsung',
        img: 'images/samsung.png'
    }, {
        name: 'بیل گیتس',
        id: '@BillGates',
        img: 'images/bil.png'
    }, {
        name: 'مایک بای',
        id: '@Mike_IMC',
        img: 'images/mike.png'
    }, {
        name: 'شرلی ونگ',
        id: '@Shirley_IMC',
        img: 'images/shily.png'
    },
]
const LeftSidebar = () => {
    var classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"images/user img.png"} alt={"عکس پروفایل"} style={{ width: 'max-content' }} />
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
                    tweetest.map((item, index) =>{
                        return (
                            <React.Fragment>
                            <Tweetest name={item.name} id={item.name} img={item.img} />
                            {
                                index !== tweetest.length - 1 && <Divider style={{ margin: '0 -5% 0 -5%' }} />
                            }
                        </React.Fragment>
                        )
                    })
                }
            </Grid>

        </div>
    )
}
export default LeftSidebar
