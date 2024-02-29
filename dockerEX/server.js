const express = require('express')
const pool = require('./db')
const port = 1337

const app = express()

app.get('/' , async (req, res) => {
    const { name , location } = req.body
    try {
        const data = await pool.query('SELECT * FR0M schools' )
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }})

app.post('/' ,async  (req, res) => {
    const { name , location } = req.body
    try {
        await pool.query('INSERT INTO schools (name, address) VALUES ($1, $2) ',[name, location] )
        res.status(200).send({message: "successfully added child"})
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('/setup', async (req,res) => {
    try {
        await pool.query('CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))')
        res.status(200).send({message: "successfully created table"})
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})


app.listen(port, () => console.log( `server has started on port: ${port}`))