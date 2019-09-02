# Notes app - Updates as at Mon 2 Sept 2019

## Purpose
* Build a notes app as a frontend, single page web app using pure JavaScript.

## Progress to date - Currently working on:
### Note model specification
- Code is in a file called `note-model.js`.
- Code is wrapped in the module pattern.
- Uses the constructor and prototype pattern to define a note model object that can be instantiated.
- Takes the text of a note upon instantiation e.g. `My favourite language is JavaScript`.
- Stores the text in a `text` property on the note.
- Has a method that will return the note text.

## To do
* See below list of User Stories

### User Stories - For full project

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

(NB: notes do not need to be permanently stored.  If the user refreshes their web page, they'll lose their notes, and that's fine.)
