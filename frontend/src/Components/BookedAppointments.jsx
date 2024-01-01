import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';






function BookedAppointments() {

    const [appointments, setAppointments] = useState([]);



    useEffect(() => {
       axios.get('http://localhost:8080/appointments').then((response) => {
              console.log(response.data);
                setAppointments(response.data);
         }
         ).catch((error) => {
             console.log(error);
         });

    }
    ,[]);

  return (
    <div>
        <h1 className="text-3xl font-bold underline" >Booked Appointments</h1> <br />
        <div className="flex flex-wrap">
            {appointments.map((appointment) => (
                <div className="w-1/3 p-2" id={appointment._id} >
                    <div className="border-solid border-4 border-light-blue-500 rounded-lg">
                        <div className="p-2">
                            <h2 className="text-xl font-bold">{appointment.name}</h2>
                            <p className="text-md">{appointment.email}</p>
                            <p className="text-md">{appointment.timeslot}</p>   
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}


export default BookedAppointments