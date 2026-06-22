<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import gsap from "gsap";

// ─── Your logo paths ──────────────────────────────────────
// Place SVGs in `public/img/clients/` or adjust the path.
const images = import.meta.glob("/assets/img/clients/*.svg", {
  eager: true,
  import: "default",
});
const logoList = ["01.svg", "02.svg", "03.svg", "04.svg", "05.svg", "06.svg"];

// Duplicate so we have a seamless loop (6 + 6 = 12 items)
const duplicatedLogos = [...logoList, ...logoList];

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
    duration: 2, // seconds for one full cycle (adjust for speed)
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

// ─── Play / Pause ──────────────────────────────────────────
function togglePlay() {
  if (isPlaying.value) {
    pauseAnimation();
  } else {
    resumeAnimation();
  }
}

function pauseAnimation() {
  if (animation) {
    animation.pause();
    isPlaying.value = false;
    isPaused = true;
  }
}

function resumeAnimation() {
  if (animation) {
    animation.resume();
    isPlaying.value = true;
    isPaused = false;
  }
}

// ─── Cleanup ──────────────────────────────────────────────
function killAnimation() {
  if (animation) {
    animation.kill();
    animation = null;
  }
}

// ─── Handle resize ────────────────────────────────────────
function handleResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (trackRef.value) {
      const wasPaused = isPaused;
      killAnimation();
      startAnimation();
      if (wasPaused) {
        pauseAnimation();
      }
    }
  }, 200);
}

// ─── Lifecycle ─────────────────────────────────────────────
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
  <div
    class="clients"
    ref="containerRef"
    @mouseenter="pauseAnimation"
    @mouseleave="resumeAnimation"
  >
    <!-- Gradient fades -->

    <!-- Track – GSAP animates this -->
    <div class="clients__track" ref="trackRef">
      <div
        v-for="(src, index) in duplicatedLogos"
        :key="index"
        class="clients__item"
      >
        <img :src="images[`/assets/img/clients/${src}`]" :alt="`Client ${i}`" />
      </div>
    </div>

    <!-- Controls -->
    <!-- <div class="clients__controls">
      <button
        @click.stop="togglePlay"
        class="clients__btn"
        aria-label="Toggle animation"
      >
        <span v-if="isPlaying">⏸</span>
        <span v-else>▶</span>
      </button>
    </div> -->
  </div>
</template>

<style scoped>
/* ─── Container ──────────────────────────────────────────── */
.clients {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
  /* background: #141a22; */
  border-radius: 20px;
  /* border: 1px solid rgba(255, 255, 255, 0.06); */
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
}

/* ─── Fade overlays ─────────────────────────────────────── */
.clients__fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}
.clients__fade--left {
  left: 0;
  background: linear-gradient(to right, #141a22 0%, transparent 100%);
}
.clients__fade--right {
  right: 0;
  background: linear-gradient(to left, #141a22 0%, transparent 100%);
}

/* ─── Track ──────────────────────────────────────────────── */
.clients__track {
  display: flex;
  gap: 50px;
  width: max-content;
  will-change: transform;
  padding: 0 5px;
}

/* ─── Item ───────────────────────────────────────────────── */
.clients__item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 80px;
  /* background: rgba(255, 255, 255, 0.03); */
  border-radius: 14px;
  padding: 12px 16px;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}
.clients__item:hover {
  /* background: rgba(255, 255, 255, 0.08); */
  transform: scale(1.05);
}
.clients__item img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.6);
  opacity: 0.5;
  transition:
    filter 0.4s ease,
    opacity 0.4s ease,
    transform 0.4s ease;
  display: block;
  pointer-events: none;
}
.clients__item:hover img {
  filter: grayscale(0%) brightness(1);
  opacity: 1;
  transform: scale(1.05);
}

/* ─── Controls ───────────────────────────────────────────── */
.clients__controls {
  position: absolute;
  bottom: 16px;
  right: 24px;
  z-index: 3;
}
.clients__btn {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition:
    background 0.25s ease,
    transform 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.clients__btn:hover {
  background: rgba(255, 255, 255, 0.16);
  transform: scale(1.1);
}
.clients__btn:active {
  transform: scale(0.92);
}

/* ─── Responsive ─────────────────────────────────────────── */
@media (max-width: 768px) {
  .clients {
    padding: 24px 0;
    border-radius: 12px;
  }
  .clients__fade {
    width: 40px;
  }
  .clients__item {
    width: 110px;
    height: 60px;
    padding: 8px 12px;
  }
  .clients__track {
    gap: 30px;
    padding: 0 12px;
  }
  .clients__controls {
    bottom: 12px;
    right: 16px;
  }
  .clients__btn {
    width: 34px;
    height: 34px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .clients__item {
    width: 80px;
    height: 50px;
    padding: 6px 10px;
  }
  .clients__track {
    gap: 20px;
  }
  .clients__fade {
    width: 24px;
  }
}

/* ─── Reduced motion ────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .clients__track {
    animation: none !important;
  }
  .clients__btn {
    display: none;
  }
}
</style>
