import { Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import setStyle from '../style'
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function TweetList({ data }) {
    var classes = setStyle()
    const renderTweet = (text) => {
        return { __html: text.replace(/#\S+/g, "<a href='/tags/$&' style ='color:cornflowerblue ; text-decoration: none'>$&</a>") }
    }
    return (
        <div className={classes.tweetList}>
            <Grid container>
                <img src={data.sender.img} alt={"عکس پروفایل"} style={{ height: 'max-content' }} />
                <Grid item container direction={"column"} style={{ flex: 1, marginRight: '1.3rem' }}>
                    <Grid item container>
                        <Typography className={classes.tweetListName}>{data.sender.name}</Typography>
                        <Typography className={classes.tweetListId}>{data.sender.id}</Typography>
                    </Grid>
                    <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText}></Typography>
                </Grid>

            </Grid>
            <Grid container direction={"row-reverse"} style={{ marginTop: '2rem' }}>
                <IconButton className={classes.newTweetimg} >
                    <img src={"/images/retweet.png"} alt={'ریتوییت'} />
                </IconButton>
                <IconButton className={classes.newTweetimg} >
                    <FavoriteIcon style={{ color: 'red' }} />
                </IconButton>
                <Typography className={classes.tweetLikeCount}>{data.like}</Typography>
            </Grid>
        </div>
    )
}
