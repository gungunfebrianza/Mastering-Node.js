const express = require('express')

const app = express()


/*Syntax
res.download(path [, filename] [, options] [, fn])
*/

/*Definition
Transfers the file at path as an “attachment”. Typically, browsers will prompt
the user for download.
By default, the Content-Disposition header “filename=” parameter is path
(this typically appears in the browser dialog). Override this default with
the filename parameter.

When an error occurs or transfer is complete, the method calls the optional
callback function fn. This method uses res.sendFile() to transfer the file.
The optional options argument passes through to the underlying res.sendFile()
call, and takes the exact same parameters.
*/
app.get('/', (req, res) => {
	//res.download('/coffee.jpg');

	res.download('/coffee.jpg', 'coffee.jpg');

	// res.download('/report-12345.pdf', 'report.pdf', function(err){
	//   if (err) {
	//     // Handle error, but keep in mind the response may be partially-sent
	//     // so check res.headersSent
	//   } else {
	//     // decrement a download credit, etc.
	//   }
	// });
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
