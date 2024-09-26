const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.log("Error connecting to database", err);
            process.exit(1);
        });
};

connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});