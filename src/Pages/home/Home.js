import { Divider } from '@material-ui/core';
import React, { useEffect} from 'react';
import Header from '../../Components/header/Header';
import HomeIcon from '@material-ui/icons/Home';
import NewTweet from './Components/NewTweet';
import TweetList from './Components/TweetList';
import useStyle from './style';
import { getAllTweets } from '../../Api/api_tweet';
import { useTweetState , useTweetDispatch , setTweetList} from '../../context/TweetContext';

export default function Home() {
   const {tweetList:tweets} = useTweetState()
   const tweetDispatch = useTweetDispatch();
    useEffect(() => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return alert("دریافت نشد");
             setTweetList(tweetDispatch,data);
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
