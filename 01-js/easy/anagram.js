/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(string) {
  const  array = string.split("");
  var sortedString = array.sort();
  return sortedString.join("")
}

function isAnagram(str1, str2) {
  var str1toLowerCase = str1.toLowerCase();
  var str2toLowerCase = str2.toLowerCase();

  if (sort(str1toLowerCase) == sort(str2toLowerCase)) {
    return true;
  } else {
    return false;
  }
}


module.exports = isAnagram;
