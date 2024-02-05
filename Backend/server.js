const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require("./routes/router")
const bodyParser = require('body-parser')
const cors = require('cors')
dotenv.config()
const app = express()
const corsOptions = {
    origin: 'https://your-frontend-domain.com',
  };
app.use(bodyParser.json())
app.use(cors())
const PORT = process.env.PORT_NO
app.use(express.json())
app.use("/api/user",userRoutes)

app.listen(PORT,(err)=> {
    if(err)
    {
        console.log("Something went wrong",err);
    }

    else {
        console.log(`Server running on ${PORT}`);
    }
})