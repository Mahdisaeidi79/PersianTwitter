import React from 'react';
import Layout from './layout/Layout';
import Home from '../Pages/home/Home';
import TweetsByHashtag from '../Pages/tweetsByHashtag/TweetsByHashtag';
import TweetsByUser from '../Pages/tweetsByUser/TweetsByUser';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Page404 from '../Pages/Page404/Page404';
import Authpage from '../Pages/auth/Authpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TweetProvider } from '../context/TweetContext';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute exact path={"/login"} component={Authpage} />
                    <PrivateRoute path={"/"} render={() => {
                        return <TweetProvider>
                            <Layout> {/* HOC */}
                                <Switch> {/* به صورت خط اجرا میکند و هرگاه یک روت برابر شد بقیه را اجرا نمیکند */}
                                    <Route exact path={"/"} component={Home} />
                                    <Route exact path={"/Hashtags/:Hashtag"} component={TweetsByHashtag} /> {/* react router param */}
                                    <Route exact path={"/Users/:id/:name"} component={TweetsByUser} /> {/* react router param */}
                                    <Route component={Page404} />
                                </Switch>
                            </Layout>
                        </TweetProvider>
                    }} />
                </Switch>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
};
const isLogin = () => !!localStorage.getItem("x-auth-token")
const PublicRoute = ({ component, ...props }) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={"/"} />
        else
            return React.createElement(component, props)
    }} />

};
const PrivateRoute = ({ render, ...props }) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return render(props)
        else
            return <Redirect to={"/login"} />
    }} />
};

export default App;