(function(exports) {
  function Note(inputText) {
    this.text = inputText;
  };
  Note.prototype.getNoteText = function(){
    return this.text;
  };
  exports.Note = Note;
})(this);
