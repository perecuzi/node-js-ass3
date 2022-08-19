const express = require('express');
const userRoutes = require('./routes/users');
const shopRoutes = require('./routes/shop');

const app = express();

app.use('/users', userRoutes);
app.use('/', shopRoutes);

app.listen(3000);