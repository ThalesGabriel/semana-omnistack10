const { Router } = require('express');
const DevController = require('./controllers/dev');
const SearchController = require('./controllers/search');


const routes = Router();

routes.get('/search', SearchController.index)
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

module.exports = routes;