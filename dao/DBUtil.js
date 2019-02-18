var mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
        host: "192.168.236.1",
        port: "3306",
        user: "root",
        password: "192920zxy",
        database: "my_blog"
    });
    return connection;
}

module.exports.createConnection = createConnection;
