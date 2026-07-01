<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  listClass?: string;
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
  <div class="accordion__wrapper">
    <div ref="accordionwrapper" class="accordion-list">
      <div @click="toggleSection()" class="accordion__title">
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
  @media (max-width: 767.98px) {
    text-align: center;
  }

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
  justify-content: center;
  @media (max-width: 767.98px) {
    text-align: center;
  }
  &:not(:last-child) {
    margin-bottom: 32px;
  }
}

.accordion__title-text {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    transition: transform 0.5s ease-in-out;
    top: 0;
    right: -20px;
    background-image: url("/arrow.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 10px;
    width: 10px;

    margin-top: 8px;

    transform: rotate(0deg);
  }
}
.accordion__title-text--is-open {
  &::after {
    transform: rotate(-180deg);
  }
}
</style>
