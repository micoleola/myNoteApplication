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
//create note object and add to note list
	create(note) {
		if (note instanceof Note) {
		this.notes.push(note);
		}
	}
//create method to list notes	
	listNotes() {
		for(var i = 0; i < this.notes.length; i++) {
			console.log("Note ID:", i)
			console.log(this.notes[i].note, "\n");
			console.log("Author by", this.notes[i].author, "\n");
			}
	}
//create method to get note by id
	getNote(note_id) {
		if (note_id < this.notes.length && note_id >= 0 && note_id % 1 === 0) {
			console.log(this.notes[note_id].note, "\n");
			}
		else{
			console.log("ID not found!!! \n")
			}
}
//	create the text search method
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
//create method to delete note
	deleteNote(note_id){
		if (note_id < this.notes.length && note_id >= 0 && note_id % 1 === 0) {
			this.notes.splice(note_id, 1);
			console.log("Note",note_id ,"successfully deleted \n")
			}
		else{
			console.log("ID not found!!! \n")
			}
		}
//create method to edit note
	edit(note_id, new_content){
		if (note_id < this.notes.length && note_id >= 0 && note_id % 1 === 0) {
			this.notes[note_id].note = new_content;
			console.log("Change successfull \n")
			}
		else{
			console.log("ID not found!!! \n")
			}
	}
}