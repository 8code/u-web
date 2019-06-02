'use strict';
// use mysql
const mysql = require('mysql');
require('dotenv').config();
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.get('/', (req, res) => {
    if (process.env.DB_NAME) {
        res.render('login', {
            name: process.env.APP_NAME
        });
    } else {
        res.redirect('install');
    }
});
router.post('/', (req, res) => {

    if (process.env.DB_NAME) {
        res.render('login');
    } else {
        res.redirect('install');
    }

    const {
        privateKey,
        publicKey
    } = crypto.generateKeyPairSync('ec', {
        namedCurve: 'sect239k1'
    });

    const sign = crypto.createSign('SHA256');
    sign.write('some data to sign');
    sign.end();
    const signature = sign.sign(privateKey, 'hex');

    const verify = crypto.createVerify('SHA256');
    verify.write('some data to sign');
    verify.end();
    console.log(verify.verify(publicKey, signature));
    // Prints: true or false
})

module.exports = router;