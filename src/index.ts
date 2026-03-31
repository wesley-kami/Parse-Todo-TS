import express from "express";
import {config} from "dotenv";
import {ParseServer} from "parse-server";
import {Config} from "./utils/env.js";
import path from "node:path";
config();

const ParseConfig = {
    appId: Config("PARSE_APPID"),
    masterKey: Config("PARSE_MK"),
    databaseURI: Config("DB_URL"),
    serverURL: Config("SERVER_URL"),
    logLevel: "debug",
    allowClientClassCreation:true,
    cloud: path.join("dist","cloud","main.js")
}

const ps = ParseServer(ParseConfig as any);

const app= express();

await ps.start();

app.use(express.json());

app.use("/parse",ps.app);

app.get("/",(req,res)=>{
    res.json({
        "APP NAME":"Right Quest",
        "API VERSION":"1.1",
        "API HEALTH": "OK"
    })
});

app.listen(parseInt(Config("PORT")),"127.0.0.1",()=>{
    console.log(`Server is running on http://127.0.0.1:${Config("PORT")}`);
})