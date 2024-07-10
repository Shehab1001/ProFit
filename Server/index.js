import * as dotenv from "dotenv";
import { dbConnection } from "./Database/dbConnection.js";
import express from "express";
import { app, server } from "./Socket/Socket.js"
import cors from "cors";
dotenv.config();
const port = 4000;

app.use(cors())
app.use(express.json)

dbConnection();
server.listen(port, ()=> console.log(`Example App listening on port ${port}!`));

