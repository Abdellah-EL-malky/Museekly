<template>
    <ul class="song-list">
      <li v-for="song in songs" :key="song.id" @click="$emit('selectSong', song)">
        <strong>{{ song.title }}</strong> - {{ song.artist.name }}
      </li>
    </ul>
  </template>
  
  <script setup>
  defineProps(['songs'])
  </script>
  
  <style scoped>
  .song-list {
    list-style: none;
    padding: 0;
  }
  .song-list li {
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  .song-list li:hover {
    background-color: #f0f0f0;
  }
  </style>