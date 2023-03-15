db.produtos.find(
  { "valoresNutricionais.0.tipo": "calorias",
  "valoresNutricionais.0.quantidade": { $lt: 500 } },
  { nome: 1, _id: 0 },
);
