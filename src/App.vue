<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
:root {
  --dark: #444;
  --light: #fefefe;
}
body {
  * { box-sizing: border-box; }
  background-color: var(--light);
  font-family: Avenir, sans-serif;
  color: var(--dark);
  font-size: 16px;
  margin: 2rem;
  padding: 0;
}
</style>
