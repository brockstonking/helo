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
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 60000
    }
  })
);


app.post('/auth/register', controller.register);
app.post('/auth/login', controller.login);
app.get('/posts/all', controller.getAllPosts);
app.get('/posts/:postId', controller.getSinglePost);
app.post('/posts/create', controller.createPost);
app.post('/api/auth/logout', controller.logout);
app.get('/api/auth/me', controller.authMe);


app.listen(SERVER_PORT, () => {
    console.log(`Listening in on port ${ SERVER_PORT }`)
});