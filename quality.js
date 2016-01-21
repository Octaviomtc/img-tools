var gm      = require('gm')
  , fs      = require('fs')
  , path    = require('path')
  , dir     = __dirname + '/images'
  , dirDest = __dirname + '/quality'


function getFiles(dirpath) {
    return fs.readdirSync(dirpath).filter(function(file) {
      gm(dir + '/' + file)
        .quality(70)
        .write(dirDest + '/' + file, function(err){
          if (err) return console.dir(arguments)
          console.log(this.outname + " created  ::  " + arguments[3])
        }
      )
      return fs.statSync(path.join(dirpath, file)).isDirectory();
    });
}


var files = getFiles(dir)
