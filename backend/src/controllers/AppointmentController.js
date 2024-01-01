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
exports.appointment_create = function (req, res) {
    res.send('NOT IMPLEMENTED: appointment create');
};