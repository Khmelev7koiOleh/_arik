<script setup lang="ts">
const isLoading = useState("loading", () => true);

let scrollPosition = 0;
let loadingStart = 0;

const MIN_LOADING_TIME = 300;

const lockScroll = (locked: boolean) => {
  if (!import.meta.client) return;

  if (locked) {
    scrollPosition = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  } else {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollPosition);
  }
};

watch(isLoading, (value) => {
  lockScroll(value);
});

const waitForImages = async () => {
  const images = Array.from(document.images);

  await Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve();

      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }),
  );
};

const showLoader = () => {
  loadingStart = Date.now();
  isLoading.value = true;
};

const hideLoader = async () => {
  await nextTick();

  await waitForImages();

  const elapsed = Date.now() - loadingStart;
  const remaining = MIN_LOADING_TIME - elapsed;

  if (remaining > 0) {
    await new Promise((resolve) => setTimeout(resolve, remaining));
  }

  isLoading.value = false;
};

const router = useRouter();

router.beforeEach(() => {
  showLoader();
});

router.afterEach(() => {
  hideLoader();
});

onMounted(async () => {
  // initial page load
  await hideLoader();
});

onUnmounted(() => {
  lockScroll(false);
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
