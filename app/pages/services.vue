<script setup>
import Marquee from "~/components/Marquee.vue";
import Line from "~/components/Line.vue";
const allicons = ref([
  "/clients/01.svg",
  "/clients/02.svg",
  "/clients/03.svg",
  "/clients/04.svg",
  "/clients/05.svg",
  "/clients/06.svg",
]);
const duplicatedIcons = [...allicons.value, ...allicons.value];
const smth = ref(null);
const scrollTo = () => {
  console.log(smth.value);
  smth.value.scrollIntoView({ behavior: "smooth" });
};
const loaded = ref(false);
onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true;
  });

  // window.addEventListener("scroll", handleScroll, { passive: true });
});
</script>
<template>
  <section class="hero-services">
    <div class="hero-services__container">
      <div
        class="reviews__text-block text-block loaded-animation"
        :class="{ 'is-loaded': loaded }"
      >
        <!-- <p class="text-block__subtitle">the process</p> -->
        <h1 class="text-block__title text-block__title--128">
          <span
            >Web <br />
            Design</span
          >

          <span> & Framer</span>
        </h1>
        <p class="text-block__text">
          Premium web design, development, and SEO services to help your
          business stand out.
        </p>

        <div @click="scrollTo(smth)" class="hero-services__button-container">
          <div class="button--default">
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0422 8.92187L6.41716 14.5469C6.37484 14.5913 6.32394 14.6267 6.26753 14.6509C6.21113 14.675 6.1504 14.6875 6.08904 14.6875C6.02767 14.6875 5.96695 14.675 5.91054 14.6509C5.85414 14.6267 5.80323 14.5913 5.76091 14.5469L0.135914 8.92187C0.0488896 8.83485 -9.16948e-10 8.71682 0 8.59375C9.16949e-10 8.47068 0.0488896 8.35265 0.135914 8.26563C0.222938 8.1786 0.340968 8.12971 0.464039 8.12971C0.58711 8.12971 0.70514 8.1786 0.792164 8.26563L5.62029 13.0859V0.46875C5.62029 0.34443 5.66968 0.225201 5.75758 0.137294C5.84549 0.049386 5.96472 0 6.08904 0C6.21336 0 6.33259 0.049386 6.4205 0.137294C6.5084 0.225201 6.55779 0.34443 6.55779 0.46875V13.0859L11.3859 8.26563C11.4729 8.1786 11.591 8.12971 11.714 8.12971C11.8371 8.12971 11.9551 8.1786 12.0422 8.26563C12.1292 8.35265 12.1781 8.47068 12.1781 8.59375C12.1781 8.71682 12.1292 8.83485 12.0422 8.92187Z"
                fill="#DAC5A7"
              />
            </svg>
          </div>
          <a href="/services" class="hero-services__button__text"
            >My services</a
          >
        </div>
        <!-- <a class="text-block__button button button--down">
          <img class="button__icon" src="/assets/img/button/arrow.svg" alt="" />
          <p class="button__text">My services</p>
        </a> -->
      </div>

      <div class="hero-services__image-container">
        <img
          class="hero-services__image"
          src="/assets/img/services/hero/hero-img.png"
          alt=""
        />
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="stats__container">
      <div class="stats__item item-stats">
        <div class="item-stats__title">Clients</div>
        <div class="item-stats__value"><span>150</span> +</div>
      </div>
      <div class="stats__item item-stats">
        <div class="item-stats__title">Projects</div>
        <div class="item-stats__value"><span>300</span>+</div>
      </div>
      <div class="stats__item item-stats">
        <div class="item-stats__title">Happy Clients</div>
        <div class="item-stats__value"><span>100</span>%</div>
      </div>
      <div class="stats__item item-stats">
        <div class="item-stats__title">Followers</div>
        <div class="item-stats__value"><span>100</span>+</div>
      </div>
    </div>
  </section>

  <section class="services">
    <div ref="smth" class="services__container">
      <div class="services__item item-services">
        <span class="item-services__label text-font__subtitle">Webdesign</span>
        <h2 class="item-services__title">
          Transforming Your Ideas into Reality
        </h2>
        <div class="item-services__image-container">
          <img
            src="/assets/img/services/services/01.jpg"
            alt=""
            class="item-services__image"
          />
        </div>

        <div class="item-services__table table-services">
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">Concept</h3>

            <p class="table-services__text text-font__text">
              I take time to understand your business needs and audience to
              develop a unique concept for your website. I'll create wireframes
              that serve as the foundation for your site's design and
              functionality.
            </p>
          </div>
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">
              UX / Ui Design
            </h3>

            <p class="table-services__text text-font__text">
              I'll design a user-friendly interface that is visually appealing
              and engages your target audience. Your website will be created to
              meet your brand's needs and goals while ensuring a seamless user
              experience.
            </p>
          </div>
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">Prototype</h3>

            <p class="table-services__text text-font__text">
              With an interactive prototype, you'll have the ability to test
              your website's functionality before it goes live. This will ensure
              that your website's design and user experience are optimized for
              your audience's needs and preferences.
            </p>
          </div>
        </div>
      </div>
      <div class="services__item item-services">
        <span class="item-services__label text-font__subtitle"
          >Development</span
        >
        <h2 class="item-services__title">
          Developing High-Performance Websites and Web Applications
        </h2>
        <div class="item-services__image-container">
          <img
            src="/assets/img/services/services/02.jpg"
            alt=""
            class="item-services__image"
          />
        </div>

        <div class="item-services__table table-services">
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">Framer</h3>

            <p class="table-services__text text-font__text">
              I specialize in developing web applications using Framer. From
              custom animations to complex interactions, I bring your web app to
              life.
            </p>
          </div>
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">
              CMS Integration
            </h3>

            <p class="table-services__text text-font__text">
              I can help you streamline your content management process by
              integrating a CMS into your website. Say goodbye to manual updates
              and hello to efficiency.
            </p>
          </div>
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">
              WEb Design System
            </h3>

            <p class="table-services__text text-font__text">
              I use a modular design approach to create a web design system that
              ensures consistency throughout your website. This results in a
              professional and cohesive online presence.
            </p>
          </div>
        </div>
      </div>
      <div class="services__item item-services">
        <span class="item-services__label text-font__subtitle"
          >SEO & content</span
        >
        <h2 class="item-services__title">
          Boosting Your Website's Organic Search Traffic
        </h2>
        <div class="item-services__image-container">
          <img
            src="/assets/img/services/services/03.jpg"
            alt=""
            class="item-services__image"
          />
        </div>

        <div class="item-services__table table-services">
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">Research</h3>

            <p class="table-services__text text-font__text">
              I conduct thorough research to identify the best keywords and
              strategies to improve your website's search engine ranking.
            </p>
          </div>
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">
              SEo Ranking
            </h3>

            <p class="table-services__text text-font__text">
              My SEO services are designed to improve your website's visibility
              on search engines, increasing your organic traffic and driving
              more leads and sales.
            </p>
          </div>
          <div class="table-services__container">
            <h3 class="table-services__title text-font__subtitle">
              SEO Support
            </h3>

            <p class="table-services__text text-font__text">
              With ongoing SEO support, I ensure that your website stays
              up-to-date with the latest SEO best practices, keeping you ahead
              of the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Line />
</template>
