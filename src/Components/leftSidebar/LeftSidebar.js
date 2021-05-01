import { ButtonBase, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useStyle from './style';
import { getUsers } from '../../Api/api_tweet';
import { uploadUserPhoto } from '../../Api/api_auth';
import { toast } from 'react-toastify';

const Tweetest = ({ name, id, img }) => {
    var classes = useStyle()
    return (
        <Grid container direction={"row"} className={classes.Tweetest}>
            <img src={img} alt={"عکس پروفایل"} style={{ width: 50 }} />
            <Grid item container className={classes.profileTweetests}>
                <Typography className={classes.profileName} style={{ direction: "rtl", fontWeight: 'bold' }}>{name}</Typography>
                <Typography className={classes.profileId} style={{ direction: "rtl" }}>{id}</Typography>
            </Grid>
        </Grid>
    )
}
const LeftSidebar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const inputFile = useRef();
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers((isOk, data) => {
            if (!isOk)
                return alert("لیست اعضا دریافت نشد");
            setUsers(data);
        })
    }, []);
    const setUserImg = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            }
            reader.readAsDataURL(e.target.files[0]);
            const formData = new FormData();
            formData.append("image", e.target.files[0]);
            console.log("Append");
            uploadUserPhoto(formData, (isOk, data) => {
                console.log("upload");
                if (!isOk)
                    return toast.error(data, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                else {
                     toast.success("عکس شما با موفقیت آپلود شد", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    localStorage.setItem("image", data.imagePath);
                }
            })
        }
    };
    const profileImg = () => {
        if (imagePath)
            return imagePath;
        if (localStorage.getItem("image") && localStorage.getItem("image") !== "undefined")
            return localStorage.getItem("image")
        return "/images/user-profiles.png"
    }

    var classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick={openMenu}>
                <img src={profileImg()} alt={"عکس پروفایل"} style={{ width: '48px', height: '45px', borderRadius: '50%' }} />
                <Grid item container className={classes.profile}>
                    <Typography className={classes.profileName}>{localStorage.getItem('name')}</Typography>
                    <Typography className={classes.profileId}>{localStorage.getItem('username')}</Typography>
                </Grid>
                <input ref={inputFile} type="file" style={{ display: 'none' }} onClick={setUserImg} />
            </Grid>
            <Grid item container className={classes.bestOfTweet} direction={"column"} >
                <Typography className={classes.titleBest} >
                    فعال ترین توییت بازها
            </Typography>
                <Divider style={{ margin: '0 -5% 0 -5%' }} />
                {
                    users.map((item, index) => {
                        return (
                            <React.Fragment>
                                <Link to={`/Users/${item.name}`}>
                                    <ButtonBase disableRipple={true}>
                                        <Tweetest name={item.name} id={item.id} img={item.img} />
                                    </ButtonBase>
                                </Link>
                                {
                                    index !== users.length - 1 && <Divider style={{ margin: '0 -5% 0 -5%' }} />
                                }
                            </React.Fragment>
                        )
                    })
                }
            </Grid>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => { inputFile.current.click(); setAnchorEl(null); }}>ویرایش عکس پروفایل </MenuItem>
                <MenuItem onClick={() => { localStorage.clear(); window.location.reload(); setAnchorEl(null); }}>خروج</MenuItem>
            </Menu>
        </div>
    )
}
export default LeftSidebar
