var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var _sqlconns = require("./include/mysqlconn");

/* GET users listing. */
router.get('/', function(req, res, next) {
  "use strict";
    var _dataquery='SELECT * FROM  `1006_travelerdata` ';
    var connparms=_sqlconns.sqlConnParms();
    var con = mysql.createConnection(connparms);
    con.connect(function (err) {
        if (err) {
            console.log("Connecting DB Error.");
            res.status(500).json( _sqlconns.dbError() );
        }
        //Sql Connection stablished
        con.query(_dataquery, function (err, rows) {
            if (err) {
                console.log("Exacuting query Error.");
                res.status(500).json( _sqlconns.dbError() );
            }
            con.end();
            res.status(200).json( { "status": "0", "total": rows.length, "data": rows } );
        });

    });
});


module.exports = router;
