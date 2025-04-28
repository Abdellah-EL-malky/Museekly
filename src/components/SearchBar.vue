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
    padding: 10px;
    font-size: 16px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: block;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  </style>
