const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema ({

    lastname: {
        type: String,
        required: [true, 'lastname field required']
    },
    othernames: {
        type: String,
        required: [true, 'othername field required']
    },
    matric:{
        type: Number,
        required: [true, 'Matric No is required'],
    },
    faculty:{
        type: String,
        required: [true, 'Faulty field is required']
    },
    department:{
        type: String,
        required: [true, 'Department field is required']
    }

});

const Students = mongoose.model('studentres', studentSchema);

module.exports = Students;