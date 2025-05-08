  <template>
    <div class="search-bar">
      <input v-model="query" @input="onSearch" placeholder="Rechercher des paroles de chansons..." />
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'

  const query = ref('')

  const emit = defineEmits(['onSearch'])

  function onSearch() {
    emit('onSearch', query.value)
  }
  </script>

  <style scoped>
  .search-bar input {
    padding: 12px 16px;
    font-size: 16px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: block;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all var(--transition-speed) ease;
    outline: none;
  }

  .search-bar input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(98, 0, 234, 0.2);
  }

  .search-bar input::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }
  </style>
