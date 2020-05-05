import React, { Fragment } from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import {Link} from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <Fragment>
            <Hero>
                <Banner title="Habitaciones de Lujo" 
                subtitle="habitaciones lujosas desde $299">
                    <Link to="/rooms" className="btn-primary">
                        Nuestras habitaciones
                    </Link>
                </Banner>
            </Hero>
            <Services></Services>
            <FeaturedRooms></FeaturedRooms>
        </Fragment>
        
    )
}


