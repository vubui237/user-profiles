const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const logger = require('morgan')
const config = require('../config.js')
const profileCtrl = require('./controllers/profileCtrl.js')
const userCtrl = require('./controllers/userCtrl.js')

const app = express();
app.use(express.static(__dirname));
//Add cors options like example in earlier reading.
const corsOptions = {
    origin: 'http://localhost:8999'
}

//CROSS ORIGIN RESOURCE SHARING
//This is defining CORS globally, but it can be used like middleware I.E. app.get('/someURL', cors(), someController)
app.use(cors(corsOptions));


app.use(session( {
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}))

//middleware
app.use(json());
// app.use(logger((token, req, res) => {
//     console.log('BODY: ', req.body);
//     console.log('QUERY: ', req.query);
//     console.log('PARAMS: ',  req.params);
//     console.log('HEADERS: ', req.headers);
//     console.log('SESSION: ', req.session);
// }));

//endpoints
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles)




app.listen(8080, function() {
    console.log("Listening on port: 8080")
})