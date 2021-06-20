import React from 'react';
import MenuBar from '../menu/MenuBar'
import Cards from './Cards'
import SearchBox from '../searchBox/SearchBox';

const HomePage = () => {
    return(
        <>
            <MenuBar />
            <Cards />
            <SearchBox />
        </>
    )
}

export default HomePage;