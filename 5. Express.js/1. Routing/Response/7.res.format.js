const express = require('express')

const app = express()


/*Syntax
res.format(object)
*/

/*Definition
Performs content-negotiation on the Accept HTTP header on the request object,
 when present. It uses req.accepts() to select a handler for the request,
 based on the acceptable types ordered by their quality values.

 If the header is not specified, the first callback is invoked.
 When no match is found, the server responds with 406 “Not Acceptable”, or
 invokes the default callback.

The Content-Type response header is set when a callback is selected.
However, you may alter this within the callback using methods such as
res.set() or res.type().

The following example would respond with { "message": "hey" } when
the Accept header field is set to “application/json”
or “ * / json” (however if it is “* / *”, then the response will be “hey”).
*/
app.get('/', (req, res) => {
	res.format({
	  'text/plain': function(){
	    res.send('hey');
	  },

	  'text/html': function(){
	    res.send('<p>hey</p>');
	  },

	  'application/json': function(){
	    res.send({ message: 'hey' });
	  },

	  'default': function() {
	    // log the request and respond with 406
	    res.status(406).send('Not Acceptable');
	  }
	});
})


app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
