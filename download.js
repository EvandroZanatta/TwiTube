var Twit = require('twit')

var T = new Twit({
    consumer_key:         'r0byHfbTJzCTlLhmGRIu5IO0p'
  , consumer_secret:      'noNbKJYJfOBoxcz70Mt1LBialrGWuKSJqJgsOesASZ2prOjlhE'
  , access_token:         '158037102-sNcp5MfsXmYslUFWJ9hgLTx2j3p1YqoEeOIZRgsp'
  , access_token_secret:  'BGlrk0QB5EXgcyfhz8MqTV4Aey8JYMIEtZ2QAhgLxknyH'
})

T.get('search/tweets', { q: 'youtube.com', count: 1 }, function(err, data, response) {
  console.log(data.statuses[0].entities.urls[0].expanded_url);
});