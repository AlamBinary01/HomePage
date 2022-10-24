const express = require('express');
const router = express.Router();
const path = require('path');

const publicPath = path.join(__dirname, "../public");
const aboutusPath = path.join(__dirname, "../public", "about.html");
const contactpath = path.join(__dirname, "../public", "contact.html");
router.use(express.static(publicPath));

router.get('/', (req, res) => {
    res.sendFile(publicPath);
})
router.get('/about', (req, res) => {
    res.sendFile(aboutusPath);
})
router.get('/contact', (req, res) => {
    res.sendFile(contactpath);
})


module.exports = router;