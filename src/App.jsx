import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import HomePage from './view/HomePage/HomePage'

const App = () => {
    return(
        <HomePage/>
    // <HashRouter>     // 이 부분은 나중에 페이지수가 많아지면 활성화될 예정이다.
    //     <Route path="/" exact={true} component={HomePage}/>
    // </HashRouter>
    )
}

export default App;