import { Grid, IconButton, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyle from '../style'
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import { likeTweet, setTweetText, useTweetDispatch } from '../../../context/TweetContext';
import { likeTweetRequest } from '../../../Api/api_tweet';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const TweetList = ({ data }) => {
    const tweetDispatch = useTweetDispatch();
    const [clicked, setClicked] = useState(false)
    const classes = useStyle()
    const renderTweet = (text) => {
        return { __html: text.replace(/#\S+/g, "<a href='/tags/$&' style ='color:cornflowerblue ; text-decoration: none'>$&</a>") }
    };
    const userImage = () => {
        if (data.user.image)
            return data.user.image;
        else return "images/person.png"
    };
    const retweetBtn = () => {
        setTweetText(tweetDispatch, data.text);
    };
    const likeBtn = () => {
        likeTweetRequest(data._id, (isOk, data) => {
            if (!isOk)
                return toast.error(data);
            likeTweet(tweetDispatch, data._id);
            setClicked(true);
        });
    }
    return (
        <div className={classes.tweetList}>
            <Grid container>
                <img src={userImage()} alt={"عکس پروفایل"} style={{ height: '3.75rem', width: '3.75rem', borderRadius: '50%' }} />
                <Grid item container direction={"column"} style={{ flex: 1, marginRight: '1.3rem' }}>
                <Link to={`/Users/${data.user._id}/${data.user.name}`}>
                    <Grid item container>
                        <Typography className={classes.tweetListName}>{data.user.name}</Typography>
                        <Typography className={classes.tweetListId}>{data.user.username+"@"}</Typography>
                    </Grid>
                 </Link>   
                    <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText}></Typography>
                    {
                        data.image &&
                        <div>
                            <div style={{ backgroundImage: `url(${data.image})`, width: '18.75rem', height: '9.375rem', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',marginTop: '2rem' }} />
                        </div>
                    }
                </Grid>

            </Grid>
            <Grid container direction={"row-reverse"} style={{ marginTop: '2rem' }}>
                <IconButton className={classes.retweetBtn} onClick={retweetBtn}>
                    <img src={"/images/retweet.png"} alt={'ریتوییت'} />
                </IconButton>
                <IconButton className={classes.likeBtn} onClick={likeBtn}>
                {clicked ? <FavoriteSharpIcon style={{color:'red'}}/> : <FavoriteBorderSharpIcon />}
                </IconButton>
                <Typography className={classes.tweetLikeCount}>{data.likes}</Typography>
            </Grid>
        </div>
    )
}
export default TweetList;