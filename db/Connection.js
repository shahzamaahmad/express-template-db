const mongoose = require("mongoose");
require("dotenv").config();

// Mongoose Function
mongoose.connect(process.env.DB_LINK, {
  // useCreateIndex: true,
  // useFindAndModify: false,
  autoIndex: true, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4,// Use IPv4, skip trying IPv6
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // createIndexes: true
  // useCreateIndex: true,
  // useFindAndModify: false,
}).then((client) => {
  // console.log(err);
  console.log("Database Connected Admin")
}).catch((err) => {
  console.log('Database Connection Problem', { err });
  process.exit()
})


// mongoose.connect(process.env.DB_LINK, function (err, client) {
//   console.log(`Connected successfully to Dab ${client}`);
// });