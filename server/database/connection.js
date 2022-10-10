
const mongoose = require('mongoose');

const connect = async() =>{
    try {
        const con = mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB connected Succesfully`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connect;