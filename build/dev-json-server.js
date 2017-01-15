/**
 * Created by hqq on 2017/1/13.
 */
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
server.use(router)

server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.listen(3000, function () {
  console.log('JSON Server is running')
})
