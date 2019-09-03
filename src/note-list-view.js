(function(exports) {
  function NoteListView(){
    this.noteList = new NoteList();
    console.log(this.noteList);
  }

  NoteListView.prototype.displayAllNotes = function(){
    // ATTENTION: look into this below again 
    return "<ul><li><div>" + this.noteList.text + "</div></li></ul>"
  }
  exports.NoteListView = NoteListView;

})(this);
