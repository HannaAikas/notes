function testForController(){
  doubleNote = {
    text: "Favourite drink: seltzer"
  }
  doubleNoteList = {
    arrayOfNotes : [doubleNote]
  }

  var subject = new NoteController(doubleNoteList);

  //before calling subject.display()
  var elementOfInterest = document.getElementById("app");
  assert.isTrue(elementOfInterest.innerText === "hello");
  // let's call
  subject.display();
  //after calling subject.display()
  var testString = "Favourite drink: seltzer";
  assert.isTrue(elementOfInterest.innerText == testString);
}

testForController();
counter++;
