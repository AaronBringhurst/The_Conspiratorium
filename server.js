import routes from ".controllers/index.js"
import express from "express";
import connectDB from './config/connection.js';

const app= express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const startSever = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`The server is lisitening on port ${PORT}`)
        });
    } catch (error){
        console.log("server no workie:", error);
    }
};


startSever ();
