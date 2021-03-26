const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    PetName: {
        type: String,
        required: [true, "Pet name must be filled out!"],
        minLength : [3, 'Must be at least 3 characters long'],
        unique: true
    },
    PetType: {
        type: String,
        required: [true, "Pet type must be filled out!"],
        minLength : [3, 'Must be at least 3 characters long']
    },
    PetDesc: {
        type: String,
        required: [true, "Description of the pet must be filled out!"],
        minLength : [3, 'Must be at least 3 characters long']
    },
    PetSkill1: {
        type: String,
        required: [false]
    },
    PetSkill2: {
        type: String,
        required: [false]
    },
    PetSkill3: {
        type: String,
        required: [false]
    }
})


const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet;