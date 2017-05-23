const http = require('http')
const fs = require('fs')

function requestHandler (req, res) {
  const filename = process.env.FILE_PATH || './index.js'
  const fileStream = fs.createReadStream(filename)

  fileStream.on('data', (data) => {
    res.write(data)
  })

  fileStream.on('end', () => {
    res.end()
  })

  fileStream.on('error', (err) => {
    handleError(req, res, err)
  })
}

function handleError (req, res, err) {
  res.writeHead(500, {'Content-Type': 'text/plain'})
  res.write(`Error reading file:\n ${err.message}\n`)
  res.end()
}

const fileServer = http.createServer(requestHandler)

fileServer.listen(process.env.PORT || 8000)
