'use strict'

var http = require('http')
var etag = require('./etag')
var pkg = JSON.stringify(require('./package.json'))

var count = 1

var server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    if (req.url === '/a') {
      var tag = etag(pkg + ++count)
    } else if (req.url === '/b') {
      var tag = etag(pkg + ++count, { algorithm: 'sha512WithRsaEncryption' })
    } else if (req.url === '/c') {
      var tag = etag(pkg + ++count, { algorithm: 'sha512WithRsaEncryption' })
    }
  }
  if (!(tag instanceof Error)) {
    res.setHeader('ETag', tag)
  }
  res.end(pkg)
})

server.listen(3000)

var signal = 'SIGINT'

// Cleanly shut down process on SIGINT to ensure that perf-<pid>.map gets flushed
process.on(signal, onSignal)

function onSignal () {
  console.error('count', count)
  // IMPORTANT to log on stderr, to not clutter stdout which is purely for data, i.e. dtrace stacks
  console.error('Caught', signal, ', shutting down.')
  server.close()
  process.exit(0)
}
