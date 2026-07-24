<script setup>
import CardBlog from "~/components/CardBlog.vue";
const blogPosts = [
  {
    id: 1,
    image: "/blog/01.jpg",
    date: {
      datetime: "2023-08-23",
      text: "23rd Aug 2023",
    },
    title: "How to Build a Stunning Website with Framer",
    description:
      "Learn how to create an impressive website using Framer with our step-by-step guide.",
    category: "Web Design",
  },
  {
    id: 2,
    image: "/blog/02.jpg",
    date: {
      datetime: "2023-08-23",
      text: "23rd Aug 2023",
    },
    title: "10 Website Elements for Maximum User Engagement",
    description:
      "10 website elements to engage users, from intuitive navigation to compelling visuals.",
    category: "Web Design",
  },
  {
    id: 3,
    image: "/blog/03.jpg",
    date: {
      datetime: "2023-08-23",
      text: "23rd Aug 2023",
    },
    title: "The Importance of Content in Driving Website Traffic",
    description:
      "Quality content is king. Learn how to create valuable, SEO-optimized content.",
    category: "Web Design",
  },
  {
    id: 4,
    image: "/blog/04.jpg",
    date: {
      datetime: "2023-08-23",
      text: "23rd Aug 2023",
    },
    title: "10 Common Web Development Mistakes to Avoid",
    description:
      "10 common web development mistakes and improve your site's functionality and user experience.",
    category: "Web Design",
  },
  {
    id: 5,
    image: "/blog/05.jpg",
    date: {
      datetime: "2023-08-23",
      text: "23rd Aug 2023",
    },
    title: "Why Responsive Web Design Is Critical for Your Business",
    description:
      "Responsive web design ensures your site looks great and performs well on all devices.",
    category: "Web Design",
  },
  {
    id: 6,
    image: "/blog/06.jpg",
    date: {
      datetime: "2023-08-23",
      text: "23rd Aug 2023",
    },
    title: "The Art of SEO Writing: How to Write Content That Ranks on Google",
    description:
      "Optimize your website with expert tips on writing content that ranks high on Google.",
    category: "Web Design",
  },
];

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
    <section class="blog">
      <div class="blog__container">
        <div class="blog__hero hero-blog">
          <div
            class="hero-blog__text-block text-block text-block--center loaded-animation"
            :class="{ 'is-loaded': loaded }"
          >
            <h1 class="text-block__title text-block__title--128">
              <span>Blog </span>
            </h1>
            <p class="text-block__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor lorem.
            </p>
            <!-- <a class="text-block__button button button--down">
          <img class="button__icon" src="/assets/img/button/arrow.svg" alt="" />
          <p class="button__text">My services</p>
        </a> -->
          </div>
        </div>
        <!-- <NuxtLink
          :to="{
            path: `/blog/${post.id}`,
            query: {
              category: post.category,
              author: post.author,
            },
          }"
        >
          {{ post.title }}
        </NuxtLink> -->
        <div class="blog__body body-blog">
          <div class="body-blog__container">
            <CardBlog v-for="post in blogPosts" :key="post.id" :blog="post" />
          </div>
        </div>
      </div>
    </section>

    <LineComponent />
  </main>
</template>
