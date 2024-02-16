const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const password = ''; 
        const uri = `mongodb+srv://BILSHAZ:${password}@cluster0.vvqe6kj.mongodb.net/?retryWrites=true&w=majority`;
        const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
        
        await mongoose.connect(uri, clientOptions);
        
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = { connectDB };
