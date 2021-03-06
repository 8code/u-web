'use strict';
// use mysql
const mysql = require('mysql');
require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (process.env.DB_NAME) {
        res.redirect('login');
    } else {
        res.render('install');
    }

});

router.post('/', (req, res) => {

    if (process.env.DB_NAME) {
        res.redirect('login');
    }

    const data = req.body;

    const db = mysql.createConnection({
        host: data.db_host,
        user: data.db_user,
        password: data.db_password
    });

    db.connect(function (err) {
        if (err) throw err;
        let sql = "CREATE DATABASE " + data.db_name;
        db.query(sql, function (err, result) {

            if (err) throw err;

            var fs = require('fs');
            var appId = '';

            fs.writeFile('.env',
                `\nAPP_ID=${appId}\nAPP_NAME=${data.app_name}\nAPP_VERSION=${data.app_version}\nAPP_DESCRIPTION=${data.app_description}\n\n` +
                `DB_HOST=${data.db_host}\nDB_USER=${data.db_user}\nDB_PASSWORD=${data.db_password}\nDB_NAME=${data.db_name}`,
                function (err) {
                    if (err) throw err;
                    console.log('Config Saved, see on .env file');
                });

            res.redirect('login');
        });
    });

});

module.exports = router;