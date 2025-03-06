import express from 'express'
import pool from './db';


const app = express()
import cors from 'cors';

app.use(cors())
app.use(express.json())



app.listen(5000, () => {
    console.log('Server is running on port 5000')
})