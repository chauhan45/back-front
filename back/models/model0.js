const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(

    {       
        _id: {type: schema.ObjectId}, 
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        mobileNumber: {type: String, required: true},
        companyName: {type: String, required: true},
        address: {type: String, required: true},
        companyType: {type: String, required: true},
        industryType: {type: String, required: true},
        password: {type: String, required: true},
        email_approved: {type: Boolean, required: true},
        user_type: {type: String, required: true},
        admin_approved: {type: Boolean, required: false},
        is_deleted: {type: Boolean, required: true},
        is_confirm_email:{type: Boolean, required: true},
        confirm_code:{type: String, required: true},
        professionalTitle:{type:String},
        profileImage: {type:String}
    },
    {
        timestamps: true
    }
);

module.exports = userSchema;


