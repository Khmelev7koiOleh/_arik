<script setup lang="ts">
interface Work {
  id: number;
  img: string;
  text: string;
  link: string;
}

defineProps<{
  work: Work;
}>();
</script>

<template>
  <article class="card-work">
    <div class="card-work__container">
      <div class="card-work__image">
        <img :src="work.img" alt="" />
      </div>

      <div class="card-work__body body-work">
        <p class="body-work__text">{{ work.text }}</p>
        <a href="#" class="body-work__link text-font__subtitle">{{
          work.link
        }}</a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card-work {
  padding: 4px;
}

.card-work__container {
  position: relative;
  /* padding: 4px;

  border-radius: 4px;
  overflow: hidden; */
}

.card-work__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.body-work {
  /* padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px; */
}

.body-work__text {
}
</style>
