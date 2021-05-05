import { Divider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import LeftSidebar from '../leftSidebar/LeftSidebar';
import Rightsidebar from '../rightsidebar/Rightsidebar';
import useStyle from './style';
import { getProfileRequest } from '../../Api/api_tweet';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';


const Layout = (props) => {
    const classes = useStyle()
    const [wait, setWait] = useState(true)
    const history = useHistory();
    useEffect(() => {
        getProfileRequest((isOk, data) => {
            if (!isOk) {
                toast.warn(data);
                localStorage.clear();
                return history.push('/login')
            }
            else
                setWait(false);
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
        })
    }, []);
    if (wait)
        return <div className={classes.waitParent}>
            <ReactLoading type={'spinningBubbles'} color={'#5ea9dd'} height={'4%'} width={'4%'} />
        </div>
    else
        return (
            <div className={classes.root}>
                <Rightsidebar />
                <Divider orientation={"vertical"} className={classes.divider} />
                <div className={classes.container}>
                    {props.children}
                </div>
                <Divider orientation={"vertical"} className={classes.divider} />
                <LeftSidebar />
            </div>

        )
}
export default Layout;