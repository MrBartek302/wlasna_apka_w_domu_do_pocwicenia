const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

const port = 3000 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "uzytkownicy"
})

con.connect((err)=>{
    if(err) console.log(err)
    else console.log("Połączono z bazą danych!")
})

app.get("/wyslijdobazy/:imie/:nazwisko", (req, res)=>{
    const imie = req.params.imie
    const nazwisko= req.params.nazwisko

    const sql = `INSERT INTO dane (imie,nazwisko) VALUES ('${imie}','${nazwisko}')`

    con.query(sql, (err, result, fields)=>{
        if(err) console.log(err)
        else res.send("Dodano rekordy!")
    })
})

app.get("/pobierz", (req, res)=>{
    
    const sql = "SELECT * FROM dane"

    con.query(sql, (err, result, fields)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})




app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: "+port)
})