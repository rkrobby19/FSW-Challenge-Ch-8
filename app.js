const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerData = require("./swagger.json");

const app = express();

var corsOptions = {
    // ! react app
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./app/models");
db.client.sync();

require("./app/routes/player.routes")(app);

// * Swagger docs
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerData));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
