const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const path = require("path");
const listStops = require("./extract");
const SCOPE = [
    "https://www.googleapis.com/auth/spreadsheets.readonly"
];

fs.readFile(path.join(__dirname, "credntials.json"), (err, content) => {
    if (err) {
        return console.error(err);
    }
    authorize(JSON.parse(content), listStops);
});

function authorize(credentials, callback) {
    var jwt = new google.auth.JWT(credentials.client_email, null, credentials.private_key, SCOPE);

    jwt.authorize((err, token) => {
        if (err) {
            return console.error(err);
        }

        callback(jwt);
    })
}
