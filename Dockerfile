FROM madebug/wechaty-node:lts-bullseye

RUN git clone https://github.com/m4d3bug/wechat-bot.git && cd wechat-bot && npm install

CMD ["/usr/local/bin/node /wechat-bot/index.js"]
