<template>
  <div class="home">
    <h1 class="page-title">Recherchez vos chansons préférées</h1>
    <p class="page-subtitle">Trouvez des paroles et écoutez des extraits de millions de chansons</p>

    <SearchBar />
    <SearchResults />
  </div>
</template>

<script>
import SearchBar from '@/components/search/SearchBar.vue';
import SearchResults from '@/components/search/SearchResults.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
    SearchResults
  }
}
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  padding: 20px 0;

  .page-title {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 32px;
    color: #333;
  }

  .page-subtitle {
    margin-top: 0;
    margin-bottom: 30px;
    color: #666;
    font-size: 18px;
  }
}
</style>