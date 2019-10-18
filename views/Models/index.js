const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    dog_name: {type: String, required: true},
    dog_breed: {type: String, required: true}
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;