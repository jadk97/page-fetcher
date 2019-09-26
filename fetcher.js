const args = process.argv.slice(2);
const request = require("request");
const fs = require("fs");


const htmlGrabber = function (arg1, arg2){
  request(arg1, (error, response, body) => {
    htmlToFile(arg2, body);
  });
}


const htmlToFile = function (filename, html){
  fs.writeFile(filename, html, (err) => {
    if(!err){
      console.log("Finished writing file");
    }
    else{
    return err;
    }
  });
};

htmlGrabber(args[0], args[1]);

