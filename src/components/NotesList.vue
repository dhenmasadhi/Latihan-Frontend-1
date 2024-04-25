<template>
  <div>
    <h2>Daftar Catatan (Jumlah: {{ noteCount }})</h2>
    <input v-model="newNote" placeholder="Catatan baru" />
    <button @click="addNewNote">Tambah Catatan</button>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        {{ note }}
        <button @click="deleteNote(index)">Hapus</button>
        <button @click="editNote(index, note)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useNoteStore } from "../stores/noteStore";

export default {
  data() {
    return {
      newNote: "",
    };
  },
  computed: {
    notes() {
      const store = useNoteStore();
      return store.notes;
    },
    noteCount() {
      const store = useNoteStore();
      return store.noteCount;
    },
  },
  methods: {
    addNewNote() {
      const store = useNoteStore();
      store.addNewNote(this.newNote); // Memanggil aksi untuk menambah catatan baru
      this.newNote = ""; // Reset input setelah menambahkan catatan baru
    },
    deleteNote(index) {
      const store = useNoteStore();
      store.removeNoteAt(index);
    },
    editNote(index, note) {
      console.log("Edit Note:", index, note); // Debugging
      const newNote = prompt("Edit Catatan", note);
      if (newNote !== null) {
        const store = useNoteStore();
        store.modifyNoteAt(index, newNote);
      }
    },
  },
};
</script>
