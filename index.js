const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const route = require('./controller');
const port = parseInt(process.env.PORT) || 6969;
const app = express();

const  {errorHandling} = require('./middleware/ErrorHandling');
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods',"*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
});
app.use(route);
app.use(cors(), cookieParser(), express.json, express.urlencoded({extended: false}));
// Server Running On Port...
app.listen(port, ()=>{
    c
})