import React from 'react';
import Layout from './layout/Layout';
import Home from '../Pages/home/Home';
import TweetsByHashtag from '../Pages/tweetsByHashtag/TweetsByHashtag';
import TweetsByUser from '../Pages/tweetsByUser/TweetsByUser';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page404 from '../Pages/Page404/Page404';
export default function App() {
    return (
        <BrowserRouter>
            <Route path={"/"} render={() => {
                return <Layout> {/* HOC */}
                    <Switch> {/* به صورت خط اجرا میکند و هرگاه یک روت برابر شد بقیه را اجرا نمیکند */}
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/Hashtags/:Hashtag"} component={TweetsByHashtag} /> {/* react router param */}
                        <Route exact path={"/Users/:User"} component={TweetsByUser} /> {/* react router param */}
                        <Route component={Page404} />
                    </Switch>
                </Layout>
                }} />
        </BrowserRouter>
    )
}
