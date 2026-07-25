<script setup lang="ts">
const isLoading = useState("loading", () => true);

watchEffect(() => {
  if (import.meta.client) {
    if (isLoading.value) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }
});
onMounted(async () => {
  await nextTick();

  requestAnimationFrame(() => {
    isLoading.value = false;
  });
});

onUnmounted(() => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
});
</script>

<template>
  <div>
    <LoaderComponent v-if="isLoading" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss"></style>
