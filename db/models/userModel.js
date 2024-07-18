import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxLength: 69
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: function(v) {
            return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
        },
        message: 'get real, i need a real email my guy'
    },
    thoughts: {
        type: [String],
        default: []
    },
    friends: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    friendCount: {
        type: Number,
        default: 0
    }
    }, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
    });

const User = mongoose.model('User', userSchema);

export default User;
