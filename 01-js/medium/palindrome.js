/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverseAndClear(str) {
  var answer = "";
  for(let i = str.length -1 ; i >= 0; i --){
    answer += str[i];
  }
  return answer;
  
};

function transformString(str) {
  let answer = "";
  for (let i = 0;i <str.length;i++){
    if(str[i]=== " "|| str[i]===","|| str[i]==="."|| str[i]==="?" || str[i]==="!"){
      
    }else{
      answer += str[i];
    }
  }
  return answer;
}


function isPalindrome(str) {
  let string = str.toLowerCase();
      string= transformString(string);
  let reversedString = reverseAndClear(string);
console.log(reversedString)
console.log(string)

  if (reversedString === string) {
    console.log("its a palientdrome")
    return true;
  } else {
       console.log("its not a palientdrome")
    return false;
  }
}
isPalindrome()