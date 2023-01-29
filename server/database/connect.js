const mongoose = require("mongoose")



async function connectToDB(){
    try {
        mongoose.connect(process.env.DB_URI).then((db)=>{
            console.log("-----------------------")
            console.log("MONGO CONNECTED")
            console.log(`Host:${db.connection.host}`)
            console.log(`DB  :${process.env.DB_URI}`)
            console.log("-----------------------")
        });
    } catch (error) {
        console.log(error);
    }
}



connectToDB().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})