import { ButtonBase, Grid } from '@material-ui/core';
import React from 'react';
import { Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import useStyle from './style';

export default function Rightsidebar() {
    var classes = useStyle()
    var hashTags = [
        "تحریم","سامسونگ","هلوسامر","پرچم_دار_جدید","کرونا_ویروس"]
    return (
        <div className = {classes.root}>
            <Grid container alignItems ={"center"} direction ={"row"}>
                <Grid item>
                <TwitterIcon className = {classes.logo}/>
                </Grid>
                <Grid item>
                <Typography className = {classes.textLogo}>توییتر فارسی</Typography>
                </Grid>
                <Typography className = {classes.titleHashtag}>
                    داغ ترین هشتگ ها 
                </Typography>
                {
                    hashTags.map((item) => 
                        <ButtonBase className = {classes.parentHashTag}>
                        <Grid item container>
                            <img src={"images/hashtag.png"} alt={"هشتگ ها"} />
                            <Typography className = {classes.hashTag}>
                                {item}
                            </Typography>
                        </Grid>
                     </ButtonBase>
                    )
                }
               
            </Grid>
        </div>
    )
}
