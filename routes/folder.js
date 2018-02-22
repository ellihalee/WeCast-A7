
/*
 * GET folder page.
 */
//Get folder data
var data = require('../data.json');
//Lets us see the size of JSON
var _ = require('underscore');

exports.view = function(req, res){

// Only Show Notes In the folder 
  var folderNotes = new Array();

  for(var i = 0; i < _.size(data.notes); i++){
    if(data.notes[i].folder == req.params.folderID){
      folderNotes.push(data.notes[i]);
    }
  }

// Find folder name 
  var folderName; 

  for(var i = 0; i < _.size(data.folders); i++){
    if(data.folders[i].folderID == req.params.folderID){
      folderName = data.folders[i].name;
    }
  }

// Render the Page
  res.render('folder', {
    folderName: folderName,  
    folderID: req.params.folderID,
    notes: folderNotes, 
  });
};
