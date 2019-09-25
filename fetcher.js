const args = process.argv.slice(2);
const request = require("request");
const fs = require("fs");
const websiteGrabber = function (arg1, arg2){
request(arg1, (error, response, body) => {
  fs.writeFile(arg2, body, (err) => {
    if(!err){console.log("I'm done.");}
  });
}
);
};



websiteGrabber(args[0], args[1]);

// function getWebsite(body, callback) {
//   request("https://www.spacejam.com/archive/spacejam/movie/jam.html", (error, response, body) => {
//     // console.log('error:', error); // Print the error if one occurred
//     // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     callback(body);
//   });
// };
// function getWebsite(site, callback) {
//   request(site, (body) => {
//     fs.writeFile("./index.html", body, (err) => {
//       if (!err) {
//         callback(body);
//       }
//     });
//   });
// }

// getWebsite("https://www.spacejam.com/archive/spacejam/movie/jam.html", (spacejam) => {


//   console.log("Return value: ", spacejam);
// });


// // fs.writeFile("./index.html", "Hello", (err) => {
// //   if (err){ throw err;}
// //   console.log("The file has been saved");
// // });

// fs.writeFile("./index.html", callback, (err) => {
//   if (err) { throw err; }
//   data = getWebsite();
// })