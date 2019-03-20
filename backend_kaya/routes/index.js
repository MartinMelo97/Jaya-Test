const express = require('express');
const router  = express.Router();
const axios = require('axios')
const consts = require('../consts')
/* GET home page */
router.get('/', (req, res, next) => {
  //res.render('index');
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
      res.json(JSON.stringify(err))
    })

    //res.json({"hola":"hola"})
    
})

module.exports = router;
