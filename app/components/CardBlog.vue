<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
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
// .item-blog {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   gap: 8px;
//   padding: clamp(15px, 4vw, 48px);
//   border: 1px solid $grayColor;
//   background-color: $mutedColor;
//   border-radius: 2px;

//   &__image {
//     width: 100%;
//     aspect-ratio: 415/270;
//     position: relative;

//     &::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-image: url("@/assets/img/noise.png");
//     }

//     &::after {
//       content: "";
//       position: absolute;
//       top: 50%;
//       left: 50%;

//       width: 46px;
//       aspect-ratio: 1;

//       border: 1px solid $grayColor;
//       border-radius: 50%;
//       background: url("../arrow.svg") center / auto no-repeat;

//       transform: translate(-50%, -50%) scale(0);
//       transition: transform 0.3s ease;
//     }

//     &:hover::after {
//       transform: translate(-50%, -50%) scale(1.1);
//     }
//     border-radius: 2px;
//     overflow: hidden;
//     img {
//       width: 100%;
//     }
//     &:not(:last-child) {
//       margin-bottom: 26px;
//     }
//   }
//   &__time {
//     font-family: "Chillax", sans-serif;
//     font-weight: 400;
//     font-size: 12px;
//     letter-spacing: 0px;
//     line-height: 120%;
//     text-transform: uppercase;
//     color: $mainColor;
//   }
//   &__title {
//     font-family: "Satoshi", sans-serif;
//     font-weight: 300;
//     font-size: 24px;
//     letter-spacing: 1px;
//     line-height: 130%;
//     color: $liteColor;
//     text-transform: none;
//   }
//   &__text {
//     flex-grow: 1;
//     font-family: "Chillax", sans-serif;
//     font-weight: 400;
//     font-size: 16px;
//     letter-spacing: 0px;
//     line-height: 180%;
//     text-transform: none;
//     color: $mainColor;
//   }
//   &__category {
//     font-family: "Chillax", sans-serif;
//     font-weight: 400;
//     font-size: 12px;
//     letter-spacing: 0px;
//     line-height: 120%;
//     text-transform: uppercase;
//     color: $mainColor;

//     border: 1px solid $grayColor;
//     background-color: $mutedColor;
//     border-radius: 2px;
//     padding: 8px;
//   }
// }
</style>
