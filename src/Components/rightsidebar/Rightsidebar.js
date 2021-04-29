import { ButtonBase, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import useStyle from './style';
import { Link } from 'react-router-dom';
import { getHashTags } from '../../Api/api_tweet';

export default function Rightsidebar() {
    const [Hashtags, setHashtags] = useState([])
    useEffect(() => {
        getHashTags((isOk,data) => {
            if(!isOk)
            return alert("لیست هشتگ ها دریافت نشد");
            setHashtags(data)
        })
    }, []);
    var classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container alignItems={"center"} direction={"row"}>
                <Link to={"/"}>
                <Grid item>
                    <TwitterIcon className={classes.logo} />
                </Grid>
                <Grid item>
                    <Typography className={classes.textLogo}>توییتر فارسی</Typography>
                </Grid>
                </Link>
                <Typography className={classes.titleHashtag}>
                    داغ ترین هشتگ ها
                </Typography>
            
                {
                    Hashtags.map((item) =>
                        <ButtonBase className={classes.parentHashTag} disableRipple = {true}>
                            <Link to={`/Hashtags/${item}`} style={{width:'100%'}}>
                            <Grid item container>
                                <img src={"/images/hashtag.png"} alt={"هشتگ ها"} />
                                <Typography className={classes.hashTag}>
                                    {item}
                                </Typography>
                            </Grid>
                            </Link>
                        </ButtonBase>
                    )
                }

            </Grid>
        </div>
    )
}
