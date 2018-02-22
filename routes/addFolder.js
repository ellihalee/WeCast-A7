var data = require("../data.json");

//Give each folder a unique ID
var uniqid = require('uniqid');

exports.addFolder = function(req, res) {   
  
  var newFolder = new Object();
  newFolder.name = req.query.name;
  newFolder.sync = "none";
  newFolder.folderID = uniqid();

  data.folders.push(newFolder);

  console.log(data);
  res.render('index', {
    folders: data.folders,
    notes: data.notes, 
  });
};
