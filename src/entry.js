export function Entry(title, journal) {
  this.title= title;
  this.journal= journal;
  this.teaser= "";
  this.words= 0;
  this.charactersArray= [];
  this.characters= 0;
  this.vowels= 0;
  this.consonants= 0;
}
Entry.prototype.getCharacters= function(){
  this.charactersArray= this.journal.split('');
  this.characters= this.charactersArray.length;
}

Entry.prototype.getVowels= function(){
  this.vowels= 0;
  var that = this;
  this.charactersArray.forEach(function(character){
    if (isVowel(character)){
      that.vowels++;
    }
  });
  return that.vowels;
}
Entry.prototype.getWords= function(){
  this.words= 0;
  var that = this;
  this.charactersArray.forEach(function(character){
    if (character ===' ' || character === "," || character === "."){
      that.words++;
    }
    if (that.words<8){
      that.teaser+=character;
    }
  });
  return that.vowels;
}
Entry.prototype.getConsonants= function(){
  this.consonants= 0;
  var that = this;
  this.charactersArray.forEach(function(character){
    if (!isVowel(character) && isLetter(character)){
      that.consonants++;
    }
  });
  return that.consonants;
}
Entry.prototype.update= function(){
  this.getCharacters();
  this.getVowels();
  this.getWords();
  this.getConsonants();
}

function isLetter(str) {
  return str.match(/[a-z]/i);
}
function isVowel(str) {
  var result=false;
  var allVowels= ['a','e','i','o','u','A','E','I','O','U'];
  allVowels.forEach(function(element){
    if (element=== str) {
      console.log(str);
      result= true;
    }
  });
  return result;
}
