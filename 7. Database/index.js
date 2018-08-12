const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals');
mongoose.connection.once('open', ()=> console.log('connected!')).on('error', (err)=>{
  console.log('could not connect!', err);
})



// var MongoClient = require('mongodb').MongoClient
//
// MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
//   if (err) throw err
//   console.log('connected');
//   // var db = client.db('animals')
//   //
//   // db.collection('mammals').find().toArray(function (err, result) {
//   //   if (err) throw err
//   //
//   //   console.log(result)
//   // })
// })
