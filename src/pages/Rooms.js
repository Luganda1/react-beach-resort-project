import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom"
import RoomContainer from "../components/RoomContainer"

export default function Rooms() {
    return (
        <>
        <Hero hero="roomsHero">
                <Banner 
                title="our rooms">
                    <Link at='/' className="btn-primary">
                        ewasokelwako
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
            </>
    )
}


