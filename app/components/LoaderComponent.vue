<template>
  <div class="loader"><div class="loading-text">Loading ...</div></div>
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
.loading-text {
  font-size: 2rem;
  font-family: "Chillax", sans-serif;

  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}
</style>
