const {mongoose} = require("../config/MongoConfig")

let messageSchema = new mongoose.Schema({
    room: String,
    text: String,
    from: String,
    type: Number,
    payload: Object
}, {
    strict: true,
    collection: 'wechat_message'
});
const Message = mongoose.model('wechat_message', messageSchema);

module.exports = {
    Message: Message
}

