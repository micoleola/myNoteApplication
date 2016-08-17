// create the NotesApplication class
class NotesApplication {
	constructor(author) {
		this.author = author;
		this.notes = [];
	}
//create note_content and add to note list
	create(note_content) {
		this.notes.push(note_content)
	}
//list notes function	
	listNotes() {
		for (var note in this.notes){
			console.log("Note ID:" notes.indexOf(note) "\n" note "\n" "By Author," this.author "\n")
			}
		}
	
	}
}


	
}