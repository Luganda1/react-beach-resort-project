import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from "./Title";


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title:"free cocktails / kokoteyilo",
                info: `Hamza nyambako ne cocktail mu luganda lol and is intended only for the recipient. 
                If you are not the named addressee, you should not disseminate, distribute or copy this e-mail.`
            },
            {
                icon: <FaHiking />,
                title:"Free Hiking / Okuwalampa ensozi",
                info: `This message contains confidential information and is intended only for the recipient. 
                If you are not the named addressee, you should not disseminate, distribute or copy this e-mail. `
            },
            {
                icon: <FaShuttleVan />,
                title:"Free Shuttle / taxi",
                info: `This message contains confidential information and is intended only for the recipient. 
                If you are not the named addressee, you should not disseminate, distribute or copy this e-mail.`
            },
            {
                icon: <FaBeer />,
                title:"omwenge bigere/ emandule",
                info: `This message contains confidential information and is intended only for the recipient. 
                If you are not the named addressee, you should not disseminate, distribute or copy this e-mail. `
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="service"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {return <article
                        key={index}
                        className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>})}
                </div>
            </section>
        )
    }
}
