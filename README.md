# serve-file
This application is used to read a mounted file via HTTP. Simply mount a file into  `/served-file` and it will be returned.

# Inputs
This service can take 2 inputs via envroment variubles
* `PORT`: Which port to serve from. Default is `8000`
* `FILE_PATH`: Path to file to erad. Default is `/served-file`

# Example Usage

## With docker

### Default
When curled on port `8080` this will return default file "hello world"
`docker run -d -p 8080:8080 anandkumarpatel/serve-file`

### With Params
When curled on port `9000` this will return `app/index.js` file
`docker run -d -e PORT=9000 -e FILE_SERVED=/app/index.js -p 9000:9000 anandkumarpatel/serve-file`


## Without docker
### Default

When curled on port `8080` this will return default file "hello world"
`npm start`

### With Params
When curled on port `9000` this will return `app/index.js` file
`PORT=9000 FILE_SERVED=/app/index.js npm start`
