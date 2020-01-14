const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/stringUtils');

module.exports = {
  async index(req, res) {
    console.log(req.query);

    const { latitude, longitude, tecs } = req.query;

    const tecsArray = parseStringAsArray(tecs);

    const devs = await Dev.find({
      //Se os devs tem as tecnologias dentro de tecsArray
      tecs: {
        $in: tecsArray
      },
      //Objetos perto de uma localização
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [ longitude, latitude ],
          },
          $maxDistance: 10000,
        }
      }
    })

    return res.json({ devs })
  }
}