function testNewNoteCreation() {
  var note = new Note("My favorite language is JavaScript");
  assert.isTrue(note.text === "My favorite language is JavaScript");
};
testNewNoteCreation();
counter++;

function testGetNoteText() {
  var note = new Note("My favorite language is JavaScript");
  var getText = note.getNoteText();
  assert.isTrue(getText === "My favorite language is JavaScript");
};
testGetNoteText();
counter++;

function testGetAllNotes() {
  var note1 = new Note("My favorite language is JavaScript");
  var noteList = new NoteList();
  // BELOW IS A DUMMY FOR INITIAL TESTING
  noteList.arrayOfNotes = [note1]
  assert.isTrue(noteList.getAllNotes()[0] === note1);
};
testGetAllNotes();
counter++;

function testStoresNewNoteInArray() {
  var testTextString = "Favourite drink: seltzer";
  var noteList = new NoteList();
  noteList.createNewNote(testTextString);
  assert.isTrue(noteList.getAllNotes()[0].text === testTextString);
};
testStoresNewNoteInArray();
counter++;

function testDisplayAllNotes(){
  var stringHTML= "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
  const noteOne = {
    note1: "Favourite food: pesto"
  }
  const noteTwo = {
    note2: "Favourite drink: seltzer"
  }
  var noteList = [noteOne, noteTwo];

  var noteListView = new NoteListView();
  result = noteListView.displayAllNotes();
  assert.isTrue(result === stringHTML);

}
testDisplayAllNotes();
counter++;