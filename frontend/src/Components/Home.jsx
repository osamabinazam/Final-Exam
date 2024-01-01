import React from 'react'
import { useNavigate  } from 'react-router-dom'


function Home() {

  const navigate = useNavigate();

  const gotoAvaiableTime = () => {
    navigate('/available-timeslots');
  }

  const gotoBookedTime = () => {
    navigate('/booked-timeslots');
  }

  const gotoBookTime = () => {
    navigate('/book-timeslot');
  }

  const gotoCreate = () => {
    navigate('/create-timeslot');
  }

  return (
    <div><h1>Home</h1> <br />

      <button onClick={gotoAvaiableTime}>Available Time Slots</button> <br />
      <button onClick={gotoBookedTime}>Booked Time Slots</button> <br />
      <button onClick={gotoBookTime}>Book Time Slot</button> <br />
      <button onClick={gotoCreate}>Create Time Slot</button> <br />
    
    </div>

  )
}

export default Home