import { Button, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { loginApi, registerApi } from '../../Api/api_auth';
import useStyle from './style';
import { toast } from 'react-toastify';

export default function Authpage() {
    const classes = useStyle();
    const LOGIN_TAB_VALUE = 1;
    const REG_TAB_VALUE = 2;
    const [tab, setTab] = useState(LOGIN_TAB_VALUE);
    const handleChange = (e, newValue) => {
        setTab(newValue);
    };
    const validationRegisters = (user) => {
        if (!user.name)
            return "لطفا نام خود را وارد کنید"
        if (!user.username)
            return "لطفا نام کاربری را وارد کنید "
        if (!user.password)
            return "لطفا رمز عبور را وارد کنید "
        if (user.password !== user.confpasswordRegister)
            return "لطفا رمز عبور را شبیه هم وارد کنید"
    };
    const validationLogin = (user) => {
        if (!user.username)
            return "لطفا نام کاربری را وارد کنید "
        if (!user.password)
            return "لطفا رمز عبور را وارد کنید "
    };
    /* login state */
    const [usernameLogin, setUsernameLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();
    /* Register state */
    const [usernameRegister, setUsernameRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();
    const [confpasswordRegister, setConfPasswordRegister] = useState();
    const [fullNameRegister, setFullNameRegister] = useState()

    const RegisterBtn = () => {
        const user = {
            username: usernameRegister,
            name: fullNameRegister,
            password: passwordRegister,
            confpasswordRegister: confpasswordRegister
        }
        const error = validationRegisters(user);
        if (error)
            return toast.warn(error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        user.confpasswordRegister = undefined;
        registerApi(user, (isOk, data) => {
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
            toast.success("با موفقیت ثبت نام کردید", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            window.location.reload();
        })
    };
    const LoginBtn = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin
        };
        const error = validationLogin(user);
        if (error)
            return toast.warn(error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        loginApi(user, (isOk, data) => {
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
            toast.success("با موفقیت وارد شدید", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            window.location.reload();
        })
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.container}>
                <Typography className={classes.headerText}>توییتر فارسی</Typography>
                {tab === LOGIN_TAB_VALUE &&
                    <div className={classes.Login}>
                        <input type="text" value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)} placeholder={"نام کاربری"} className={classes.input} />
                        <input type="password" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} placeholder={"رمز عبور"} className={classes.input} />
                        <Button variant="contained" onClick={LoginBtn} style={{ marginTop: '2.5rem', backgroundColor: '#5ea9dd', color: 'white', marginBottom: '2rem' }}>ورود</Button>
                    </div>
                }
                {tab === REG_TAB_VALUE &&
                    <div className={classes.Register}>
                        <input type="text" value={fullNameRegister} onChange={e => setFullNameRegister(e.target.value)} placeholder={"نام کامل"} className={classes.input}></input>
                        <input type="text" value={usernameRegister} onChange={e => setUsernameRegister(e.target.value)} placeholder={"نام کاربری"} className={classes.input}></input>
                        <input type="password" value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)} placeholder={"رمز عبور"} className={classes.input}></input>
                        <input type="password" value={confpasswordRegister} onChange={e => setConfPasswordRegister(e.target.value)} placeholder={"تکرار رمز عبور"} className={classes.input}></input>
                        <Button variant="contained" onClick={RegisterBtn} style={{ marginTop: '2.5rem', backgroundColor: '#5ea9dd', color: 'white', marginBottom: '2rem' }}>ثبت نام</Button>
                    </div>
                }
                <Tabs value={tab} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab} />
                    <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab} />
                </Tabs>
            </Paper>
        </div>
    )
}
