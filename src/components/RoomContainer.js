import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import Loading from './Loading'
import {withRoomConsumer} from '../Context'

function RoomContainer({context}){
    const {loading, sortedRooms,rooms} = context;
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <RoomFilter rooms={rooms}></RoomFilter>
            <RoomList rooms={sortedRooms}></RoomList>
        </div>      
    )
}
export default withRoomConsumer(RoomContainer);

/*
import {RoomConsumer} from '../Context';
export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value)=>{
                    console.log(value);
                    const {loading, sortedRooms, rooms} = value;
                    if(loading){
                        return <Loading/>
                    }
                    return (
                    <div>
                        Hola desde el contenedor de rooms
                        <RoomFilter rooms={rooms}></RoomFilter>
                        <RoomList rooms={sortedRooms}></RoomList>
                    </div>
                )}
            }
        </RoomConsumer>
    )
}
*/