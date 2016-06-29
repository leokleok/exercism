var dnaTranscriber = function () {};


//store into an object so you can assess the key value pairs
dnaTranscriber.prototype.toRna = function (dna) {
  var dnaRna = {
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'U'
  };

//run a function that returns the obj key's value
//mapping returns it into an array
//join() method joins all elements of an array into a string.
  function translate(nucleotide) {
         return dnaRna[nucleotide];
     }
     return dna.split().map(translate).join();
 };

module.exports = dnaTranscriber;
