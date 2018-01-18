function forLoop(array){
  for(let i=0; i<20; i++){
    if(i===1){
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("I am " + i + " strange loops");
    }
  }
  return array;
}

function printArray(array){
  for(let i = 0; i<array.length; i++){
    console.log(array[i]);
  }
}

var a = [];
printArray(forLoop(a));

function whileLoop(number){
  while(number > 0){
    console.log(number);
    number --;
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do
    {array.splice(array.length-1, 1)}  
  while(1>2){
    
  }
  
}