const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/opening-redirect', function (req, res) {
  const value = req.body.opening_days;
  console.log(value)
  if (value === "every-day") {
    res.redirect("/")
  }
  if (value === "some-days") {
    res.redirect("/User-testing-flows/opening-days-some-days")
  }
  if (value === "irregular-days") {
    res.redirect("/User-testing-flows/opening-days-irregular")
  }
})

// Add your routes here - above the module.exports line

module.exports = router
