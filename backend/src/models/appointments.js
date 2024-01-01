const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: {
        type: String,
        
    },
    timeslot: {
        type: String,
        
    },
    email: {
        type: String,
        
    }
}, {
    timestamps: true
});

const Timeslot = mongoose.model('Appointments', appointmentSchema);

module.exports = Timeslot;
