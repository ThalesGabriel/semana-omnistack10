const Dev = require('../models/dev');
const StringUtils = require('../utils/stringUtils');

module.exports = {
  async index(req, res) {
    console.log(req.query);

    const { latitude, longitude, techs } = req.query;

    const techsArray = StringUtils.parseStringAsArray(techs);

    const devs = await Dev.find({
      //Se os devs tem as tecnologias dentro de tecsArray
      techs: {
        $in: techsArray
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