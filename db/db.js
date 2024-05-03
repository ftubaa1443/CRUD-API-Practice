const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Personal");

const adminSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim : true
  },
  lastName: {
    type : String ,
    required : true ,
    trim : true 
  },
  password: {
    type : String , 
    required : true ,
  },
  userName :{
    type : String ,
    required : true ,
  }
});

const Admin = mongoose.model("Admin" , adminSchema)

module.exports = Admin
