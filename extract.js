const { google } = require("googleapis");
const resolve = require("./resolve");

const TMP_DBUS_SHEET = {
    spreadsheetId: "12o5Bpx7zB2Atn_v4YuCvlDZ8n6dn08IyfjnxqMvQEAY",
    range: "Information",
    majorDimension: "ROWS"
};

/**
 * @param {google.auth.JWT} auth 
 */
async function listStops(auth) {
    const sheets = google.sheets("v4");
    try {
        const res = await sheets.spreadsheets.values.get({
            auth: auth,
            ...TMP_DBUS_SHEET
        });

        if (res.data.values) {
            var d = res.data.values;
            d.shift();
            resolve(d);
        }
    } catch (err) {
        return console.error(err);
    }
}

module.exports = listStops;