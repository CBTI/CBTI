import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import HomePage from './view/HomePage/HomePage'
import DetailPage from './view/DetailPage/DetailPage'

const App = () => {
    return(
    <HashRouter>
        <Route path="/" exact={true} component={HomePage}/>
        <Route path="/detail-page"  component={DetailPage}/>
    </HashRouter>
    )
}

export default App;