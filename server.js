const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());

require("./server/config/pet.config")

require("./server/routes/pet.route")(app)


app.listen(port, () => console.log(`Listening on port ${port}`));