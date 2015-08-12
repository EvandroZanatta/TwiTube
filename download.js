var Twit = require('twit');
var exec = require('child_process').exec, child;
/*
var redis = require("redis"),
    client = redis.createClient();
    
client.on("error", function (err) {
    console.log("Error " + err);
});
*/

var T = new Twit({
    consumer_key:         'r0byHfbTJzCTlLhmGRIu5IO0p'
  , consumer_secret:      'noNbKJYJfOBoxcz70Mt1LBialrGWuKSJqJgsOesASZ2prOjlhE'
  , access_token:         '158037102-sNcp5MfsXmYslUFWJ9hgLTx2j3p1YqoEeOIZRgsp'
  , access_token_secret:  'BGlrk0QB5EXgcyfhz8MqTV4Aey8JYMIEtZ2QAhgLxknyH'
})

process.chdir('music/');

T.get('search/tweets', { q: 'youtube.com musica lang:pt', count: 5 }, function(err, data, response) {
  for (var i in data.statuses) {
    
    var val = data.statuses[i].user.name;
    console.log('Baixando a musica de '+val);
    
    child = exec('youtube-dl --extract-audio --audio-format mp3 '+data.statuses[i].entities.urls[0].expanded_url,
    function (error, stdout, stderr) {
      //console.log('stdout: ' + stdout);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
  }
  //console.log(data.statuses[0].user);
  //console.log(data.statuses[0].entities);
  //console.log(data.statuses[0].entities.urls[0]);
  
  /*child = exec('youtube-dl --extract-audio --audio-format mp3 '+data.statuses[0].entities.urls[0].expanded_url,
    function (error, stdout, stderr) {
      //console.log('stdout: ' + stdout);
      console.log('Baixando a musica');
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });*/
  
  /*
  process.chdir('music/');
  console.log(process.cwd());
  process.chdir('../');
  console.log(process.cwd());
  */
});