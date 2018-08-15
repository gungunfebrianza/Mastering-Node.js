const express = require('express')

const app = express()


/*Syntax
res.vary(field)
*/

/*Definition
Adds the field to the Vary response header, if it is not there already.
*/
app.get('/', (req, res) => {
  res.vary('User-Agent').render('docs');
})

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
