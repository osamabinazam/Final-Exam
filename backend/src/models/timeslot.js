const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeslotSchema = new Schema({
    startTime: {
        type: String,
    },
    endTime: {
        type: String,

    }
}, {
    timestamps: true
});


const Timeslot = mongoose.model('Timeslot', timeslotSchema);
module.exports = Timeslot;
