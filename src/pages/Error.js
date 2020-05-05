import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
export default function () {
    return (
        <Hero>
            <Banner title="404" subtitle="Pagina not found">
                <Link to="/" className="btn-primary">Volver a Home</Link>
            </Banner>
        </Hero>
    )
}
