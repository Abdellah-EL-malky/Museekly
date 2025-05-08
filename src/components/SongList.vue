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
    margin: 0;
  }

  .song-list li {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    display: flex;
    align-items: center;
  }

  .song-list li:last-child {
    border-bottom: none;
  }

  .song-list li:hover {
    background-color: rgba(98, 0, 234, 0.05);
    padding-left: 1.25rem;
  }

  .song-list li strong {
    color: var(--primary-dark);
    margin-right: 0.5rem;
  }

  .song-list li:before {
    content: "♪";
    color: var(--primary-color);
    margin-right: 0.5rem;
    font-size: 1.2rem;
    opacity: 0;
    transform: translateX(-10px);
    transition: all var(--transition-speed) ease;
  }

  .song-list li:hover:before {
    opacity: 1;
    transform: translateX(0);
  }
  </style>
