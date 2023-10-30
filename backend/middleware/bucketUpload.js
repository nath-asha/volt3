"use strict";
const multer = require('multer');
const { S3 } = require('@aws-sdk/client-s3');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const s3 = new S3();
s3.config.update({
    credentials: {
        accessKeyId: process.env.PG15IN5I4KMLV3PDJ1EV,
        secretAccessKey: process.env.WFjTVAz0H1VERDsjCuwpRydF5BFuHLn4NXW5GWH6,
    },
    region: process.env.REACT_APP_REGION_ap_northeast_1,
});
module.exports = { upload, s3 };
