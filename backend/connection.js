const mongoose = require('mongoose');

const url = "mongodb+srv://zakkhan5525:zaheer@cluster0.c4ejrug.mongodb.net/arbaz360?retryWrites=true&w=majority&appName=Cluster0"

// asynchrounous function - return promise object 
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});


module.exports = mongoose;