
var db = require('../couch-config')

db.destroy(function() {
  console.log("database destroyed...")
})