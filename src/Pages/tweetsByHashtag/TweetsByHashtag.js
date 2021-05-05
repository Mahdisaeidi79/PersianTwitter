import { Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import Header from '../../Components/header/Header';
import TweetList from '../home/Components/TweetList';
import useStyle from '../home/style';
import { getAllTweetsByHashtag } from '../../Api/api_tweet';
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';
import { useLocation } from 'react-router-dom'

const TweetsByHashtag = (prop) => {
    const location = useLocation();
    const { tweetList: tweets } = useTweetState()
    const tweetDispatch = useTweetDispatch();
    useEffect(() => {
        getAllTweetsByHashtag(prop.match.params.Hashtag, (isOk, data) => {
            if (!isOk)
                return alert("توییت ها بر اساس هشتگ دریافت نشد");
            else return setTweetList(tweetDispatch, data)
        })
    }, [location]);
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Header title={prop.match.params.Hashtag} icon={<img src={"/images/hashtag.png"} alt={"hastag"} />} />{/* react router param */}
            <Divider className={classes.divider} />
            {
                tweets.map((item) => <TweetList data={item} />)
            }
            <reload />
        </div>
    )
}
export default TweetsByHashtag;