const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://sayanimanna0:dfK3CxxcHAW6M1dV@cluster0.lnawsz6.mongodb.net/?retryWrites=true&w=majority');
const db=mongoose.connection;
db.on('error',console.log.bind(console,"Error Connecting"));
db.once('open',()=>{
    console.log("Connecting to Database:MongoDB");
})


// module.exports = {
//     MongoURI:"mongodb+srv://sayanimanna0:XbsraczaoMSMzbBf@cluster0.loebm3g.mongodb.net/myFirstDatabase"
//     // "mongodb+srv://kumar:awxhnpt6Mf9keSRI@cluster0.zsmd20g.mongodb.net/?retryWrites=true&w=majority"
// }