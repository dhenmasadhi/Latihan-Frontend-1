import { defineStore } from "pinia";

export const useNoteStore = defineStore("noteStore", {
  state: () => ({
    notes: [],
  }),
  actions: {
    addNewNote(note) {
      this.notes.push(note);
    },
    removeNoteAt(index) {
      this.notes.splice(index, 1);
    },
    modifyNoteAt(index, newNote) {
      this.notes[index] = newNote;
    },
  },
  getters: {
    noteCount(state) {
      return state.notes.length;
    },
  },
});
