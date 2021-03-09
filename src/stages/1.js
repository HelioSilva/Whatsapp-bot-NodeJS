const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg) {
    if (msg === "*") {
        db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "#") {
        db[user].stage = 2;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if (!menu0[msg]) {
        return [
            "Código inválido, digite corretamente",
            "```Digite # para finalizar ou * para cancelar```",
        ];
    }

    db[user].itens.push(menu0[msg]);

    return [
        "```Digite # para finalizar ou * para cancelar```",
        `Item(${menu0[msg].description}) adiconado com sucesso`,
    ];
}

exports.execute = execute;