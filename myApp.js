class NotesApplication {
	constructor(author) {
		this.author = author;
		this.notes = [];
	}
	
	note_content(note) {
		this.notes.push(note)
	}
	
	listNotes() {
		
	}
}