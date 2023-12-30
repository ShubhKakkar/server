const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");

// Routes
const StoreRouter = require('./store/index');

// env configuration
const configPath = process.env.NODE_ENV === "development" ? path.resolve(__dirname + '/configs/.env.local') : path.resolve(__dirname + '/configs/.env.prod');

require("dotenv").config({
    path: configPath
})

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json({limit: "5Mb"}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./utils/dbConnect')();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.status(200).json({
        root: "ok",
    })
})

app.use('/store', StoreRouter);

server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})