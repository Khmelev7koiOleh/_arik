<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { gsap } from "gsap";

const images = import.meta.glob("/assets/img/clients/*.svg", {
  eager: true,
  import: "default",
});
const logoList = ["01.svg", "02.svg", "03.svg", "04.svg", "05.svg", "06.svg"];

// Duplicate so we have a seamless loop (6 + 6 = 12 items)
const duplicatedLogos = [...logoList, ...logoList];
const track = ref<HTMLElement | null>(null);

// ─── Refs ──────────────────────────────────────────────────
const containerRef = ref(null);
const trackRef = ref(null);
const isPlaying = ref(true);

// ─── GSAP animation state ────────────────────────────────
let animation = null;
let totalWidth = 0;
let isPaused = false;
let resizeTimer = null;

// ─── Start the infinite loop ─────────────────────────────
function startAnimation() {
  const track = trackRef.value;
  if (!track) return;

  // Kill any previous animation
  if (animation) {
    animation.kill();
    animation = null;
  }

  // Get the first item to calculate width
  const items = track.querySelectorAll(".clients__item");
  if (items.length === 0) return;

  // Calculate the width of one full set (half the duplicated items)
  const gap = 50; // must match CSS `gap`
  const itemWidth = items[0].offsetWidth + gap;
  const halfCount = items.length / 2; // should be 6
  totalWidth = itemWidth * halfCount;

  // Start from x: 0
  gsap.set(track, { x: 0 });

  // ─── The infinite tween ──────────────────────────────
  animation = gsap.to(track, {
    x: -totalWidth,
    duration: 15, // seconds for one full cycle (adjust for speed)
    ease: "none",
    repeat: -1,
    onUpdate: () => {
      const x = parseFloat(gsap.getProperty(track, "x"));
      // When we've scrolled past one full set, wrap around
      if (x <= -totalWidth) {
        gsap.set(track, { x: x + totalWidth });
      }
    },
  });

  // If it was paused, pause it
  if (isPaused) {
    animation.pause();
  }
}

onMounted(() => {
  nextTick(() => {
    startAnimation();
    window.addEventListener("resize", handleResize);
  });
});

onBeforeUnmount(() => {
  killAnimation();
  window.removeEventListener("resize", handleResize);
  clearTimeout(resizeTimer);
});
</script>
<template>
  <section class="hero">
    <div class="hero__container">
      <img src="/assets/img/arik.png" alt="" class="hero__image" />

      <div class="hero__text-block text-block">
        <h1 class="text-block__title text-block__title--xl">
          <span>Web Designer </span>

          <span> & Developer </span>
        </h1>
        <p class="text-block__subtitle">
          Premium web design, development, and SEO services to help your
          business stand out.
        </p>
        <!-- <a class="text-block__button button button--down">
          <img class="button__icon" src="/assets/img/button/arrow.svg" alt="" />
          <p class="button__text">My services</p>
        </a> -->
      </div>
    </div>

    <section
      class="clients"
      ref="containerRef"
      @mouseenter="pauseAnimation"
      @mouseleave="resumeAnimation"
    >
      <!-- <div class="clients__container"> -->
      <div class="clients__track" ref="trackRef">
        <div
          v-for="(src, index) in duplicatedLogos"
          :key="index"
          class="clients__item"
        >
          <img
            :src="images[`/assets/img/clients/${src}`]"
            :alt="`Client ${index}`"
          />
        </div>
      </div>
    </section>
  </section>
  <div class="hero">hello world</div>

  <Button />
  <ButtonLight />
</template>

<style scoped></style>
