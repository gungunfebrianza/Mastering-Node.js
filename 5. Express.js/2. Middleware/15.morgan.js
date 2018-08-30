const express = require('express')
const morgan = require('morgan')
const app = express()

/*Include the morgan configurable middleware. Pass 'dev' as the format we will
use as the first argument to the middleware function:*/
app.use(morgan(':http-version :date[web] :method :referrer :status :url :remote-addr :user-agent'))
/*Configuration
dev
-
Concise output colored by response status for development use. The :status
token will be colored red for server error codes, yellow for client error codes,
cyan for redirection codes, and uncolored for all other codes.
:method :url :status :response-time ms - :res[content-length]

combined
-
Standard Apache combined log output.
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version"
:status :res[content-length] ":referrer" ":user-agent"

short
-
Shorter than default, also including response time.
:remote-addr :remote-user :method :url HTTP/:http-version :status
:res[content-length] - :response-time ms


*/
//Define a route method to handle all GET requests:
app.get('*', (request, response, next) => {
  response.send('Hello Morgan!')
})

app.listen(9999, () => console.log('Web Server running on port 9999'),)
