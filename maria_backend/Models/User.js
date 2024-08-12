const mongoose = require('mongoose')
const {Schema} = mongoose;

const userScheme = new Schema ( {
    name: String ,
    email: {
        type:String,
        unique:true,
    },
    password: String

})

const UserModel = mongoose.model(' User',userScheme);
console.log("schema created !!!!")
module.exports = UserModel;