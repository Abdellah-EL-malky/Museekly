<template>
  <div id="app">
    <header class="app-header">
      <h1 class="app-title">
        <router-link to="/">LyricsFinder</router-link>
      </h1>
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025 LyricsFinder - Trouvez les paroles de vos chansons préférées</p>
    </footer>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f7fa;
  color: #333;
  line-height: 1.5;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background-color: #4a90e2;
  color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .app-title {
    margin: 0;
    font-size: 24px;

    a {
      color: white;
      text-decoration: none;
    }
  }
}

.app-main {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.app-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px 20px;
  margin-top: auto;
  font-size: 14px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

// Responsive adjustments
@media (max-width: 768px) {
  .app-main {
    padding: 15px;
  }
}
</style>