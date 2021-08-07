import React from 'react'
import { useSelector } from 'react-redux';
import Page1 from './Page1';
import Page2 from './Page2';
const ScenarioPage = ({history}) => {
    const page = useSelector(state => state.upload.page);

    return (
        <>
            {
                page === 1 && <Page1 history={history}/>
            }        
            {
                page === 2 && <Page2/>
            }
        </>
    )
}

export default ScenarioPage
