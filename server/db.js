const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("Connected with the Database.");
  } catch (error) {
    console.error(error);
    console.log("Could not connect to Database.");
  }
};
