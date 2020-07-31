# Bot - WeChat

基于 `wechaty` （包含 `wechaty-puppet-padplus` 插件）开发。

一个简单的微信群组「关键字」回答机器人。

使用 Mongodb 存储问题 / 答案 / 群组消息。

## 安装

```shell script
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



