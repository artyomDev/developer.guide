//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/out'));

app.get('/:id', function(req,res) {

  res.sendFile(path.join(__dirname+'/out/' + req.params.id + '.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

console.log("Server is running on port: 8080");
