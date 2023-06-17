// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const { rejects } = require("assert");
const { error } = require("console");
const fs = require("fs");
const { resolve } = require("path");

function printFile(err, data) {
  if(err){
    console.error(err)
    return;
  };
  return data
};

function clean(data){
  let array = data.split(" ");
  let DataArray = [];

  for(let i =0; i < array.length; i++){
    if(array[i].length == 0){
      
    }else{
      DataArray.push(array[i]);
    }
  }
  const answerStrings = DataArray.join(" ");
  console.log(answerStrings)
  return answerStrings;
}

function afterFileUpdated(err){
  if(err){
    console.error(err);
    return
  }
  console.log("done")
}



function fileRead(err, data){
  if(err){
    console.error(err)
  return;
  }
  let cleanData = clean(data);
  console.log(cleanData);

  fs.writeFile("file.txt", cleanData, "utf8", afterFileUpdated);
}


fs.readFile("file.txt",  "utf8", fileRead)




