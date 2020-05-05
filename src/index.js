// Supports ES6
// import { create, Whatsapp } from 'sulla';
const sulla = require("sulla");
const banco = require("./banco");
const stages = require("./stages");

// let resp = stages.step[getStage("558296130940@c.us")].obj.execute();
// for (let index = 0; index < Array(resp).length; index++) {
//   const element = Array(resp)[index];
//   console.log(element);
// }

sulla.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body
    );
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
  });
}

function getStage(user) {
  return banco.db[user].stage;
}
