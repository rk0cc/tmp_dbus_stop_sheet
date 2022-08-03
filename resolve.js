const fs = require("fs");
const path = require("path");

function applyData(tmp, row) {
    var coor = row[4].split(";");
    coor.pop();
    coor.shift();

    tmp[row[1].toLowerCase()] = {
        country: row[0].toLowerCase().replaceAll(" ", "_"),
        dlc: row[3].toLowerCase().replaceAll(" ", "_"),
        alt_name: row[2],
        coordinate: coor
    };
}

/**
 * 
 * @param {any[][]} sheets 
 */
function resolveToJson(sheets) {
    var tmp = {};

    sheets.forEach((row) => {
        applyData(tmp, row);
    });

    fs.writeFile(path.join(__dirname, "tmpstops.json"), JSON.stringify(tmp, null, 4), (err) => {
        if (err) {
            return console.error(err);
        }
    });
}


module.exports = resolveToJson;