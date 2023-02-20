let mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config()
const connection=mongoose.connect(process.env.CONNECTION)

module.express={
    connection
}
// "mongodb://localhost:27017/ecomDB

// mongodb+srv://react-travelmojo-user:Preeti@9210@cluster0.cusxbpp.mongodb.net/eval4?retryWrites=true&w=majority