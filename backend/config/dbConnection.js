const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const options = {
    connectTimeoutMs: 1000,
    socketTimeoutMs: 45000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URI, options);

// Connection success
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB successfully");
});

// Connection error
mongoose.connection.on("error", (err) => {
    console.error("Connection error:", err);
});


module.exports.mongoose = mongoose;