const {Message} = require("../domain/Message")


async function save(message) {
    let topic = null
    if (message.room) {
        topic = await message.room().topic()
    }
    new Message({
        room: topic,
        text: message.text(),
        from: message.from().name(),
        type: message.type(),
        payload: message.payload
    }).save()
}

module.exports = {
    save: save
}
