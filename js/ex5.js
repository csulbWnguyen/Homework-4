userWord = prompt("Please enter a word.");
userWord = userWord.toLowerCase();


function palindromeCheck(userWord){
    //for loop to iterate a variable to a new word backwards. 
    //Reverse array.
    //Javascript -- there was a join command. Use to change the array -> string. 
    var workword = userWord.split("");
    var reverseword = workword.reverse();
    combineword = reverseword.join("");
    combineword = combineword.toLowerCase();
    return combineword;
}

function vowels(userWord){
    //vowel list only needed in function. Everything is in lowercase prior.
    vowelList = ["a","e","i","o","u","y"];
    counter = 0;
    //for loop to iterate through the string.
    for (let _letter of userWord){
        if (vowelList.includes(_letter))
        counter++;
    };
    return counter;
}
var qPalindrome = palindromeCheck(userWord);
var counter = vowels(userWord);

if(qPalindrome!=userWord){
    console.log("Your word is not a palindrome.")
}else (
    console.log("Your word is a palindrome")
)

console.log(`Your word has ${counter} vowels.`)