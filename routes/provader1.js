const express = require("express")
const router = express.Router()
const path = require('path');

router.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve('./mockServices/provaider1/200_http_ok.json'))
} )

module.exports = router