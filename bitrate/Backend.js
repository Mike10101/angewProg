//Express js initialisieren //doppelte anführungsstriche html datei
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');
const port = 3000;
app.listen(port, function(){
	console.log('listening on port ' + port);
});

/*


*/

app.get('/form', function(request, response){
	res.sendFile(__dirname + '/form.html');
});



