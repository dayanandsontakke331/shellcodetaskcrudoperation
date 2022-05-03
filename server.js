const express = require('express')
const cors = require('cors')
const conn = require('./db')

// const PORT = 5000

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

//........................................................... MongoDB Connection ......................................................


conn.connection.on('connected', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to MongoDb")
    }
})


//................................................................Routes..........................................................

app.use('/students', require('./routes/students'))

//............................................................ server ...................................................................

app.get('/', (req, res)=>{

    res.send(`  
    <marquee>
    <h1>Serer is started at port number 5000 </h1>
    </marquee>
    `)

})

//......................................................................................................................................
app.listen(PORT)

