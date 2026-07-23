<script setup>
const work = ref([
  {
    id: 1,
    img: "/works/01.jpg",
    text: "Space",
    link: "webdesign",
  },
  {
    id: 2,
    img: "/works/02.jpg",
    text: "Nova",
    link: "webdesign",
  },
  {
    id: 3,
    img: "/works/03.jpg",
    text: "Sonic",
    link: "webdesign",
  },
  {
    id: 4,
    img: "/works/04.jpg",
    text: "Solar",
    link: "webdesign",
  },
]);

const loaded = ref(false);
onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true;
  });

  // window.addEventListener("scroll", handleScroll, { passive: true });
});
</script>
<template>
  <main>
    <section class="work">
      <div class="work__container">
        <div class="work__header header-work">
          <div
            class="header-work__text-block text-block text-block--center loaded-animation"
            :class="{ 'is-loaded': loaded }"
          >
            <h1 class="text-block__title text-block__title--128">
              <span>Work </span>
            </h1>
            <p class="text-block__text">
              Premium web design, development, and SEO services to help your
              business stand out.
            </p>
            <!-- <a class="text-block__button button button--down">
          <img class="button__icon" src="/assets/img/button/arrow.svg" alt="" />
          <p class="button__text">My services</p>
        </a> -->
          </div>
        </div>

        <div class="work__body">
          <CardWork v-for="i in work" :key="i.id" :work="i" />
        </div>
      </div>
    </section>
  </main>
  <Line />
</template>
