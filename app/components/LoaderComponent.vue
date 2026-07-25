<template>
  <div class="loader">Loading ...</div>
</template>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  z-index: 99999;

  height: 100dvh;
  width: 100vw;

  display: grid;
  place-items: center;
  overflow: hidden;
  background: #000;
  color: #fff;

  font-size: 2rem;
  font-family: "Chillax", sans-serif;

  /* important */
  pointer-events: all;
  touch-action: none;
  overscroll-behavior: none;
}
</style>
