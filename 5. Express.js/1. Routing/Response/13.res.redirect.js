const express = require('express')

const app = express()


/*Syntax
res.redirect([status,] path)
*/

/*Definition
Redirects to the URL derived from the specified path, with specified status,
a positive integer that corresponds to an HTTP status code .
If not specified, status defaults to “302 “Found”.
*/
app.get('/', (req, res) => {
  res.redirect('/foo/bar');
  res.redirect('http://example.com');
  res.redirect(301, 'http://example.com');
  res.redirect('../login');

  //Redirects can be a fully-qualified URL for redirecting to a different site:
  res.redirect('http://google.com');

  /*Redirects can be relative to the root of the host name.
  For example, if the application is on http://example.com/admin/post/new,
  the following would redirect to the URL http://example.com/admin:
  */
  res.redirect('/admin');

  /*Redirects can be relative to the current URL. For example,
  from http://example.com/blog/admin/ (notice the trailing slash),
  the following would redirect to the URL
  http://example.com/blog/admin/post/new. */
  res.redirect('post/new');
})

/*
Redirecting to post/new from http://example.com/blog/admin (no trailing slash),
will redirect to http://example.com/blog/post/new.

If you found the above behavior confusing, think of path segments as
directories (with trailing slashes) and files, it will start to make sense.

Path-relative redirects are also possible.
If you were on http://example.com/admin/post/new,
the following would redirect to http://example.com/admin/post:
res.redirect('..');

A back redirection redirects the request back to the referer,
defaulting to / when the referer is missing.
res.redirect('back');
*/

/*Status Code:
https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
*/

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
