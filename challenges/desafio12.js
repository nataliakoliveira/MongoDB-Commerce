db.produtos.updateMany(
  {
    nome: { $ne: "McChicken" },
  },
  {
    $addToSet: {
      ingredientes: "ketchup",
    },
  },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });

/* https://www.mongodb.com/docs/manual/reference/operator/update/addToSet/ */
