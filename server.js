const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const pwd = "root";
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully...");
});

const exerciseRoute = require('./exercise.routes');
const userRoute = require('./user.routes');

app.use('/exercise', exerciseRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});