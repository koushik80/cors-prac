import express from "express";
import cors from "cors";

//const express = require("express");
//const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"],
    })
);

app.put("/data", (req, res) => {
    res.json({
        name: "Finland",
        description: "Land of Sauna & Lakes",
    });
});

app.listen(3000);