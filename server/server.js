var express = require('express');
var port = process.env.PORT || 4200;
var app = express();


app.listen(port, () => console.log(`Server is running on port ${port}`));