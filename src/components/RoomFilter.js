import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

const getUnique = (items, value)=>{
    return [...new Set(items.map(item=>item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context;
    //obtener tipos unicos
    let types = getUnique(rooms, 'type');
    //agregar todos
    types = ['all',...types];
    //map to jsx
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Busqueda de Habitaciones"></Title>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Tipo de Habitacion</label>
                    <select 
                    name="type" 
                    id="type" 
                    value={type} 
                    className="form-control"
                    onChange={handleChange}
                    >{types}</select>
                </div>
                {/* end select type*/}
                {/*select capacity*/}
                <div className="form-group">
                    <label htmlFor="capacity">Capacidad</label>
                    <select
                    name="capacity"
                    id="capacity"
                    value={capacity}
                    className="form-control"
                    onChange={handleChange}
                    >
                    {people}
                    </select>
                </div>
                {/*end select capacity */}
                {/* room by price */}
                <div className="form-group">
                    <label htmlFor="price">
                        Precio por ${price}
                    </label>
                    <input
                    type="range"
                    name="price"
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price}
                    onChange={handleChange}
                    className="form-control"
                    >
                    </input>
                </div>
                {/* end room by price*/}
                {/* room by size */}
                <div className="form-group">
                    <label htmlFor="size">Tamaño Habitacion</label>
                    <div className="size-inputs">
                        <input
                        type="number"
                        name="minSize"
                        id="size"
                        value={minSize}
                        onChange={handleChange}
                        className="size-input"
                        ></input>
                        <input
                        type="number"
                        name={maxSize}
                        id="size"
                        value={maxSize}
                        onChange={handleChange}
                        className="size-input"
                        >
                        </input>
                    </div>
                </div>
                {/* end room by size */}
                {/*room by extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="breakfast"
                        id="breakfast"
                        checked={breakfast}
                        onChange={handleChange}
                        ></input>
                        <label>Desayuno</label>
                    </div>
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="pets"
                        id="pets"
                        checked={pets}
                        onChange={handleChange}
                        ></input>
                        <label htmlFor="pets">Mascotas</label>
                    </div>
                </div>
                {/*end room by extras */}
            </form>
        </section>
    )
}
