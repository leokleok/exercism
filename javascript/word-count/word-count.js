var words = function () {};

function words (word) {
  //declare an empty object
  var wordCount = {};
  // split the word on whitespace using regex
  // after splitting, use a loop to loop through each string(oneWord)
  word.split(/\s/).forEach(function(oneWord){
    if(!wordCount[oneWord]) {
      wordCount[oneWord] = 1;
    } else {
      wordCount[oneWord]++;
    }
  });
     return wordCount;
}

module.exports = words;
