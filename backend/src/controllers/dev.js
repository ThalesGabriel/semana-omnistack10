const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/stringUtils');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },


  async store(req, res) {
    const { github_user, tecs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_user })
    
    if(!dev){

      const response = await axios.get(`https://api.github.com/users/${github_user}`);
    
      const { name = login, bio, avatar_url } = response.data;
    
      const tecsArray = parseStringAsArray(tecs)
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
    
      dev = await Dev.create({
        github_user,
        name,
        avatar_url,
        bio,
        tecs: tecsArray,
        location
      })
    
    }
    return res.json(dev);
  }
}