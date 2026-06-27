<template>
  <div ref="wrapper" class="marquee-wrapper">
    <div ref="track" class="marquee-track">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from "vue";

const props = defineProps({
  direction: {
    type: String,
    default: "left",
    validator: (v) => ["left", "right", "up", "down"].includes(v),
  },
  speed: {
    type: Number,
    default: 100,
  },
  pauseOnHover: {
    type: Boolean,
    default: true,
  },
  space: {
    type: Number,
    default: 30,
  },
});

const wrapper = ref(null);
const track = ref(null);

let animationId = null;
let isPaused = false;
let itemWidths = [];
let currentOffset = 0;
let lastTimestamp = 0;
let resizeObserver = null;

const getSign = () =>
  ({ left: -1, right: 1, up: -1, down: 1 })[props.direction] || -1;
const getAxis = () => (["left", "right"].includes(props.direction) ? "x" : "y");

// Measure each item + gap
const measureItems = () => {
  const children = track.value?.children;
  if (!children || children.length === 0) return false;
  const axis = getAxis();
  const sizes = [];
  let total = 0;
  for (let i = 0; i < children.length; i++) {
    const size =
      axis === "x" ? children[i].offsetWidth : children[i].offsetHeight;
    sizes.push(size + props.space);
    total += size + props.space;
  }
  itemWidths = sizes;
  return true;
};

// Apply track transform
const applyTransform = () => {
  const axis = getAxis();
  const value = currentOffset;
  const prop = axis === "x" ? "translateX" : "translateY";
  track.value.style.transform = `${prop}(${value}px) translateZ(0)`;
};

// Recycle – move item from front to back (or vice‑versa)
const recycleItems = () => {
  const trackEl = track.value;
  if (!trackEl || itemWidths.length === 0) return;

  const axis = getAxis();
  const wrapperRect = wrapper.value.getBoundingClientRect();
  const firstChild = trackEl.firstElementChild;
  const lastChild = trackEl.lastElementChild;
  if (!firstChild || !lastChild) return;

  const firstRect = firstChild.getBoundingClientRect();
  const lastRect = lastChild.getBoundingClientRect();
  const sign = getSign();
  const buffer = 0; // teleport slightly earlier

  if (axis === "x") {
    if (sign === -1) {
      // moving left
      if (firstRect.right < wrapperRect.left + buffer) {
        const moved = trackEl.removeChild(firstChild);
        trackEl.appendChild(moved);
        const size = itemWidths.shift();
        itemWidths.push(size);
        currentOffset += size;
        // Apply transform in the same frame
        applyTransform();
      }
    } else {
      // moving right
      if (lastRect.left > wrapperRect.right - buffer) {
        const moved = trackEl.removeChild(lastChild);
        trackEl.insertBefore(moved, firstChild);
        const size = itemWidths.pop();
        itemWidths.unshift(size);
        currentOffset -= size;
        applyTransform();
      }
    }
  } else {
    // vertical (same logic with top/bottom)
    if (sign === -1) {
      // moving up
      if (firstRect.bottom < wrapperRect.top + buffer) {
        const moved = trackEl.removeChild(firstChild);
        trackEl.appendChild(moved);
        const size = itemWidths.shift();
        itemWidths.push(size);
        currentOffset += size;
        applyTransform();
      }
    } else {
      // moving down
      if (lastRect.top > wrapperRect.bottom - buffer) {
        const moved = trackEl.removeChild(lastChild);
        trackEl.insertBefore(moved, firstChild);
        const size = itemWidths.pop();
        itemWidths.unshift(size);
        currentOffset -= size;
        applyTransform();
      }
    }
  }
};

// Animation loop
const animate = (timestamp) => {
  if (!lastTimestamp) lastTimestamp = timestamp;
  const delta = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  if (!isPaused) {
    const sign = getSign();
    const moveAmount = sign * props.speed * delta;
    currentOffset += moveAmount;
    applyTransform();
    recycleItems();
  }

  animationId = requestAnimationFrame(animate);
};

// Start / stop
const startAnimation = () => {
  if (animationId) cancelAnimationFrame(animationId);
  lastTimestamp = 0;
  animationId = requestAnimationFrame(animate);
};
const stopAnimation = () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
};

const pauseMarquee = () => {
  isPaused = true;
};
const resumeMarquee = () => {
  isPaused = false;
};

const handleMouseEnter = () => {
  if (props.pauseOnHover) pauseMarquee();
};
const handleMouseLeave = () => {
  if (props.pauseOnHover) resumeMarquee();
};

const rebuild = () => {
  nextTick(() => {
    stopAnimation();
    currentOffset = 0;
    if (measureItems()) {
      applyTransform();
      startAnimation();
    } else {
      setTimeout(() => rebuild(), 200);
    }
  });
};

const debounce = (fn, delay = 100) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

watch(
  () => [props.direction, props.speed, props.space],
  () => rebuild(),
);

onMounted(() => {
  rebuild();
  // Apply will-change to each child for GPU layers
  const children = track.value?.children;
  if (children) {
    for (let child of children) {
      child.style.willChange = "transform";
    }
  }
  if (window.ResizeObserver) {
    resizeObserver = new ResizeObserver(debounce(() => rebuild(), 150));
    resizeObserver.observe(wrapper.value);
  }
  const wrapperEl = wrapper.value;
  if (wrapperEl) {
    wrapperEl.addEventListener("mouseenter", handleMouseEnter);
    wrapperEl.addEventListener("mouseleave", handleMouseLeave);
  }
});

onUnmounted(() => {
  stopAnimation();
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
  const wrapperEl = wrapper.value;
  if (wrapperEl) {
    wrapperEl.removeEventListener("mouseenter", handleMouseEnter);
    wrapperEl.removeEventListener("mouseleave", handleMouseLeave);
  }
});
</script>

<style lang="scss" scoped>
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  contain: layout; /* isolate layout from parent */
  mask-image: linear-gradient(
    to right,
    transparent,
    black 15%,
    black 85%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 15%,
    black 85%,
    transparent
  );
}

.marquee-track {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: v-bind("`${props.space}px`");
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  contain: layout style; /* isolate layout and style */
}

/* Each child gets its own GPU layer via inline style */
</style>
