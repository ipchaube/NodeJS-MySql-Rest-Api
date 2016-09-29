/**
 * Created by ichaube on 9/22/2016.
 */
var express = require('express');

module.exports = {
    sqlConnParms: function () {
        //This string has mysql connect information.
        // Your dataDatabase Name and conn info
        var connParms={
            host: "localhost",
            user: "root",
            password: "",
            database: "wordpress"
        }

        return connParms;
    },
    dbError: function () {
        //Error when DB connection fails.
        var dberror={ "status": "99", "total": "0", "data": "Faill to connect with DB." };
        return dberror;
    },
    queryError: function () {
        //Error when query exacution fails.
        var queryerror={ "status": "1", "total": "0", "data": "Fail to exacute query." };
        return queryerror;
    },
    otherdatabind: function () {
        // Network data model and binding.

    }
};


