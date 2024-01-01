
import './App.css';
import AvailableTimeSlot from './Components/AvailableTimeSlot';
import BookTimeSlot from './Components/BookTimeSlot';
import BookedAppointments from './Components/BookedAppointments';
import CreateTimeSlot from './Components/CreateTimeSlot';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <h1>Hello World</h1>


      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-timeslot" element={<CreateTimeSlot />} />
        <Route path="/book-timeslot" element={<BookTimeSlot />} />
        <Route path="/available-timeslots" element={<AvailableTimeSlot />} />
        <Route path="/booked-appointments" element={<BookedAppointments />} />
      </Routes>
      
    </div>
  );
}

export default App;
