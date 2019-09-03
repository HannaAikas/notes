// NB. We have used the module pattern to wrap
// the constructor function and
// the getNoteText prototype function

(function(exports) {
  function Note(inputText) {
    this.text = inputText;
  };
  Note.prototype.getNoteText = function(){
    return this.text;
  };
  exports.Note = Note;
})(this);
