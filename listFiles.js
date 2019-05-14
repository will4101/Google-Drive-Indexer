
/* Change the FOLDER NAME to generate tree for any specify folder */

function generateFolderTree() {
  
  try {
    
    // If you want a tree of any sub folder
    //var parent = DriveApp.getFoldersByName("FOLDER_NAME").next();
    
    // If you want to search from the top (root) folder
    var parentFolder = DriveApp.getRootFolder();
    
    getChildFolders(parentFolder);
    
  } catch (e) {
    
    Logger.log(e.toString());
    
  }
  
}


function getChildFolders(parent) {
  
  var childFolders = parent.getFolders();
  
  while (childFolders.hasNext()) {
    
    var childFolder = childFolders.next();
    
    Logger.log("Folder Name: " + childFolder.getName());
    Logger.log("Folder URL:  " + childFolder.getUrl());
    
    var files = childFolder.getFiles();
    
    while (files.hasNext()) {
      
      // Print list of files inside the folder
      Logger.log(files.next().getName());
      
    }
    
    // Recursive call for any sub-folders
    getChildFolders(childFolder);
    
  }
  
}