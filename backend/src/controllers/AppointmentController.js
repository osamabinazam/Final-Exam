const  Appointment= require( '../models/appointments');


exports.appointment_list = async function (req, res) {
    // Find all appointments and return json response
    try {
        const appointments = await Appointment.find();
    if (!appointments) {
        return res.status(500).send({
            message: "Error getting timeslots"
        });
    }
    res.status(200).send(appointments);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving timeslots."
        });
    }
    
};

// Create an appointment
exports.appointment_create =  async function (req, res) {
    const data = req.body;
    console.log(data);

    if (!data) {
        return res.status(400).send({
            message: "Timeslot can not be empty"
        });
    }

    if (!data.fullname) {
        return res.status(400).send({
            message: "Timeslot start time can not be empty"
        });
    }

    if (!data.timeslot) {
        return res.status(400).send({
            message: "Timeslot end time can not be empty"
        });
    }

    const appointment = new Appointment(
        {
           name: data.fullname,
           timeslot: data.timeslot,
           email: data.email
        }
   );

   console.log(appointment)
    try{
        const createdAppointment = await appointment.save();
        if (!createdAppointment) {
            return res.status(500).send({
                message: "Error creating appointment"
            });
        }
        res.status(200).send(createdAppointment);
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the appointment."
        });
    }
};