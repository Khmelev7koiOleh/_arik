import { ref, onMounted, onUnmounted } from "vue";

export function useIntersection(threshold = 0.3) {
  const target = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!target.value) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true;

          // stop after first animation
          observer?.disconnect();
        }
      },
      {
        threshold,
      },
    );

    observer.observe(target.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return {
    target,
    isVisible,
  };
}
