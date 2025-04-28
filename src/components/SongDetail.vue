<template>
    <div class="details">
      <h2>{{ song.title }} - {{ song.artist }}</h2>
      <h3>Album: {{ song.album }}</h3>
      <pre>{{ song.lyrics }}</pre>
      <audio v-if="song.preview" :src="song.preview" controls></audio>
    </div>
  </template>
  
  <script setup>
  defineProps(['song'])
  </script>
  
  <style scoped>
  .details {
    margin-top: 2rem;
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 8px;
  }
  pre {
    white-space: pre-wrap;
    font-family: inherit;
    margin: 1rem 0;
  }
  audio {
    width: 100%;
    margin-top: 1rem;
  }
  </style>
  