import React, { Component } from 'react';
import items from "./data";
import Client from "./Contentful";

// Client.getEntries({
//     content_type: "beachResortRoomContentFul"
// }).then((response) => console.log(response.items));

const RoomContext = React.createContext();
//<RoomContext.Provider value={}

export default class RoomProvider extends Component {
    state ={
        rooms:[],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    // getData{}
    getData = async () => {
        try {
            // let response = await Client.getEntries({
            //     content_type: "beachResortRoomContentFul",
            //     order: 'sys.createdAt'
            //     //order:"feild.price"
            //     //order: "-field.price" for reverse order
            //     });
                
                // let rooms = this.formatData(response.items); 
                //we can only use this format after uploadin outr data on contentful
                let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true )
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading:false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getData()
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id}
            return room
        });
        return tempItems;
    }


    getRoom = (slug) =>  {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug);
        //find will find he match and an object yet filter will return an array we are just looking for 1 item
        return room;
    }


    handleChange = event => {
        // const type = event.target.type;
        const name = event.target.name;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked: target.value;
        //const value = event.target.value;
        
        this.setState({
            [name]: value
        }, this.filterRooms);
    }

    filterRooms = () => {
        // console.log('hello')
        let  {type, rooms, capacity, minSize, price, maxSize, breakfast, pets } = this.state
        // filter room type
        let tempRoom = [...rooms];
        if (type !== "all") {
            tempRoom = tempRoom.filter(room => room.type === type)
        }
        
        //filter room capacity
            capacity = parseInt(capacity)
            if (capacity !== 1) {
                tempRoom = tempRoom.filter(room => room.capacity >= capacity)
            }
        
        //filter rooms prices
            price = parseInt(price)
            tempRoom = tempRoom.filter(room => room.price <= price)
            
        //filter by room size
            tempRoom = tempRoom.filter(room => room.size >= minSize && room.size <= maxSize)
    
            //filter by breakfast
            if(pets) {
                tempRoom = tempRoom.filter(room => room.pets === true)
            }

            //filter by pets
            if(breakfast) {
                tempRoom =tempRoom.filter(room => room.breakfast === true)
            }
    
            //change state
        this.setState({
            sortedRooms: tempRoom
        });
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, 
                    getRoom: this.getRoom,
                    handleChange :this.handleChange
                    }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context ={value}/>}
        </RoomConsumer>
    }
}
/**You can us this higher heirarchy method whic is easy and it take 3 functions in one  */

export { RoomProvider, RoomConsumer, RoomContext } ;


