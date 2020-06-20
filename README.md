# url-shortcut
Backend of url-shortcut

This api was created with [Express](https://github.com/expressjs/express) and [Mongoose](https://github.com/Automattic/mongoose) to connect with mongodb.

To run this api, create a file .env and fullfil exact as .env.example

We have 3 endpoints:

- [post] /urls - Create a new shortcut url passing a body with form-data or application-json with a property url.
- [get] /urls - Get last 10 shortcut urls created
- [get] /:hashUrl - Be redirected to an url created previously

To run tests run script test.