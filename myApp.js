//create a note class
class Note {
	constructor(note, author) {
		this.note = note;
		this.author = author;
	}
}
// create the NotesApplication class
class NotesApplication {
	constructor() {
		this.notes = [];
		}
//create note_content and add to note list
	create(note) {
		if (note instanceof Note) {
		this.notes.push(note);
			}
		}
//list notes function	
	listNotes() {
		for(var i = 0; i < this.notes.length; i++) {
			console.log("Note ID:", i)
			console.log(this.notes[i].note, "\n");
			console.log("Author by", this.notes[i].author, "\n");
			}
		}
//get note function	
	getNote(note_id) {
		//check if note_id exist in index list
		if (this.notes.hasOwnProperty(note_id)) {
			console.log(this.notes[note_id].note, "\n");
			}
		else{
			console.log("ID not found!!! \n")
			}
		}
//	create the text search function
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
//function to delete note
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
//function to edit note
	edit(note_id, new_content){
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