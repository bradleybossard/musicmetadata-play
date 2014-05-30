var fs = require('fs');
var mm = require('musicmetadata');

// create a new parser from a node ReadStream
var parser = mm(fs.createReadStream('the_rolling_stones-harlem_shuffle.mp3'));

// listen for the metadata event
parser.on('metadata', function (result) {
  console.log(result);
});
