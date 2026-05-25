//IMPORTS//
import express from "express"
import axios from "axios"
import pg from "pg"
import bodyParser from "body-parser"
import cors from "cors"
import bcrypt from "bcrypt"

//CONSTS//
const app = express();
const PORT =3000;
const db = new pg.Client({
    user: process.env.USER,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.PORT
})

// app.use //
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//OTHER FUNCTIONS//
// async function jokeGetter(){
// const result = await db.query()
// }

//SERVER FUNCTIONS//
app.get("/",(req,res)=>{
    res.json({message:"Hello"})
})

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})