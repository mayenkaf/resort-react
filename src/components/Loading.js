import React from 'react'
import loadingGift from '../images/gif/loading-arrow.gif';
export default function Loading() {
    return (
        <div className="loading">
            <h4>Cargando datos de habitaciones...</h4>
            <img src={loadingGift} alt=""></img>
        </div>
    )
}
