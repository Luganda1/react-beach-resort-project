import React, { Component } from 'react';
import defualtBcg from "../images/room-2.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRooms extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defualtBcg
        }
    }

    static contextType = RoomContext;
    // componentDidMount() {}

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        // console.log(room)
            if(!room) {
                return <div className="error">
                    <h3>No such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">Dayo ku rooms </Link>
                </div>
            }
            const {
                name, 
                description,
                capacity,
                size,
                price,
                extras,
                breakfast,
                pets,
                images
            } = room

            const[mainImg, ...otherImg] = images
        return (
            <>
            <StyledHero img={mainImg || this.state.defualtBcg}>
            <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
            back to rooms
            </Link>
            </Banner>
            </StyledHero>

            <section className="single-room">
                <div className="single-room-images">
                    {otherImg.map((item, index) => {
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price : $ {price}</h6>
                        <h6>Size : {size} SQFT</h6>
                        <h6>
                            Max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>
                            {pets ? "Pets Allowed" : "No Pets"}
                        </h6>
                        <h6>
                            {breakfast && `free Breakfast Included`  }
                        </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

