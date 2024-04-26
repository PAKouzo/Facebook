import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true 
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number
    },
    birthday: {
        type: String
    },
    bio: {
        type: String
    }
});
const UsersModel = mongoose.model('users', userSchema);
export default UsersModel;
