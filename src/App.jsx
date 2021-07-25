import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './view/HomePage/HomePage';
import DetailPage from './view/DetailPage/DetailPage';
import NotFoundPage from './view/NotFoundPage/NotFoundPage';
import LoginPage from './view/LoginPage/LoginPage';
import JoinPage from './view/JoinPage/JoinPage';
import GoogleLogin from './view/LoginPage/GoogleLogin';
import Upload from './view/Upload/Upload';

const App = () => {
    return(
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/detail-page" component={DetailPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/join" component={JoinPage}/>
        <Route path="/GoogleLogin" component={GoogleLogin}/>
        <Route path="/upload" component={Upload}/>
        <Route component={NotFoundPage}/>
    </Switch>
    )
}

export default App;