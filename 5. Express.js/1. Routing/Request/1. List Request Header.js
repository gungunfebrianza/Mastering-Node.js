const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(JSON.stringify(req.headers));
	res.send('Your Request path Recorded on the server!');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
