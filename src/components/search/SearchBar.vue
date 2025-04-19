<template>
  <div class="search-container">
    <form @submit.prevent="search" class="search-form">
      <input
          type="text"
          v-model="query"
          placeholder="Rechercher une chanson ou un artiste..."
          class="search-input"
      />
      <button type="submit" class="search-button">
        Rechercher
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      if (this.query.trim()) {
        this.$store.dispatch('searchSongs', this.query);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.search-container {
  margin: 20px 0;

  .search-form {
    display: flex;
    max-width: 600px;
    margin: 0 auto;

    .search-input {
      flex: 1;
      padding: 12px 15px;
      border: 1px solid #ddd;
      border-radius: 4px 0 0 4px;
      font-size: 16px;

      &:focus {
        outline: none;
        border-color: #4a90e2;
      }
    }

    .search-button {
      padding: 12px 20px;
      background: #4a90e2;
      color: white;
      border: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: #357dcb;
      }
    }
  }
}
</style>