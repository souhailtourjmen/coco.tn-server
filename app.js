const express = require('express');
const app = express(); 
const  test = require('./test/routes/test');
const  userRoute = require('./routes/userRoute');
const  profilRoute = require('./routes/profilRoute');
const  authRoute = require('./routes/auth');
const annonceRoute = require('./routes/annonceRoute');
const propositionRouter = require('./routes/propositionRouter');
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')

app.use((req, res, next) => { //route for cross-domain routes
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// app.use(cors(corsOptions));
connectDB();
app.use(express.json());

// app.use('/',test); // routesfor test
app.use('/api/auth',authRoute);
app.use('/api',userRoute);
app.use('/api',profilRoute);
app.use('/api/annonce',annonceRoute);
app.use('/api/proposition',propositionRouter);


module.exports = app ; 