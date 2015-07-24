var fs = require("fs");
var path = require("path");

fs.unlink(path.join(__dirname, "testFileThatMustExists.txt"), function (err) {
  if (err) throw err;
  console.log('successfully deleted testFileThatMustExists.txt');
});
