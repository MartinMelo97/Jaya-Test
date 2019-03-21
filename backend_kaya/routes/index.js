const express = require('express');
const router  = express.Router();
const axios = require('axios')
const consts = require('../consts')

router.get('/', (req, res, next) => {
  res.json({"hola":"Hello World"})
});

router.get('/:city', (req, res) => {
  let city = req.params.city
  axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiamdhdmlyMjMiLCJhIjoiY2pwMzMwanYwMDJkeTNwcDduODR5bXRlayJ9.p_HLVm6sK-X0d5-JIpSdxA`)

    .then((response)=>{
      console.log(response.data)
      res.json(response.data)
    })

    .catch((err)=>{
      console.log(err)
      res.json("Se ha producido un error al obtener la información de la API")
    })
})

router.get('/:lat/:long', (req, res) => {
  let latitude = req.params.lat
  let longitude = req.params.long
  axios.get(`https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/${latitude},${longitude}?lang=es`)

    .then((response)=>{
      console.log(response.data)
      res.json(response.data)
    })

    .catch((err)=>{
      console.log(err)
      res.json("ERROR")
    })
})

module.exports = router;
