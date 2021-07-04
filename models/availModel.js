const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    doctor_id: {
        type: String,
    },

    //availibility
    availability: {
        sun: {
            enabled: {
                type: Boolean,
            },
            timing: []
        },
        mon: {
            enabled: {
                type: Boolean,
            },
            timing: []
        },
        tue: {
            enabled: {
                type: Boolean,
            },
            timing: []
        },
        wed: {
            enabled: {
                type: Boolean,
            },
            timing: []
        },
        thu: {
            enabled: {
                type: Boolean,
            },
            timing: []
        },
        fri: {
            enabled: {
                type: Boolean,
            },
            timing: []
        },
        sat: {
            enabled: {
                type: Boolean,
            },
            timing: []
        },
    }
});

module.exports = mongoose.model('Availability', dataSchema); 
