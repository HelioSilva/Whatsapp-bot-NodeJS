var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Vendas",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Resumo",
    obj: require("./stages/2"),
  },
  3: {
    descricao: "Endereço",
    obj: require("./stages/3"),
  },
  4: {
    descricao: "Enceramento",
    obj: require("./stages/4"),
  },
  5: {
    descricao: "Forma de Pagamento",
    obj: require("./stages/5"),
  },
};

exports.step = stages;
