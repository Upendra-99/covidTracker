const app = require("./Routes/user");
const mongoDbConnection = require("./DBConnection/mongodb");

const dotenv = require("dotenv").config();
const port = process.env.PORT;

app.listen(port, () => {
  new mongoDbConnection();
  console.log(`Server is running on port no ${port}`);
});
