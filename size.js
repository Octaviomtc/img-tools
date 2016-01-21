var gm      = require('gm')
  , fs      = require('fs')
  , path    = require('path')
  , sizeImg = require('image-size')
  , dir     = __dirname + '/original'
  , dirDest = __dirname + '/images'


function getFiles(dirpath) {
    return fs.readdirSync(dirpath).filter(function(file) {

      var dimensions = sizeImg(dir+'/'+file);

      if(dimensions.width>1024){
        var width  = 1024,
            height = (1024*dimensions.height)/dimensions.width

        gm(dir + '/'+file)
          .resize(width, height)
          .write(dirDest + '/'+file, function(err){
            if (err) return console.dir(arguments)
            console.log(this.outname + " created  ::  " + arguments[3])
          }
        )

      }



      /*

      gm(dir + '/' + file)
        .quality(20)
        .write(dirDest + '/' + file, function(err){
          if (err) return console.dir(arguments)
          console.log(this.outname + " created  ::  " + arguments[3])
        }
      )
      return fs.statSync(path.join(dirpath, file)).isDirectory();*/
    });
}


var files = getFiles(dir)
