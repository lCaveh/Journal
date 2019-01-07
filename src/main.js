import { Entry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#journal').keypress(function(){
    var title = $('#title').val();
    var journal = $('#journal').val();
    var newEntry = new Entry(title,journal);
    newEntry.update();
    $('.characters').text(newEntry.characters);
    $('.vowels').text(newEntry.vowels);
    $('.words').text(newEntry.words);
    $('.consonants').text(newEntry.consonants);
  });
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var journal = $('#journal').val();
    var newEntry = new Entry(title,journal);
    newEntry.update();
    $('.characters').text(newEntry.characters);
    $('.vowels').text(newEntry.vowels);
    $('.consonants').text(newEntry.consonants);
    $('.words').text(newEntry.words);
    $('.title').text(newEntry.title);
    $('.teaser').text(newEntry.teaser);
    $('.journal-form').hide();
    $('.result').show();
  });
});
