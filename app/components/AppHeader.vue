<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
const burgerOn = ref(false);
watch(burgerOn, (open) => {
  document.body.classList.toggle("no-scroll", open);
});

const isResizing = ref(false);

let timeout: any;

let lastIsMobile = null as any;

onMounted(() => {
  const mq = window.matchMedia("(max-width: 767.98px)");

  const handler = (e: any) => {
    const isMobile = e.matches;

    // only trigger when crossing breakpoint
    if (lastIsMobile !== null && lastIsMobile !== isMobile) {
      isResizing.value = true;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isResizing.value = false;
      }, 200);
    }

    lastIsMobile = isMobile;
  };

  // initial state
  lastIsMobile = mq.matches;

  // listen ONLY to breakpoint changes
  mq.addEventListener("change", handler);

  onUnmounted(() => {
    mq.removeEventListener("change", handler);
  });
});
</script>

<template>
  <div class="header">
    <div class="header__body">
      <div class="header__content">
        <img class="header__logo" src="/assets/img/logo.svg" alt="Logo" />

        <div
          class="header__nav nav-header"
          :class="{
            'nav-header--active': burgerOn,
            'nav-header--no-transition': isResizing,
          }"
        >
          <a href="#" class="nav-header__link">Services</a>
          <a href="#" class="nav-header__link">Work</a>
          <a href="#" class="nav-header__link">About</a>
          <a href="#" class="nav-header__link">Blog</a>
          <a href="#" class="nav-header__link">Pages</a>
        </div>
        <div class="header__button-container">
          <a class="header__button button button--light">Lets talk</a>
        </div>
        <div
          class="header__burger"
          :class="{ 'header__burger--active': burgerOn }"
          @click="burgerOn = !burgerOn"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
