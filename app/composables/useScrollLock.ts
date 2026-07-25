export const useScrollLock = (state: Ref<boolean>) => {
  watch(state, (locked) => {
    if (import.meta.client) {
      document.body.style.overflow = locked ? "hidden" : "";
    }
  });
};
