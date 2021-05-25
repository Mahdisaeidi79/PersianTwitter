import { Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/header/Header';
import TweetList from '../home/Components/TweetList';
import useStyle from '../home/style';
import PesonIcon from '@material-ui/icons/Person';
import { getAllTweetsByUser } from '../../Api/api_tweet';
import { useLocation } from 'react-router-dom';

const TweetsByUser = (props) => {

    const location = useLocation()
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        getAllTweetsByUser(props.match.params.id, (isOk, data) => {
            if (!isOk)
                return alert("توییت ها دریافت نشد!!!");
            else return setTweets(data);
        })
    }, [location]);
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Header title={props.match.params.name} icon={<PesonIcon style={{ fontSize: 25 }} />} />
            <Divider className={classes.divider} />
            {tweets.length === 0 &&<Typography>توییتی برای این کاربر یافت نشد !!</Typography>}
            {
                tweets.map((item) => <TweetList data={item} />)
            }
        </div>
    )
}
export default TweetsByUser;