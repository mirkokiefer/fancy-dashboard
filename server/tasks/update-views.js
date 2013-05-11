
var db = require('../couch-config')
var async = require('async')

var ratings = {
  views: {
    by_timestamp: {
      map: function(doc) {
        if (doc.rating) {
          emit(doc.timestamp, doc.rating)
        }
      }
    }
  }
}

var shoutbox = {
  views: {

  }
}

var designDocs = [
  {name: '_design/ratings', doc: ratings},
  {name: '_design/shoutbox', doc: shoutbox}
]

var createDB = function(cb) { db.create(function() { cb() }) }
var updateDocs = function(cb) {
  var write = function(each, cb) { db.save(each.name, each.doc, cb) }
  async.forEach(designDocs, write, cb)
}

async.series([createDB, updateDocs], function() {
  console.log("done")
})
