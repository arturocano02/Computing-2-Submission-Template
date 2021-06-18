import express from "express";
import session from "express-session";
import handler from "./handler.js";

const port = 8080;
const app = express();

app.use(session({
    "secret": "a1652321-1c7d-468b-b6a2-4fddc4fde562",
    "resave": false,
    "saveUninitialized": false
}));

app.use("/er", express.static("web-app/static"));

app.use("/", express.json());
app.post("/", function (req, res) {
    // const request_object = req.body;
    const responseObj = handler(req.body);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(responseObj));

});

app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});
