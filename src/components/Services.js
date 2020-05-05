import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"Cocktail Gratis",
                info:"Agradable mezcla de sabores orientales con un toque de limon"
            },
            {
                icon:<FaHiking></FaHiking>,
                title:"Senderismo sin fin",
                info:"Nuestras montañas lo están esperando"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Transporte gratuito",
                info:"A todo lugar en cualquier momento, nosotros te llevamos"
            },
            {
                icon:<FaBeer/>,
                title:"Cerveza intensa",
                info:"El lupulo y el agua más rico del mundo, esta aquí"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
