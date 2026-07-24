<script setup lang="ts">
interface Blog {
  id: number;
  image: string;
  date: {
    datetime: string;
    text: string;
  };
  title: string;
  description: string;
  category: string;
}

defineProps<{
  blog: Blog;
}>();
</script>

<template>
  <NuxtLink
    :to="{
      path: `/blog/${blog.id}`,
      query: {
        image: blog.image,
        title: blog.title,
        description: blog.description,
        datetime: blog.date.datetime,
        dateText: blog.date.text,
        category: blog.category,
      },
    }"
    class="body-blog__item item-blog"
  >
    <div class="item-blog__image">
      <img :src="blog.image" alt="" />
    </div>
    <time datetime="2023-08-23" class="item-blog__time">{{
      blog.date.text
    }}</time>
    <h2 class="item-blog__title">
      {{ blog.title }}
    </h2>
    <p class="item-blog__text">
      {{ blog.description }}
    </p>
    <a href="" class="item-blog__category">{{ blog.category }}</a>
  </NuxtLink>
</template>

<style scoped lang="scss">
@use "@/assets/scss/style" as *;
</style>
