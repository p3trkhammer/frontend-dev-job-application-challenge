<template>
  <header>
    <NavBar></NavBar>
  </header>
  <body>
  <div class="relative body">
    <NuxtPage></NuxtPage>
  </div>
  </body>
    <footer>
      <a class="footer"><NuxtLink class="left-element" to="/about">About this project</NuxtLink></a>
    </footer>
</template>

<style>

.body {
  height: 60vh;
}

.footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: darkgrey;
  height: 20vh;
}
.left-element {
  margin-right: auto;
}
</style>

<script setup lang="ts">
</script>