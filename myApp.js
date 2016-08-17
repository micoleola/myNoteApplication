// create the NotesApplication class
class NotesApplication {
	constructor(author) {
		this.author = author;
		this.notes = [];
	}
//create note_content and add to note list
	create(note_content) {
		var note = new Note({
			note_id: this.notes.length,
			note_content: note_content,
			author: this.author
			});
		this.notes.push(note);
	}
//list notes function	
	listNotes() {
		for(var note in this.notes){
			console.log("Note ID:", note[note_id]);
			console.log(note[note_content]);
			console.log("Author by ", note[author])
			}
	}
//get note function	
	getNote(note_id){
		var str = String(this.notes[note_id]);
		return str;
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
	delete(note_id){
		
	}
//edit new content by note index
	edit(note_id, new_content) {
		
	}
}
//create a note class
class Note {
	constructor(properties){
		this.note_id = properties.note_id;
		this.note_content = properties.note_content;
		this.author = properties.author;
	}
}
