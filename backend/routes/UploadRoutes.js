"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bucketUpload_1 = require("../middleware/bucketUpload");
const router = (0, express_1.Router)();
router.post('/upload', bucketUpload_1.upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    const params = {
        Bucket: process.env.voltixteam,
        Key: generateUniqueFileName(file.originalname),
        Body: file.buffer,
    };
    bucketUpload_1.s3.upload(params, (err, data) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).send('Error uploading file to Wasabi: ' + err.message);
        }
        console.log('File uploaded successfully:', data.Location);
        // You can send a success response here
        return res.status(200).send('File uploaded to Wasabi successfully.');
    });
});
function generateUniqueFileName(originalName) {
    const uniqueName = Date.now() + '_' + originalName;
    return uniqueName;
}
exports.default = router;
