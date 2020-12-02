import mongoose from 'mongoose';
const schema = mongoose.Schema;

var userSchema = new schema({
    email: {type: String},
    password: {type:String}
})

var userSchema = mongoose.model('User', userSchema);

export default userSchema;