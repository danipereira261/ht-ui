const express = require('express');
const path = require('path');
const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/ht-ui'));

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/ht-ui/index.html'));
});

app.listen(process.env.PORT || 8080);