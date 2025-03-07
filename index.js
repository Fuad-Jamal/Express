import express from 'express'
import pool from './db.js';


const app = express()
import cors from 'cors';

app.use(cors())
app.use(express.json())

//creating a todoo
app.post('/todoo', async (req, res) => {
    try {
        const {description} = req.body   
        const newTodo = await pool.query ('INSERT INTO todo (description) VALUES($1) RETURNING *',
             [description])
             res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//get all todoo
app.get('/todoo', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo')
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a todoo
app.get('/todoo/:id', async (req, res) => {
    try {
        const {id} = req.params
        const tod = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
        res.json(tod.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//update a todoo
app.put('/todoo/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {description} = req.body
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2',
             [description, id])
             res.json('Todo was updated')
    } catch (error) {
        console.error(error.message)
    }
})

//delete a todoo
app.delete("/todoo/:id", async (req, res) => {
    try {
        const {id} = req.params
        const delet = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id])
        res.json('Todo was deleted')
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})