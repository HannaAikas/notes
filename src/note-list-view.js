(function(exports) {
  function NoteListView(NoteList){
    this.NoteList = NoteList;
  }

  NoteListView.prototype.displayAllNotes = function(){
    var noteArray = this.NoteList.arrayOfNotes;
    var arrayWithTags = noteArray.map(function(note) {
      return "<li><div>" + note.text + "</div></li>"
    });
    arrayWithTags = arrayWithTags.join("")
    arrayWithTags = "<ul>" + arrayWithTags + "</ul>"
    return arrayWithTags
  }
  exports.NoteListView = NoteListView;

})(this);
