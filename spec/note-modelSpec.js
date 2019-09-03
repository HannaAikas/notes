function testNewNoteCreation() {
  var note = new Note("My favorite language is JavaScript");
  assert.isTrue(note.text === "My favorite language is JavaScript");
};
testNewNoteCreation();

function testGetNoteText() {
  var note = new Note("My favorite language is JavaScript");
  var getText = note.getNoteText();
  assert.isTrue(getText === "My favorite language is JavaScript");
};
testGetNoteText();
