// Import Timeslot model
const Timeslot = require('../models/timeslot');


// Get all timeslots
exports.timeslot_list = async function (req, res) {
    // Find all timeslots and return json response


    try {
        const timeslots = await Timeslot.find();
    if (!timeslots) {
        return res.status(500).send({
            message: "Error getting timeslots"
        });
    }
    res.status(200).send(timeslots);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving timeslots."
        });
    }

    
};

// Create a timeslot
exports.timeslot_create = async function (req, res) {
    const data = req.body;
    console.log(data);

    if (!data) {
        return res.status(400).send({
            message: "Timeslot can not be empty"
        });
    }

    if (!data.start) {
        return res.status(400).send({
            message: "Timeslot start time can not be empty"
        });
    }

    if (!data.end) {
        return res.status(400).send({
            message: "Timeslot end time can not be empty"
        });
    }

   const timeslot = new Timeslot(
         {
            startTime: data.start,
            endTime: data.end
         }
    );

    console.log(timeslot)
    try{

    const createdTime = await timeslot.save();
    if (!createdTime) {
        return res.status(500).send({
            message: "Error creating timeslot"
        });
    }
    res.status(200).send(timeslot);
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the timeslot."
        });
    }
    
};
