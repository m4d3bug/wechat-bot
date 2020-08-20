const {Wechaty} = require('wechaty')
const {PuppetPadplus} = require("wechaty-puppet-padplus")

const {save} = require('./service/MessageService')
const {getQuestionKey} = require('./service/QuestionService')
const {getAnswer} = require('./service/QuestionService')
const {weChat} = require('./config/BotConfig')
const {replaceRegex} = require('./config/BotConfig')
const {botName} = require('./config/BotConfig')


async function main() {
    const bot = new Wechaty({
        puppet: new PuppetPadplus(weChat),
        name: botName
    })
        .on('scan', (qrcode, status) => {
            console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.github.io/qrcode/${encodeURIComponent(qrcode)}`)
        })
        .on('login', user => console.log(`User ${user} logined`))
        .on('message', message => messageHandler(message, bot));

    await bot.start();
}

async function messageHandler(message, bot) {
    save(message).catch(error => console.log(`Error, ${error}`))
    let text = message.text().replace(replaceRegex, '')

    if (text.length === 0) {
        return
    }
    const answers = await getAnswer(text)
    answers.forEach(it => message.say(it))

    switch (text) {
        case '#关键字':
        case '/help':
            message.say(await getQuestionKey())
            break;
        default:
            //
            break;

    }
}

main().catch(error => console.log(`Error, ${error}`))
