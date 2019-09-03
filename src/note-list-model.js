(function(exports) {
  function NoteList() {
    this.arrayOfNotes = [];
  };
  NoteList.prototype.getAllNotes = function() {
    return this.arrayOfNotes;
  };
  NoteList.prototype.createNewNote = function(text) {
    this.arrayOfNotes.push(new Note(text));
  };
  exports.NoteList = NoteList;
})(this);
