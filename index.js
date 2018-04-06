var https = require('https');
var http = require('https');
var Options = require('./options.json');
var fs = require('fs');

var httpsOption = {
    key: fs.readFileSync(Options.https_options.key),
    cert: fs.readFileSync(Options.https_options.cert)
};

https.createServer(options, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
}).listen(8000);