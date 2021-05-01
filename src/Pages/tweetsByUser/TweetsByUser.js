import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/header/Header';
import TweetList from '../home/Components/TweetList';
import useStyle from './style';
import PesonIcon from '@material-ui/icons/Person';
import { getAllTweets } from '../../Api/api_tweet';

export default function TweetsByUser(props) {
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return alert("توییت ها دریافت نشد!!!");
            else return setTweets(data);
        })
    }, []);
    var classes = useStyle()
    return (
        <div className={classes.root}>
            <Header title={props.match.params.User} icon={<PesonIcon style={{ fontSize: 25 }} />} />
            <Divider className={classes.divider} />
            {
                tweets.map((item) => <TweetList data={item} />)
            }
        </div>
    )
}
