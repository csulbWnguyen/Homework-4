var userwords = prompt('Type in words. If you type "Stop", the program will end.');
var stopArray = "stop";

wordList= [];
//while userwords is not stop.
while (userwords.toLowerCase()!=stopArray.toLowerCase()){
    wordList.push(userwords);
    var userwords = prompt('Type in words. If you type "Stop", the program will end.');
};

//if userwords is stop. Iterate over the array. 
if (userwords.toLowerCase()==stopArray.toLowerCase()) {

    console.log("Program will end. The following is what you typed.");
    for (let i=0; i<wordList.length; i++){
        console.log(wordList[i]);
    }
};

