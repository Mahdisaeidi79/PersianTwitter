import { ButtonBase, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import useStyle from './style';
import { Link } from 'react-router-dom';
import { getHashTags } from '../../Api/api_tweet';
import { useTweetDispatch, useTweetState, setHashtagsList } from '../../context/TweetContext';

const Rightsidebar = () => {
    const { hashtagsList: Hashtags } = useTweetState();
    const hastagsDispach = useTweetDispatch()
    useEffect(() => {
        getHashTags((isOk, data) => {
            if (!isOk)
                return alert("لیست هشتگ ها دریافت نشد");
            setHashtagsList(hastagsDispach, data)
        })
    }, []);
    const classes = useStyle()
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
                        <ButtonBase className={classes.parentHashTag} disableRipple={true}>
                            <Link to={`/Hashtags/${item.text}`} style={{ width: '100%' }}>
                                <Grid item container>
                                    <img src={"/images/hashtag.png"} alt={"هشتگ ها"} />
                                    <Typography className={classes.hashTag}>
                                        {item.text}
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
export default Rightsidebar;
