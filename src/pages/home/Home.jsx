<<<<<<< HEAD
import React from 'react'
import NavBar from '../../components/nav/NavBar'


const Home = () => {
    return (
        <div>
            <NavBar />
            <h1>Home</h1>
        </div>
    )
}

export default Home
=======
import NavBar from '../../components/nav/NavBar';
import {Container} from "../../components/styles/Home-styles";

const Home = () => {
    return (
        <Container>
            <NavBar />
            
        </Container>
    )
}

export default Home;
>>>>>>> master
