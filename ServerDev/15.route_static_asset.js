/*Let's pretend that you have a big project that serves dozens of static files,
including images, font files, and PDF documents (those about privacy and
  legal stuff) among others.

  You decided that you want to keep them in separate files, but you do not want
  to change the mount path or URI. They can be served under /www,
  for example, but they will exist in separate directories in your project
  directory.*/

  const express = require('express')
  const path = require('path')
  const app = express()
  const staticRouter = express.Router()

  const assets = {
  	first: path.join(__dirname, './www2'),
  	second: path.join(__dirname, './www')
  }
  staticRouter
  	.use(express.static(assets.first))
  	.use(express.static(assets.second))

  app.use('/', staticRouter)

  app.listen(
  	9999,
  	() => console.log('Web Server running on port 9999'),
  )
