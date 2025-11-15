const mongoose = require('mongoose');

const monAnSchema = new mongoose.Schema({
    ten_mon: {
        type: String,
        required: true
    },
    mo_ta: {
        type: String
    },
    gia_ban: {
        type: Number,
        required: true
    },
    con_hang: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('MonAn', monAnSchema);