const fs = require("fs");
const path = require("path");

function applyData(tmp, row) {
    var coor = row[4].split(";");
    coor.pop();
    coor.shift();

    tmp.push({
        truck_sim: "ETS2",
        city_name: row[1],
        alt_name: row[2].length === 0 ? null : row[2],
        country: row[0].toUpperCase().replaceAll(" ", "_"),
        dlc: row[3].toUpperCase().replaceAll(" ", "_"),
        coordinate: coor
    });
}

/**
 * 
 * @param {any[][]} sheets 
 */
function resolveToJson(sheets) {
    var tmp = [];

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