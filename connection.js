var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host": "bbzjqdwjhavsj0fb051j-mysql.services.clever-cloud.com",
    "user": "uliyucrvx3cd0ifr",
    "password": "L8bTE8T0hwrtFIDREgSU",
    "database": "bbzjqdwjhavsj0fb051j"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
