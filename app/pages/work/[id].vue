<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const work = ref([
  {
    id: 1,
    img: "/works/01.jpg",
    text: "Space",
    link: "webdesign",
  },
]);
const content = ref(null);
const scrollTo = () => {
  content.value.scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
  <main>
    <section class="single-work">
      <div class="single-work__container">
        <div class="single-work__header header-single-work">
          <div
            class="header-single-work__text-block text-block text-block--center"
          >
            <h1 class="text-block__title">
              <span>{{ route.query.text.toString() }}</span>
            </h1>
            <p class="text-block__text">
              Modern and visually appealing website that reflected the client's
              brand.
            </p>
            <!-- <a class="text-block__button button button--down">
          <img class="button__icon" src="/assets/img/button/arrow.svg" alt="" />
          <p class="button__text">My services</p>
        </a> -->
          </div>

          <div class="single-work__info info-single-work">
            <div class="info-single-work__item">
              <div class="info-single-work__label">Client</div>
              <div class="info-single-work__value">
                {{ route.query.text.toString() }}
              </div>
            </div>
            <div class="info-single-work__item">
              <div class="info-single-work__label">Timeline</div>
              <div class="info-single-work__value">3 Weeks</div>
            </div>
            <div class="info-single-work__item">
              <div class="info-single-work__label">Services</div>
              <div class="info-single-work__value">Template</div>
            </div>
            <div class="info-single-work__item">
              <div class="info-single-work__label">Website</div>
              <div class="info-single-work__value">gola.io</div>
            </div>
          </div>

          <div @click="scrollTo()" class="single-work__button-container">
            <div class="button--default button--default--hover">
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
            <a href="/single-work" class="single-work__button-text"
              >More details</a
            >
          </div>
        </div>

        <div class="single-work__body body-single-work">
          <div class="body-single-work__image">
            <img :src="route.query.img" alt="" />
          </div>
          <div ref="content" class="body-single-work__container">
            <div class="body-single-work__title-container">
              <div class="body-single-work__label">about</div>
              <h2 class="body-single-work__title">
                Concept, Design, and Development. All-in-one.
              </h2>
            </div>

            <article class="body-single-work__items">
              <div class="body-single-work__item item-single-work">
                <h3 class="item-single-work__title">Challenge</h3>
                <p class="item-single-work__text">
                  Our client was struggling to attract and retain customers due
                  to an outdated and non-responsive website that didn't align
                  with their brand identity.
                </p>
              </div>
              <div class="body-single-work__item item-single-work">
                <h3 class="item-single-work__title">Goal</h3>
                <p class="item-single-work__text">
                  Our goal was to create a modern and visually appealing website
                  that reflected the client's brand and delivered a seamless
                  user experience. The website needed to be responsive, easy to
                  navigate, and optimized for search engines to improve their
                  online visibility.
                </p>
              </div>
              <div class="body-single-work__item item-single-work">
                <h3 class="item-single-work__title">Result</h3>
                <p class="item-single-work__text">
                  Our team developed a custom website design that was not only
                  visually stunning but also user-friendly and optimized for
                  search engines. The client's website now showcases their
                  products and services in a professional and engaging manner,
                  and has seen a significant increase in organic traffic and
                  customer engagement. The client is thrilled with the final
                  result and has received positive feedback from their
                  customers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Line />
</template>
