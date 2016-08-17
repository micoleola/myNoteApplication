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
			console.log("Author by", this.notes[i].author, "\n \n");
			}
	}
//get note function	
	getNote(note_id) {
		if (note_id < this.notes.length && note_id > 0) {
			console.log(this.notes[note_id].note, "\n");
			}
		else{
			console.log("ID not found!!!")
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
//function to delete note
//	deleteNote(note_id){
		
//		}
	}
}


