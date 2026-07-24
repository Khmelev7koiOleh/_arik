<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const burgerOn = ref(false);
watch(burgerOn, (open) => {
  document.body.classList.toggle("no-scroll", open);
});

const isResizing = ref(false);

let timeout: ReturnType<typeof setTimeout>;

let lastIsMobile: boolean | null = null;

onMounted(() => {
  const mq = window.matchMedia("(max-width: 767.98px)");

  const handler = (e: MediaQueryListEvent) => {
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

const goTo = (path: string) => {
  if (burgerOn.value) {
    burgerOn.value = false;
    router.push(path);
  } else {
    router.push(path);
  }
};
</script>

<template>
  <div class="header">
    <div class="header__body">
      <div class="header__content">
        <NuxtLink @click="goTo('/')">
          <img class="header__logo" src="/assets/img/logo.svg" alt="Logo" />
        </NuxtLink>
        <div
          class="header__nav nav-header"
          :class="{
            'nav-header--active': burgerOn,
            'nav-header--no-transition': isResizing,
          }"
        >
          <NuxtLink
            class="nav-header__link"
            :class="{ 'nav-header__link--active': $route.path === '/services' }"
            @click="goTo('/services')"
            >Services</NuxtLink
          >
          <NuxtLink
            class="nav-header__link"
            :class="{
              'nav-header__link--active': $route.path.startsWith('/work'),
            }"
            @click="goTo('/work/work')"
            >Work</NuxtLink
          >
          <NuxtLink
            class="nav-header__link"
            :class="{ 'nav-header__link--active': $route.path === '/about' }"
            @click="goTo('/about')"
            >About</NuxtLink
          >
          <NuxtLink
            class="nav-header__link"
            :class="{
              'nav-header__link--active': $route.path.startsWith('/blog'),
            }"
            @click="goTo('/blog/blog')"
            >Blog</NuxtLink
          >
          <NuxtLink
            class="nav-header__link"
            :class="{ 'nav-header__link--active': $route.path === '/pricing' }"
            @click="goTo('/pricing')"
            >Pricing</NuxtLink
          >
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
