const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  //res.render('index');
  res.json({"hola":"Hello World"})
});

router.get('/:pepe', (req, res) => {
  res.json({"nombre": req.params.pepe})
})

module.exports = router;
