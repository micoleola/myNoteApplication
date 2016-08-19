/**
 * Note Class to define a Note object.
 * @param {String} note - the content of the note.
 * @param {String} author - the author of the note.
 * @constructor
  */
class Note {
	constructor(note, author) {
		this.note = note;
		this.author = author;
	}
}
/**
 * NoteApplication Class defining the collections of note.
 * @param {Object[]} An array containing all notes.
 * @constructor
  */
class NotesApplication {
	constructor() {
		this.notes = [];
		}
/**
 * Creates an instance of the Note class and add to the array of notes.
 * @param {Object} note - an instance of the Note class
*/
	create(note) {
		if (note instanceof Note) {
		this.notes.push(note);
			}
		}
/**
 * Creates an instance of the Note class and add to the array of notes.
 * @param {Object} note - an instance of the Note class
*/	
	listNotes() {
		for(var i = 0; i < this.notes.length; i++) {
			console.log("Note ID:", i)
			console.log(this.notes[i].note, "\n");
			console.log("Author by", this.notes[i].author, "\n");
			}
		}
/**
 * Gets a note from the list of notes. 
 * @param {Number} note_id - a key with which the note object is fetched.
*/ 
	getNote(note_id) {
		//check if note_id exist in index list
		if (this.notes.hasOwnProperty(note_id)) {
			console.log(this.notes[note_id].note, "\n");
			}
		else{
			console.log("ID not found!!! \n")
			}
		}
/**
 * Searches through the list of note objects for a specified string and returns notes containing the text
 * @param {String} search_text - the string to search for.
 * @returns {Object} notes - returns the notes containing the search text
*/ 
	search(search_text){
		for(var note of this.notes) {
			var n = note.note.includes(search_text);
			if(n) {
				var i = this.notes.indexOf(note);
				console.log("Showing results for '"+ search_text+"' \n");
				console.log("Note ID:", i);
				console.log(this.notes[i].note, "\n");
				console.log("Author by", this.notes[i].author, "\n \n");
				}
			}
		}
/**
 * Deletes a note object from the list of notes by ID. 
 * @param {Number} note_id - a key with which the note object is fetched.
*/ 
	deleteNote(note_id){
		//check if note_id exist in index list
		if (this.notes.hasOwnProperty(note_id)) {
			this.notes.splice(note_id, 1);
			console.log("Note",note_id ,"successfully deleted \n")
			}
		else{
			console.log("ID not found!!! \n")
			}
		}
/**
 * Modifies a note from the list of notes. 
 * @param {Number} note_id - a key with which the note object is fetched.
 * @param {String} new_content - the content that replaces the specified note content.
*/ 	edit(note_id, new_content){
		//check if note_id exist in index list
		if (this.notes.hasOwnProperty(note_id)) {
			this.notes[note_id].note = new_content;
			console.log("Note", note_id, "changed successfully \n")
			}
		else{
			console.log("ID not found!!! \n")
			}
	}
}
