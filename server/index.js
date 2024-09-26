import express from 'express';
import mongoose from 'mongoose'; 

import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './Routes/userRoutes.js';

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

// Use the imported routes
app.use("/api", routes);
