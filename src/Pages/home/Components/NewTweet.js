import { Button, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import { newTweetRequest } from '../../../Api/api_tweet';
import setStyle from '../style';
import { toast } from 'react-toastify';

export default function NewTweet() {
    var classes = setStyle()
    const value = React.useRef()
    const inputFile = React.useRef();
    const [imageFile, setImageFile] = React.useState();
    const [imagePath, setImagePath] = React.useState();
    const tweetBtn = ()=> {
        const tweetText = value.current.value;
        if(!tweetText) 
        return;
    
      const formData = new FormData();
      formData.append("text", tweetText);
      if (imageFile)
        formData.append("image", imageFile);
      newTweetRequest(formData , (isOk) =>{
          if(!isOk)
          return toast.error("توییت ثبت نشد", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
          else {
              toast.success("توییت با موفقیت ثبت شد", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
              window.location.reload()
              value.current.value = ""
            }
      });
    };
    const imageInTweet = (e)=> {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
      
            const reader = new FileReader();
            reader.onload = (e) => {
              setImagePath(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
          }
      }
    const profileImg = () => {
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
        return localStorage.getItem("image");
      return "/images/person.png"
    }
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={profileImg()} alt={"عکس پروفایل"} style={{height: '60px' , width: '60px' ,borderRadius :'50%'}} />
                 <textarea placeholder={"توییت جدید بزن ..."} className={classes.input} ref={value} /> 
                 <input type = {"file"} style = {{display :'none'}} ref={inputFile} onChange={imageInTweet} />
            </Grid>
            {
                imagePath && 
                <div>
                    <div style = {{backgroundImage : `url(${imagePath})` , width :'300px' , height :'150px' , backgroundSize:'contain' , backgroundRepeat : 'no-repeat'}} />
                </div>    
            }
            <Grid container direction={"row-reverse"} style={{ marginTop: '2rem' }}>
                <Button variant={"contained"} className={classes.newTweetBtn} onClick={tweetBtn}>
                    توییت
                </Button>
                <IconButton className={classes.newTweetimg} onClick = {()=> inputFile.current.click()}>
                    <img src ={"./images/tweetpic.png"} alt = {'آپلود فایل'}/>
                </IconButton>
            </Grid>
        </div>
    )
}
