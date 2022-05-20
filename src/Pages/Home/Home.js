import React from 'react';
import Info from './Info';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div className='px-16'>
            <TopBanner></TopBanner>
            <Info></Info>
        </div>
    );
};

export default Home;