# Bot - WeChat

基于 `wechaty` （包含 `wechaty-puppet-padplus` 插件）开发。

一个简单的微信群组「关键字」回答机器人。

使用 Mongodb 存储问题 / 答案 / 群组消息。

## 背景

大学新生开学（又到了每一年忙碌的时候），同一个（类似）问题会有很多人问，那为啥不把这些问题整理一下。

如果有一个问答库，通过输入关键字让机器人发送答案，减少人工不必要的问答，提高效率。


## 功能

* `#` 字符触发特殊命令
* 关键字回复问题

## 安装

```shell script
git clone https://github.com/m4d3bug/wechat-bot.git
cd wechat-bot
npm install
```

## 使用

```shell script
cd wechat-bot
node index.js
```


## 项目结构

```shell script
$ tree
.
├── README.md
├── config
│   ├── BotConfig.js
│   ├── BotConfig.js.backup
│   └── MongoConfig.js
├── deploy
│   └── deploy.sh
├── domain
│   ├── Message.js
│   └── Question.js
├── index.js
├── package-lock.json
├── package.json
├── service
│   ├── MessageService.js
│   └── QuestionService.js
├── test
└── utils
    └── StrUtils.js
```

| File               | Description                |
| ------------------ | -------------------------- |
| BotConfig.js       | Bot 相关配置               |
| MongoConfig.js     | MongoDB 相关配置           |
| deploy.sh          | 部署脚本，简单粗暴采用 pm2 |
| Message.js         | Message ORM                |
| Question.js        | Question ORM               |
| MessageService.js  | Message save               |
| QuestionService.js | Question query             |
| StringUtils.js     | Handler string             |


## 参考文档

* [https://wechaty.js.org/docs/](https://wechaty.js.org/docs/)
