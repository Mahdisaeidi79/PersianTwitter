import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/header/Header';
import HomeIcon from '@material-ui/icons/Home';
import NewTweet from './Components/NewTweet';
import TweetList from './Components/TweetList';
import useStyle from './style';
import { getAllTweets } from '../../Api/api_tweet';

export default function Home() {
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return alert("دریافت نشد");
            else return setTweets(data)
        })
    }, []);
    var classes = useStyle()
    return (
        <div className={classes.root}>
            <Header title={"خانه"} icon={<HomeIcon style={{ fontSize: 25 }} />} />
            <Divider className={classes.divider} />
            <NewTweet />
            {
                tweets.map((item) => <TweetList data={item} />)
            }
        </div>
    )
}
