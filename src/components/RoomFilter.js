import React from 'react'; 
import {useContext} from "react";
import {RoomContext} from "../context";
import Title from "../components/Title";

//Getting all unique values
    let getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]
    }

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);

    const {
        handleChange,
        type,
        price,
        capacity,
        minPrice,
        maxPrice, 
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    //get unique value
    let types = getUnique(rooms, "type");
    //set types
    types = ['all', ...types];

    let people = getUnique(rooms, 'capacity')


    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/*Select type  */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                    name="type" 
                    id="type" 
                    value={type} 
                    className="form-control"
                    onChange={handleChange}
                    >
                        {/* <option value="single">single</option> */}
                        {types.map((item, index) => {
                            return <option value={item} key={index} >{item}</option>
                        })}
                    </select>
                </div>
                {/*end select type  */}

                {/*Guest  */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                    name="capacity" 
                    id="capacity" 
                    value={type} 
                    className="form-control"
                    onChange={handleChange}
                    >
                        {people.map((item, index) => {
                            return <option value={item} key={index} >{item}</option>
                        })}
                    </select>
                </div>
                {/*end Guests */}

            {/* room price */}
                <div className="form-group">
                    <label htmlFor="price"> room price ${price}</label>
                    <input 
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        className="form-control"
                        value={price}
                        id="price"
                        onChange={handleChange}
                    />
                </div>
            {/* end room price */}

            {/* size  */}
            <div className="form-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                    <input 
                        type="number"
                        name="minSize"
                        id="size"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                    />
                    <input 
                        type="number"
                        name="maxSize"
                        id="size"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                    />
                </div>
            </div>
            {/* end size  */}

            {/* extras */}
            <div className="form-group">
                <div className="single-extra">
                <input 
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                />
                <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                <input 
                    type="checkbox"
                    name="pets"
                    id="pets"
                    checked={pets}
                    onChange={handleChange}
                />
                <label htmlFor="pets">pets</label>
                </div>
            </div>
            </form>

        </section>
    )
}
