import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
// import Button from "../components/StyledHero";
import FeaturedRooms from "../components/FeaturedRooms"
export default function Home() {
    return (
        <React.Fragment>
        <Hero>
            <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at ugx 10,000/="
            >
                <Link to="/rooms/" className="btn-primary">our rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        {/* <Button>Yo mumy yo</Button> */}
        </React.Fragment>
    )
}

