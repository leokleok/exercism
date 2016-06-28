var Hamming = function () {};

Hamming.prototype.compute = function(dna1, dna2) {

//set counter to zero
var diff = 0;
// var dna1 = 'GGACGGATTCTG';
// var dna2 = 'AGGACGGATTCT';

//loop through one set of string, and compare with the second set of string. Compare the indexes

//if there is a difference, add 1 count to existing
// return the count outside of the loop
for (i=0; i<dna1.length; i++) {
  if(dna1[i] != dna2[i]) {
    diff = diff + 1;
  }
}

return diff;

};

module.exports = Hamming;
