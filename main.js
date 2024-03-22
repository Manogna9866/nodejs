const express = require('express');
const mongoose =require('mongoose');

const employeeRoute=require('./routes/employeeroute.js')
const adminRoute=require('./routes/adminroute.js')
const app = express();

app.use(express.json());
const cors=require('cors')
let corsOptions={
    origin:['http://localhost:4040']
}
app.use(cors())

const port = 4040;
url='mongodb://localhost:27017/office'

app.listen(port,()=>{
    console.log("server is running on port",port);
})

mongoose.connect(url).then(
    console.log("database connected")
).catch(err=>{
    console.log("db not connected");
});

app.use('/employees',cors(corsOptions), employeeRoute)
app.use('/admin',cors(corsOptions),adminRoute)