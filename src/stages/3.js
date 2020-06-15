const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    banco.db[user].stage = 5;

    return stages.step[5].obj.execute(user, "");
  }
  return [
    `Confirma endereco de entrega : \n ${msg}`,
    "```Digite # para continuar ou * para cancelar```",
  ];
}

exports.execute = execute;
