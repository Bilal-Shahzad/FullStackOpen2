const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a product name'],
            minLength: [5, 'Product name must be at least 5 characters long']
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
            min: [0, 'Quantity must be a non-negative number']
        },
        price: {
            type: Number,
            required: true,
            min: [0, 'Price must be a non-negative number']
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model("Product" , productSchema );

module.exports = Product;

