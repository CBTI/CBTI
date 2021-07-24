import React from 'react';
import MenuBar from '../menu/MenuBar'
import Cards from './Cards'
import SearchBox from '../searchBox/SearchBox';
import UpButton from '../../Component/UpButton'
const HomePage = () => {
    return(
        <>
            <MenuBar />
            <Cards />
            <SearchBox />
            {/* <UpButton /> */}
        </>
    )
}

export default HomePage;