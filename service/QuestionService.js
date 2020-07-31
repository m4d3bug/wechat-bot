const {Question} = require("../domain/Question")
const {onlyUnique} = require("../utils/StrUtils")

function findAll(query) {
    return Question.find(query)
}

async function getAnswer(text) {
    const answers = await findAll({
        "question": {
            $regex: text,
        },
        "type": "NEW"
    })
        .then(it => it.map(t => {
            if (t.displayQuestion === true) {
                return `${t.question}: ${t.answer}`
            } else {
                return `${t.answer}`
            }
        }))
    return answers.filter(onlyUnique)
}

function getQuestionKey() {
    return Question.find({type: 'NEW'}, {'question': 1, '_id': 0})
        .then(it => it.map(a => a.question).filter(onlyUnique).join(", "))
}

module.exports = {
    findAll: findAll,
    getQuestionKey: getQuestionKey,
    getAnswer: getAnswer
}
