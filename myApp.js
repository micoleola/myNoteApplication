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
			console.log("Note ID:", i ,"\n", this.notes[i].note, "\n", "Author by ", this.notes[i].author, "\n");
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
		for(var note in this.notes) {
			var n = note[note_content].includes(search_text);
			if(n) {
				console.log("Showing results for ", search_text, "/n");
				getNote(note[note_id]);			
				console.log("By Author ", note[author])
				}
		}
	
//function to delete note
//	deleteNote(note_id){
		
//		}
	}
}


