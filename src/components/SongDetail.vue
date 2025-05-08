<template>
    <div class="details card">
      <h2 class="song-title">{{ song.title }} - {{ song.artist }}</h2>
      <h3 class="album-title mb-2">Album: {{ song.album }}</h3>
      <div class="lyrics-container">
        <pre>{{ song.lyrics }}</pre>
      </div>
      <audio v-if="song.preview" :src="song.preview" controls class="audio-player"></audio>
    </div>
  </template>

  <script setup>
  defineProps(['song'])
  </script>

  <style scoped>
  .details {
    margin-top: 2rem;
  }

  .song-title {
    color: var(--primary-color);
    font-size: 1.5rem;
    border-bottom: 2px solid var(--primary-light);
    padding-bottom: 0.5rem;
  }

  .album-title {
    color: var(--text-secondary);
    font-size: 1.2rem;
    font-weight: 500;
  }

  .lyrics-container {
    background-color: rgba(98, 0, 234, 0.05);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin: 1rem 0;
    max-height: 400px;
    overflow-y: auto;
    border-left: 3px solid var(--primary-light);
  }

  pre {
    white-space: pre-wrap;
    font-family: inherit;
    margin: 0;
    line-height: 1.8;
  }

  .audio-player {
    width: 100%;
    margin-top: 1rem;
    border-radius: var(--border-radius);
    background-color: var(--primary-dark);
  }
  </style>
