import { Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import setStyle from '../style'
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function TweetList({ data }) {
    var classes = setStyle()
    const renderTweet = (text) => {
        return { __html: text.replace(/#\S+/g, "<a href='/tags/$&' style ='color:cornflowerblue ; text-decoration: none'>$&</a>") }
    };
    const userImage = () => {
        if (data.user.image)
            return data.user.image;
        else return "images/person.png"
    }
    return (
        <div className={classes.tweetList}>
            <Grid container>
                <img src={userImage()} alt={"عکس پروفایل"} style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
                <Grid item container direction={"column"} style={{ flex: 1, marginRight: '1.3rem' }}>
                    <Grid item container>
                        <Typography className={classes.tweetListName}>{data.user.name}</Typography>
                        <Typography className={classes.tweetListId}>{data.user.id}</Typography>
                    </Grid>
                    <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText}></Typography>
                    {
                        data.image &&
                        <div>
                    <div style = {{backgroundImage : `url(${data.image})` , width :'300px' , height :'150px' , backgroundSize:'contain' , backgroundRepeat : 'no-repeat'}} />
                        </div>
                    }
                </Grid>

            </Grid>
            <Grid container direction={"row-reverse"} style={{ marginTop: '2rem' }}>
                <IconButton className={classes.newTweetimg} >
                    <img src={"/images/retweet.png"} alt={'ریتوییت'} />
                </IconButton>
                <IconButton className={classes.newTweetimg} >
                    <FavoriteIcon style={{ color: 'red' }} />
                </IconButton>
                <Typography className={classes.tweetLikeCount}>{data.likes}</Typography>
            </Grid>
        </div>
    )
}
