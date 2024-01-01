import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

function AvailableTimeSlot() {


    const navigate = useNavigate();
    const [timeslots, setTimeslots] = useState([]);

    const handleClick = () => {
        navigate('/booked-timeslots');
    }

    const getTimeslots = () => {  
        axios.get('http://localhost:8080/slots').then((response) => {
            console.log(response.data);
            setTimeslots(response.data);
        }
        ).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getTimeslots();
    }
    ,[]);


  return (
    <div>
        <h1 className='text-3xl font-bold underline' > Available Time Slots</h1>
        <div className="flex flex-wrap">
            {timeslots.map((timeslot) => (
                <div className="w-1/3 p-2" id={timeslot._id} >
                    <div className="border-solid border-4 border-light-blue-500 rounded-lg">
                        <div className="p-2">
                            <h2 className="text-xl font-bold">{timeslot.startTime} - {timeslot.endTime}</h2>
                               {/* Define a button to navigae home */}
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                                    Book
                                </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>    

        
    </div>
  )
}

export default AvailableTimeSlot;