var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index.html');
});

router.get('/search', function(req, res, next) {
  res.render('../views/index.html');
});

router.get('/search.json/:id', function(req, res, next) {
  getAnime(req.params.id).then((animes) => {
    console.log(animes)
    res.json(animes);
  });;
});

async function getAnime(name) {
  try {
    let link = "https://anime-mcfxqmvs6q-wn.a.run.app/animes/1/" + name;
    let response = await fetch(link);
    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
  
}

module.exports = router;
