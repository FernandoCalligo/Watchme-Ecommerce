import React from 'react';
import "../styles/Home.css"
import Homegrid from '../components/Homegrid';
import HomePortada from '../components/HomePortada';
import HomeNewsletter from '../components/HomeNewsletter';
import Productos from './Productos';

const Home = () => {

    return (
        <>
            <HomePortada/>
            <Homegrid/>
            <HomeNewsletter/>
            <Productos/>
        </>
    );
}

export default Home;
