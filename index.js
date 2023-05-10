const express = require('express')
const app = express()
const exphbs =require('express-handlebars')
const conn = require('./DB/conn')
const Usuario = require('./Models/Usuario')

const PORT = 3000
const hostname = 'localhost'
/*-------------------config express--------------------*/
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
/*-------------config express hanndlebars--------------*/
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
/*-----------------------------------------------------*/

app.get('/listar', async (req,res)=>{
    const dados =  await Usuario.findAll({raw:true})
    console.log(dados)
    console.log(dados.nome)
    console.log(dados[0].nome)
    res.redirect('/')
})

app.get('/',(req,res)=>{
    res.end('teste de daos')
})

/*-----------------------------------------------------*/
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`servidor rodando ${hostname}:${PORT}`)
    })
}).catch((error)=>{
    console.error('Erro de conexão com o BD...'+error)
})
