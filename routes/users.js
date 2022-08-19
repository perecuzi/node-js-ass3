const path = require('path');
const express = require('express');

const router = express.Router();
const rootDir = require('../util/path');

router.use('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = router;
