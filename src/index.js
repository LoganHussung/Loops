/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
if (!isNaN(a) && !isNaN (b)){
  return Math.max(a,b);
}else if (isNaN(a) && !isNaN (b)) {
  return b;
}else if (!isNaN(a) && isNaN (b)) {
  return a;
}else if (!isNaN(a) && !isNaN (b)){
  return NaN;
}
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

// /**
//  * PART 1
//  *
//  * Define a function maxOfThree() that takes three
//  * numbers as arguments and returns the largest of them.
//  */
//
function maxOfThree(a, b, c){
  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    return Math.max(a, b, c);
  } else if (!isNaN(a) && isNaN (b) && isNaN(c)) {
    return a;
  } else if (isNaN(a) && !isNaN (b) && isNaN(c)) {
    return b;
  } else if (isNaN(a) && isNaN (b) && !isNaN(c)) {
    return c;
  } else if (!isNaN(a) && !isNaN (b) && isNaN(c)) {
    return Math.max(a, b);
  } else if (!isNaN(a) && isNaN (b) && !isNaN(c)) {
    return Math.max(a, c);
  } else if (isNaN(a) && !isNaN (b) && !isNaN(c)) {
    return Math.max(b, c);
  } else if (isNaN(a) && isNaN (b) && isNaN(c)){
    return NaN;
  }
  }

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

// /**
//  * PART 2
//  *
//  * Write a function isVowel() that takes a character (i.e. a string of length 1)
//  * and returns true if it is a vowel, false otherwise.
//  */
//
function isVowel(char){
  if (!isNaN(char)){
    return false;
  }
  else if (char.length == 1)
  {
    var vowels = "aeiouAEIOU";
    var isVowel = vowels.indexOf(char) >= 0 ? true : false;
}
    return isVowel;
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

// /**
//  * PART 3
//  *
//  * Write a function rovarspraket() that will translate
//  * a text into a "rövarspråket". That is, double every
//  * consonant and place an occurrence of "o" in between.
//  *
//  * For example, rovarspraket("this is fun") should
//  * return the string "tothohisos isos fofunon".
//
//  */
//
function rovarspraket(x) {
  // Create an empty string
    var answer = '';
  // Recreate a for loop with foreach
    x.toString().split('').forEach(function(letter) {
      // If x is not a number
        if (isNaN(parseInt(letter)) === false) {
            answer = answer + letter;
        } else if (isVowel(letter) === true) {
            answer = answer + letter;
        } else {
            answer = answer + letter + 'o' + letter;
        }
    })
    return answer;
}

console.assert(rovarspraket("a") === "a");
console.assert(rovarspraket("b") === "bob");
console.assert(rovarspraket("cat") === "cocatot");
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot");
console.assert(rovarspraket(0) === '0');
//
// /**
//  * Part 4
//  *
//  * Define a function reverse() that computes
//  * the reversal of a string. For example,
//  * reverse("skoob") should return the
//  * string "books".
//  */
//
function reverse(str){
  // Create an empty array
  var o = [];
  // for loop to go through the string backwords
for (var i = str.length - 1, j = 0; i >= 0; i--, j++)
  o[j] = str[i];
return o.join('');

}

console.assert(reverse("books") === "skoob");
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew");

// /**
//  * Part 5
//  *
//  * Write a function findLongestWord() that takes an
//  * string returns the first, longest word in the array.
//  *
//  * i.e. findLongestWord("book dogs") should return "book"
//  */
//
function findLongestWord(sentence){
var str = sentence.split(/\W+/);
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
 }

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
