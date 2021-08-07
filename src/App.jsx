import React from 'react';
import { Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/configureStore';
import './root.scss';
import HomePage from './view/HomePage/HomePage';
import DetailPage from './view/DetailPage/DetailPage';
import LoginPage from './view/LoginPage/LoginPage';
import JoinPage from './view/JoinPage/JoinPage';
import GoogleLogin from './view/LoginPage/GoogleLogin';
import Upload from './view/Upload/Upload';
import QuestionPage from './view/QuestionPage/QuestionPage';
import ResultPage from './view/ResultPage/ResultPage';
import ScenarioPage from './view/Upload/UploadScenarioPage/ScenarioPage'

const App = () => {
    return(
    <>
        <ConnectedRouter history={history}>
            <Route exact path="/" component={HomePage}/>
            <Route path="/detail:id" component={DetailPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/join" component={JoinPage}/>
            <Route path="/GoogleLogin" component={GoogleLogin}/>
            <Route exact path="/upload" component={Upload}/>
            <Route path="/question:id" component={QuestionPage}/>
            <Route path="/result:id" component={ResultPage}/>
            <Route path="/upload/scenarioPage" component={ScenarioPage}/>
        </ConnectedRouter>
    </>
    )
}

export default App;