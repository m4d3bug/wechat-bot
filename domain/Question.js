const {mongoose} = require("../config/MongoConfig")

let questionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    type: String,
    mediaType: String,
    displayQuestion: Boolean,
    createTime: String,
    updateTime: String,
}, {
    strict: true,
    collection: 'question'
});
const Question = mongoose.model('question', questionSchema);

module.exports = {
    Question: Question
}

