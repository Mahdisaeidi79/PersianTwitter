import { Button, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { newTweetRequest } from '../../../Api/api_tweet';
import setStyle from '../style';

export default function NewTweet() {
    var classes = setStyle()
    const value = React.useRef()
    React.useEffect(() => {
        value.current.addEventListener('input' , (event) =>{
            console.log(event.target.value)
        })
    })
    const tweetBtn = ()=> {
        const tweetText = value.current.value;
        if(!tweetText) 
        return;
       const data ={
           id : Math.floor(Math.random()*1000),
        "sender": {
          "name": "M.M",
          "id": "M_M@",
          "img": "/images/xiaomi.png"
        },
        "text": tweetText,
        "like": "500"
      } 
      newTweetRequest(data , (isOk) =>{
          if(!isOk)
          return alert("توییت ثبت نشد")
          else alert("توییت با موفقیت ثبت شد")
      });
    }
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={"/images/user img.png"} alt={"عکس پروفایل"} style={{height: 'max-content' }} />
                 <textarea placeholder={"توییت جدید بزن ..."} className={classes.input} ref={value} /> 
            </Grid>
            <Grid container direction={"row-reverse"} style={{ marginTop: '2rem' }}>
                <Button variant={"contained"} className={classes.newTweetBtn} onClick={tweetBtn}>
                    توییت
                </Button>
                <IconButton className={classes.newTweetimg} >
                    <img src ={"./images/tweetpic.png"} alt = {'آپلود فایل'}/>
                </IconButton>
            </Grid>
        </div>
    )
}
