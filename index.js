const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const usersRoute = require ('./routes/users')
const authRoute = require ('./routes/auth')
const postRoute = require ('./routes/posts')



dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

//middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)
app.use('/api/post', postRoute)



app.listen(8800, ()=> {
    console.log('backend server is running')
})