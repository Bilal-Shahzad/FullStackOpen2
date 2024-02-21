console.log("Starting server...");

const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const blogRoutes = require('./routes/blogRoutes');
const Blog = require('./models.js/blogModel'); 
const Product = require('./models.js/productModel');


const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
