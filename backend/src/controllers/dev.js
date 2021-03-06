const axios = require('axios');
const Dev = require('../models/dev');
const StringUtils = require('../utils/stringUtils');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async deleteByGithubUserName(req, res) {
    const { github_user } = req.body;

    let response = await Dev.findOneAndDelete({ github_user })

    if(!response) response = { success: false, message: "We do not have this github user" }
    
    return res.json(response);
  },

  async updateByGithubUserName(req, res) {
    const { id } = req.params;
    console.log(id)
    console.log(req.body)
    let response = await Dev.findByIdAndUpdate(id, req.body)
    
    return res.json(response);
  },

  async store(req, res) {
    const { github_user, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_user })
    

    if(!dev){

      const response = await axios.get(`https://api.github.com/users/${github_user}`);
    
      const { name = login, bio, avatar_url } = response.data;
    
      const techsArray = StringUtils.parseStringAsArray(techs)
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
    
      dev = await Dev.create({
        github_user,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })

      const sendSocketMessageTo = findConnections(
        {latitude, longitude},
        techsArray
      )
      sendMessage(sendSocketMessageTo, 'newDev', dev)
    }
    return res.json(dev);
  }
}