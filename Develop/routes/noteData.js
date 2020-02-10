let mongoose = require("mongoose")

let noteSchema = Schema = ({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

let Note = module.exports = mongoose.model("Note", noteSchema);