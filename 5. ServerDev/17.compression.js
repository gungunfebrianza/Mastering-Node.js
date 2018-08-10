const express = require('express')
const compression = require('compression')
const app = express()

/*Include the compression middleware function. Specify the level of compression
to 9 (best compression) and threshold, or minimum size in bytes that the
response should have to consider compressing the response body, to 0 bytes:*/
app.use(compression({level: 9, threshold: 0}))

/*Define a route method to handle GET requests for path "/" which will serve a
sample HTML content that we expect to be compressed and will print the
encodings that the client accepts:*/
app.get('/', (request, response, next) => {
  response.send(`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>WebApp powered by ExpressJS</title>
	</head>
	<body>
		<section role="application">
			<h1>Hello! this page is compressed!</h1>
		</section>
	</body>
	</html>
	`)
  console.log(request.acceptsEncodings())
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)

/*The output of the Terminal will show the content encoding mechanism that the
client (for example web browser) supports. It may look something like this:
      [ 'gzip', 'deflate', 'sdch', 'br', 'identity' ]

The content encoding mechanism sent by the client is used by compression
internally to know if compression is supported. If compression is not supported,
then the response body is not compressed.

The compression library sets the Content-Encoding header to the encoding
mechanism used for compressing the response body.

The threshold option is set by default to 1 KB which means that if the response
size is below the number of bytes specified, then it is not compressed. Set it
to 0 or false to compress the response even when the size is below 1 KB*/
