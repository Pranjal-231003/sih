const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/sih");
const cors = require('cors');
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
//for user routes
const userRoute = require('./routes/userRoute');
app.use('/api/auth', userRoute);

//for admin route
// const adminRoute = require('./routes/adminRoute');

// app.use('/api/admin', adminRoute);
// app.use(express.static(''))

app.listen(port, function () {
    console.log(`server running at port ${port}`);
});