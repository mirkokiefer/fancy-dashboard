
var db = require('../couch-config')

var ratings = [
  {
    timestamp: new Date().getTime() - 1000000,
    rating: 4
  }, {
    timestamp: new Date().getTime() - 800000,
    rating: 3
  }, {
    timestamp: new Date().getTime() - 100000,
    rating: 3
  }
]

db.save(ratings, function() {
  console.log("test data loaded...")
})