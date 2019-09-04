(function(exports) {
  function NoteController(NoteList) {
    this.noteListView = new NoteListView(NoteList);
    NoteController.prototype.display = function() {
      var noteString = this.noteListView.displayAllNotes();
      var htmlElement = document.getElementById("app");
      htmlElement.innerHTML = noteString
    };
  }

  exports.NoteController = NoteController;
})(this);
