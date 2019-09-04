function testForController(){
  //create double
  doubleNote = {
    text: "Favourite drink: seltzer"
  }
  doubleNoteList = {
    arrayOfNotes : [doubleNote]
  }

  //
  var subject = new NoteController(doubleNoteList);

  //before calling subject.display()
  var elementOfInterest = document.getElementById("app");
  assert.isTrue(elementOfInterest.innerText === "hello");
  //after calling subject.display()
  var testString = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";
  assert.isTrue(elementOfInterest.innerText === testString);
}

testForController();
counter++;
