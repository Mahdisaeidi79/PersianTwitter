import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/header/Header';
import TweetList from '../home/Components/TweetList';
import useStyle from './style';
import { getAllTweets } from '../../Api/api_tweet';

export default function TweetsByHashtag(prop) {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return alert("توییت ها بر اساس هشتگ دریافت نشد");
            setTweets(data)
        })
    }, []);
    var classes = useStyle()
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
