import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer'
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Nuestra Habitaciones">
                <Link to="/" className="btn-primary">
                    Volver a Home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer></RoomContainer>
        </>
    )
}
export default Rooms;