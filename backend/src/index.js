const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Thales:V!d@140299t@cluster0-gllok.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})

app.use( cors() );
// app.use = É válido para todas as rotas e deve vir antes do routes
app.use(express.json())
app.use(routes)

// Query Params: req.query ( Filtros, Ordenação, Paginação... )
// Route Params: req.params ( Identificadores de recurso para alteração ou remoção )
// Body: req.body ( Dados para criação ou alteração )

app.get('/', (req, res) => {
  return res.json({message: 'hello World'});
})

app.listen(3001);