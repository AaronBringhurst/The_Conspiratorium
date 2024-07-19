import mongoose from 'mongoose';

const reactionSchema = new mongoose.Schema({
    emoji: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const thoughtSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 420
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reactions: [reactionSchema],
    reactionCount: {
        type: Number,
        get: function() { return this.reactions.length}
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Thought = mongoose.model('Thought', thoughtSchema);

export default Thought;