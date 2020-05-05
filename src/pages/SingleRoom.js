import React, { Component, Fragment } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType=RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (
            <div className="error">
                <h3>No existe la habitacion</h3>
                <Link to="/rooms" className="btn-primary">
                    Volver a Habitaciones
                </Link>
            </div>
            )
        }
        const {name, description,capacity,size,price,extras,breakfast,pets,images}=room;
        const [mainImg, ...defaultImg] = images;
        return (
            <Fragment>
            <StyledHero img={ mainImg || this.state.defaultBcg }>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Volver a Habitaciones
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {
                        defaultImg.map((item,index)=>{
                            return <img key={index} src={item} alt={name}></img>
                        })
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Detalles</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Información</h3>
                        <h6>precio: ${price}</h6>
                        <h6>tamaño: {size} SQFT</h6>
                        <h6>
                            max capacidad: {
                                capacity > 1? `${capacity} personas`:`${capacity} persona`
                            }
                        </h6>
                        <h6>
                            mascotas: {
                                pets? "se permite mascotas" : "no se permite mascotas"
                            }
                        </h6>
                        <h6>
                            {breakfast && "desayuno gratis incluido"}
                        </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </Fragment>
        )
    }
}
