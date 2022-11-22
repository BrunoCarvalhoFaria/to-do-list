const mongoose = require("mongoose");
const { connect } = require("../routes/routes");

const connectToDb = () => {
  mongoose.connect(
    "mongodb+srv://root:admin@todolist.zmxqfxl.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Atlas Conectado"))
  .catch( (err) => console.log(err));
};

module.exports = connectToDb;