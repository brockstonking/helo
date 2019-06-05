const express = require('express');
require('dotenv').config();
const massive = require('massive');
const controller = require('./controller');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const session = require('express-session');

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(cors());
app.use(bodyParser.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.post('/auth/register', controller.register);
app.post('/auth/login', controller.login);
app.get('/posts/all/:user_id', controller.getAllPosts);
app.get('/posts/:postId', controller.getSinglePost);


app.listen(SERVER_PORT, () => {
    console.log(`Listening in on port ${ SERVER_PORT }`)
});