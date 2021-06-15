const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://SaiSandeep:SaiSandeep@1304@cluster.ecfrw.mongodb.net/task-manager-api?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = connection;
