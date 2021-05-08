import { ButtonBase, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useStyle from './style';
import { getUsers } from '../../Api/api_tweet';
import { uploadUserPhoto } from '../../Api/api_auth';
import { toast } from 'react-toastify';

const Tweetest = ({ name, id, img }) => {
    const classes = useStyle()
    const userImage = () => {
        if (img)
            return img;
        else return "images/person.png"
    }
    return (
        <Grid container direction={"row"} className={classes.Tweetest}>
            <img src={userImage()} alt={"عکس پروفایل"} className={classes.profileImgTweetest} />
            <Grid item container direction={"column"} className={classes.profileTweetests}>
                <Typography className={classes.profileNameTweetest}>{name}</Typography>
                <Typography className={classes.profileIdTweetest}>{id}@</Typography>
            </Grid>
        </Grid>
    )
}
const LeftSidebar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const inputFile = useRef();
    const [users, setUsers] = useState([]);
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    useEffect(() => {
        getUsers((isOk, data) => {
            if (!isOk)
                return alert("لیست اعضا دریافت نشد");
            setUsers(data);
        })
    }, []);
    const setUserImg = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0])
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
            const formData = new FormData();
            formData.append("image", e.target.files[0]);
            uploadUserPhoto(formData, (isOk, data) => {
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
                window.location.reload();
            })
        }
    };
    const profileImg = () => {
        if (imagePath)
            return imagePath;
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
            return localStorage.getItem("image");
        return "/images/user-profiles.png"
    };

    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick={openMenu}>
                <img src={profileImg()} alt={"عکس پروفایل"} className={classes.profileImg} />
                <Grid item container className={classes.profile}>
                    <Typography className={classes.profileName}>{localStorage.getItem('name')}</Typography>
                    <Typography className={classes.profileId}>{"@"+localStorage.getItem('username')}</Typography>
                </Grid>
                <input ref={inputFile} type={'file'} style={{ display: 'none' }} onChange={setUserImg} />
            </Grid>
            <Grid item container className={classes.bestOfTweet} direction={"column"} >
                <Typography className={classes.titleBest} >
                    فعال ترین توییت بازها
            </Typography>
                <Divider className={classes.divider} />
                {
                    users.map((item, index) => {
                        return (
                            <React.Fragment>
                                <Link to={`/Users/${item._id}/${item.name}`}>
                                    <ButtonBase disableRipple={true}>
                                        <Tweetest name={item.name} id={item.username} img={item.image} />
                                    </ButtonBase>
                                {
                                    index !== users.length - 1 && <Divider className={classes.divider} />
                                }
                                </Link>
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
export default LeftSidebar;
