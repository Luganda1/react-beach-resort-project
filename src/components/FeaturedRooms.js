import React, { Component } from 'react'
import {RoomContext} from "../context";
import Loading from "./Loading";
import Rooms from "./Rooms";
import Title from "./Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        // const {name, greeting} = this.context;
        let { loading, featuredRooms: rooms} = this.context;
        // console.log(value)
        // console.log(rooms)

            rooms = rooms.map(room => {
                return <Rooms key={room.id} room={room} />
            });
            
        return (
            <section className="featured-rooms">
                {/* {greeting} {name} from FeaturedRooms */}
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading? <Loading/>:rooms}
                
                </div>
            </section>
        )
    }
}
