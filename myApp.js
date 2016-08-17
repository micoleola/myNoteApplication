// create the NotesApplication class
class NotesApplication {
	constructor(author) {
		this.author = author;
		this.notes = [];
	}
//create note_content and add to note list
	create(note_content) {
		
		this.notes.push(note)
	}
//list notes function	
	listNotes() {
			}
//get note function	
	get(note_id){
		return this.notes[notes.indexOf(note_id)];
	}
//	create the text search function
	search(search_text){
	
	}
//function to delete note
	delete(note_id){
		
	}
//edit new content by note index
	edit(note_id, new_content) {
		
	}
//create a note class
class Note {
	constructor(properties){
		this.note_content = properties.note_content;
		this.author = properties.author;
	}
}
