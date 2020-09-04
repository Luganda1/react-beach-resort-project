import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"

export default function Error() {
    return (
        <Hero >
            <Banner title="404" subtitle="page not found">
                <Link at="/rooms" className="btn-primary">Ebisulo byafe</Link> 
            </Banner>
        </Hero>
    )
}
