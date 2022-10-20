import React from 'react';
import "../styles/Home.css"
import Homegrid from '../components/Homegrid';
import HomePortada from '../components/HomePortada';
import HomeNewsletter from '../components/HomeNewsletter';

const Home = () => {

    return (
        <>
            <HomePortada/>
            <HomeNewsletter/>
            <Homegrid/>
        </>
    );
}

export default Home;
