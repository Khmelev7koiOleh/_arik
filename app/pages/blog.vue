<script setup>
const work = ref([
  {
    id: 1,
    img: "/blog/01.jpg",
    text: "Space",
    link: "webdesign",
  },
  {
    id: 2,
    img: "/blog/02.jpg",
    text: "Nova",
    link: "webdesign",
  },
  {
    id: 3,
    img: "/blog/03.jpg",
    text: "Sonic",
    link: "webdesign",
  },
  {
    id: 4,
    img: "/blog/04.jpg",
    text: "Solar",
    link: "webdesign",
  },
  {
    id: 5,
    img: "/blog/05.jpg",
    text: "Solar",
    link: "webdesign",
  },
  {
    id: 6,
    img: "/blog/06.jpg",
    text: "Solar",
    link: "webdesign",
  },
]);
</script>
<template>
  <main>
    <section class="blog">
      <div class="blog__container">
        <div class="blog__hero hero-blog">
          <div class="hero-blog__text-block text-block text-block--center">
            <h1 class="text-block__title">
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

        <div class="blog__body body-blog">
          <div class="body-blog__container">
            <article class="body-blog__item item-blog">
              <div class="item-blog__image">
                <img src="/blog/01.jpg" alt="" />
              </div>
              <time datetime="2023-08-23" class="item-blog__time"
                >23rd Aug 2023</time
              >
              <h2 class="item-blog__title">
                How to Build a Stunning Website with Framer
              </h2>
              <p class="item-blog__text">
                Learn how to create an impressive website using Framer with our
                step-by-step guide.
              </p>
              <a href="" class="item-blog__category">WEbdesign</a>
            </article>
            <article class="body-blog__item item-blog">
              <div class="item-blog__image">
                <img src="/blog/02.jpg" alt="" />
              </div>
              <time datetime="2023-08-23" class="item-blog__time"
                >23rd Aug 2023</time
              >
              <h2 class="item-blog__title">
                10 website elements for maximum user engagement
              </h2>
              <p class="item-blog__text">
                10 website elements to engage users, from intuitive navigation
                to compelling visuals.
              </p>
              <a href="" class="item-blog__category">WEbdesign</a>
            </article>
            <article class="body-blog__item item-blog">
              <div class="item-blog__image">
                <img src="/blog/03.jpg" alt="" />
              </div>
              <time datetime="2023-08-23" class="item-blog__time"
                >23rd Aug 2023</time
              >
              <h2 class="item-blog__title">
                The importance of content in driving website traffic
              </h2>
              <p class="item-blog__text">
                Quality content is king. Learn how to create valuable,
                SEO-optimized content.
              </p>
              <a href="" class="item-blog__category">WEbdesign</a>
            </article>
            <article class="body-blog__item item-blog">
              <div class="item-blog__image">
                <img src="/blog/04.jpg" alt="" />
              </div>
              <time datetime="2023-08-23" class="item-blog__time"
                >23rd Aug 2023</time
              >
              <h2 class="item-blog__title">
                10 common web development mistakes to avoid
              </h2>
              <p class="item-blog__text">
                10 common web development mistakes and improve your site's
                functionality and user experience.
              </p>
              <a href="" class="item-blog__category">WEbdesign</a>
            </article>
            <article class="body-blog__item item-blog">
              <div class="item-blog__image">
                <img src="/blog/05.jpg" alt="" />
              </div>
              <time datetime="2023-08-23" class="item-blog__time"
                >23rd Aug 2023</time
              >
              <h2 class="item-blog__title">
                Why responsive web design is critical for your business
              </h2>
              <p class="item-blog__text">
                Responsive web design ensures your site looks great and performs
                well on all devices.
              </p>
              <a href="" class="item-blog__category">WEbdesign</a>
            </article>
            <article class="body-blog__item item-blog">
              <div class="item-blog__image">
                <img src="/blog/06.jpg" alt="" />
              </div>
              <time datetime="2023-08-23" class="item-blog__time"
                >23rd Aug 2023</time
              >
              <h2 class="item-blog__title">
                The art of SEO writing: How to write content that ranks on
                Google
              </h2>
              <p class="item-blog__text">
                Optimize your website with expert tips on writing content that
                ranks high on Google.
              </p>
              <a href="" class="item-blog__category">WEbdesign</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Line />
</template>
