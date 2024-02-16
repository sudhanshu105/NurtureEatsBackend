const connecttomongo = require('./db');
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8080;


//Connect to database
connecttomongo();


app.use(express.json());
app.get("/", (req, res) => {
  res.send("Transcribe server is running... ");
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const route = require('./routes/Router');

app.use('/api' , route);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
