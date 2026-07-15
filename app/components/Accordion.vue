<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  wrapperClass?: string;
  listClass?: string;
  titleClass?: string;

  img?: string;
  rotate?: string;
  width?: string;
}>();
const list = ref<HTMLElement | null>(null);

const isMobile = ref(false);
const smth = (item: any) => {
  console.log(item);
};
const onOpen = ref(false);
const toggleSection = () => {
  onOpen.value = !onOpen.value;

  requestAnimationFrame(() => {
    if (!list.value) return;

    if (onOpen.value) {
      list.value.style.maxHeight = list.value.scrollHeight + "px";
    } else {
      list.value.style.maxHeight = "0px";
    }
  });
};

const checkMobile = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth <= 767.98;
  }
};

onMounted(() => {
  checkMobile();

  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<template>
  <div class="accordion__wrapper" :class="props.wrapperClass">
    <div ref="accordionwrapper" class="accordion-list">
      <div
        @click="toggleSection()"
        class="accordion__title"
        :class="props.titleClass"
      >
        <div
          class="accordion__title-text"
          :class="{ 'accordion__title-text--is-open': onOpen }"
        >
          <slot name="title" />
        </div>
      </div>
      <ul
        ref="list"
        class="accordion__list"
        :class="[
          { 'accordion__list--is-open': onOpen },
          props.listClass, // 👈 Merge the custom class
        ]"
        aria-label="CMS navigation"
      >
        <slot name="list" />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.accordion__wrapper {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  @media (min-width: 767.98px) {
    align-items: start;
  }
}
.accordion__list {
  width: 100%;

  max-height: 0;
  overflow: hidden;
  opacity: 0;

  transition:
    max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.8s ease;
}
.accordion__list--is-open {
  opacity: 1;
}
.accordion__title {
  cursor: pointer;
  display: flex;
  align-content: center;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
}

.accordion__title-text {
  position: relative;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    transition: rotate 0.5s ease-in-out;
    top: 0;
    right: -20px;
    background-image: v-bind("'url(' + props.img + ')'");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    aspect-ratio: 1/1;
    width: v-bind(width);
    rotate: v-bind(rotate);
    margin-top: 10px;

    rotate: 0deg;
  }
}
.accordion__title-text--is-open {
  &::after {
    rotate: v-bind(rotate);
  }
}
</style>
