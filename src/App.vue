<template>
  <div id="app">
    <h1>Manajemen Catatan</h1>
    <NotesList />
  </div>
</template>

<script>
import NotesList from "./components/NotesList.vue";

export default {
  name: "App",
  components: {
    NotesList,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

#app {
  text-align: center;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
