console.log('Iniciando...');
var exec = require('child_process').exec, child;

var express = require('express');
var app = express();
app.use('/music', express.static('music'));
app.use('/static', express.static('view/static'));

app.get('/', function(req, res) {
    res.sendfile('view/index.html');
});

app.get('/download/*', function(req, res) {
    
    var link = req.query.link;
    console.log(link);
    
    console.log('Baixando: '+link);
    process.chdir('music/');
    /*var linkmusic = 'https://www.youtube.com/watch?v=wsrvmNtWU4E';*/
    
    child = exec('youtube-dl --extract-audio --audio-format mp3 -o "%(title)s.%(ext)s" --restrict-filenames ' + link,
        function(error, stdout, stderr) {
            var dados = stdout.split("\n");
            var infoFolder = dados[5];
            var localFile = infoFolder.split('estination: ');
            var response = {local: "/music/" + localFile[1]}
            res.jsonp(response);

            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

    process.chdir('../');
    
});

app.listen(process.env.PORT, function() {
    console.log('Example app listening on port ' + process.env.PORT + '!');
});