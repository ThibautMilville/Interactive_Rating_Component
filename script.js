class NoteApp {
  constructor() {
    this.mainContainer = document.querySelector('.start-state-container');
    this.secondContainer = document.querySelector('.thank-you-state-container');
    this.button = document.querySelector('button');
    this.notes = document.querySelectorAll('.note');
    this.finalNote = document.querySelector('.final-note');
    this.warning = document.querySelector('.warning');

    this.addNoteListeners();
    this.addButtonListener();
  }

  // Runs the notes and add an event on the click
  addNoteListeners() {
    this.notes.forEach(note => {
      note.addEventListener('click', () => {
        this.handleNoteClick(note);
      });
    });
  }

  // Click event on each note
  handleNoteClick(note) {
    if (note.classList.contains('active')) {
      note.classList.remove('active');
    } else {
      this.notes.forEach(note => {
        note.classList.remove('active');
      });
      note.classList.add('active');
    }
    this.finalNote.innerHTML = note.textContent;
  }

  // Click event on the button
  addButtonListener() {
    this.button.addEventListener('click', () => {
      if (this.finalNote.innerHTML !== '') {
        this.mainContainer.classList.add('hidden');
        this.secondContainer.classList.replace('hidden', 'flex');
      } else {
        this.warning.classList.toggle('hidden');
        setTimeout(() => this.warning.classList.toggle('hidden'), 3000);
      }
    });
  }
}

// Instantiate the NoteApp class
const noteApp = new NoteApp();