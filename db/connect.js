const mongoose = require('mongoose')

const connString =
''

// it will show some warnings without the params. If we use v6, it wont show
// mongoose.connect(connString,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })
//     .then(() => console.log("Connected to DB.. !"))
//     .catch((err) => console.log(err))


//we want above code to run after server starts.. so modifying it the same

const connectDB = (url) => {
    // return mongoose.connect(connString, {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB