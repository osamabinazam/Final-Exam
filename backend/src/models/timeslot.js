const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeslotSchema = new Schema({
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Timeslot = mongoose.model('Timeslot', timeslotSchema);
