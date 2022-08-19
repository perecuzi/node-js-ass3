const path = require('path'); //import Global path module
const express = require('express'); //import Global Express module

const router = express.Router(); //execute the express.Router function in router

const rootDir = require('../util/path'); //import local path module 

router.use('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;