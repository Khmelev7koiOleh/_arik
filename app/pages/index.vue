<script setup lang="ts">
import { ref } from "vue";
import MarqueeComponent from "~/components/MarqueeComponent.vue";

import CardWork from "~/components/CardWork.vue";
import { useParallax } from "~/composables/useParallax";
import { useIntersection } from "@/composables/useIntersection";

const { target: servicesTarget, isVisible: servicesVisible } =
  useIntersection(0.15);
const { target: selectedWorkTarget, isVisible: selectedWorkVisible } =
  useIntersection(0.1);
const { target: processTarget, isVisible: processVisible } =
  useIntersection(0.01);
const { target: reviewsTarget, isVisible: reviewsVisible } =
  useIntersection(0.1);
const { target: contentModuleTarget, isVisible: contentModuleVisible } =
  useIntersection(0.2);

const processSection1 = ref<HTMLElement | null>(null);
const processSection2 = ref<HTMLElement | null>(null);
const processSection3 = ref<HTMLElement | null>(null);
const processSection4 = ref<HTMLElement | null>(null);
const processSection5 = ref<HTMLElement | null>(null);
const processItem1 = ref<HTMLElement | null>(null);
const processItem2 = ref<HTMLElement | null>(null);
const processItem3 = ref<HTMLElement | null>(null);
const processItem4 = ref<HTMLElement | null>(null);
const processItem5 = ref<HTMLElement | null>(null);
useParallax(processSection1, processItem1, -0.6);
useParallax(processSection2, processItem2, -0.6);
useParallax(processSection3, processItem3, -0.6);
useParallax(processSection4, processItem4, -0.6);
useParallax(processSection5, processItem5, -0.6);

const loaded = ref(false);
const allicons = ref([
  "/clients/01.svg",
  "/clients/02.svg",
  "/clients/03.svg",
  "/clients/04.svg",
  "/clients/05.svg",
  "/clients/06.svg",
]);
const duplicatedIcons = [...allicons.value, ...allicons.value];
const selectedWork = ref([
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

onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true;
  });
});
</script>
<template>
  <main>
    <section class="hero">
      <div class="hero__container">
        <img
          src="/arik.png"
          alt=""
          class="hero__image"
          :class="{ 'hero__image--loaded': loaded }"
        />

        <div
          class="hero__text-block text-block text-block--center"
          :class="{ 'hero__text-block--loaded': loaded }"
        >
          <h1 class="text-block__title text-block__title--160">
            <span>Web Designer </span>

            <span> & Developer </span>
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
    </section>

    <section class="clients">
      <div class="clients__container">
        <MarqueeComponent
          direction="left"
          :speed="60"
          :space="40"
          pause-on-hover
        >
          <div v-for="(icon, i) in duplicatedIcons" :key="i">
            <img :src="icon" alt="Icon" class="h-60 w-auto clients__item" />
          </div>
        </MarqueeComponent>
      </div>
    </section>

    <div ref="servicesSection" class="skills">
      <div ref="servicesTarget" class="skills__container">
        <article
          class="skills__item item-skills show-animation"
          :class="{ 'is-show': servicesVisible }"
        >
          <p class="item-skills__index text-font__subtitle">01</p>
          <h4 class="item-skills__title text-font__title">Web design</h4>
          <p class="item-skills__text text-font__text">
            Visually stunning web designs that captivate your audience by
            blending your brand voice and customer needs.
          </p>
          <div
            class="item-skills__button-container button button--tr button--ul"
          >
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

            <a href="" class="item-skills__button">About Webdesign</a>
          </div>
        </article>

        <article
          class="skills__item item-skills show-animation"
          :class="{ 'is-show': servicesVisible }"
        >
          <p class="item-skills__index text-font__subtitle">02</p>
          <h4 class="item-skills__title text-font__title">Development</h4>
          <p class="item-skills__text text-font__text">
            Get custom web development solutions that are tailored to your
            specifications, designed to deliver a flawless user experience.
          </p>
          <div
            class="item-skills__button-container button button--tr button--ul"
          >
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
            <a href="" class="item-skills__button">About Webdesign</a>
          </div>
        </article>

        <article
          class="skills__item item-skills show-animation"
          :class="{ 'is-show': servicesVisible }"
        >
          <p class="item-skills__index text-font__subtitle">03</p>
          <h4 class="item-skills__title text-font__title">Content & Seo</h4>
          <p class="item-skills__text text-font__text">
            Proven SEO strategies that enhance your online performance, bringing
            you to the forefront of organic search results.
          </p>
          <div
            class="item-skills__button-container button button--tr button--ul"
          >
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
            <a href="" class="item-skills__button">About Webdesign</a>
          </div>
        </article>
      </div>
    </div>

    <section
      ref="selectedWorkTarget"
      class="selectedwork show-animation"
      :class="{ 'is-show': selectedWorkVisible }"
    >
      <div class="selectedwork__container">
        <WidgetHeader titleone="Selected" titletwo="Work" link="See all" />

        <div class="selectedwork__body">
          <CardWork v-for="i in selectedWork" :key="i.id" :work="i" />
        </div>
      </div>
    </section>

    <section class="process">
      <div
        ref="processTarget"
        class="process__container show-animation"
        :class="{ 'is-show': processVisible }"
      >
        <div class="process__text-block text-block">
          <div class="text-block__subtitle">the process</div>
          <h1 class="text-block__title text-block__title--128">
            <span>Your Website </span>

            <span> in 5 steps </span>
          </h1>
          <p class="text-block__text">
            Our process ensures that we create a website tailored to your
            business needs.
          </p>
          <!-- <a class="text-block__button button button--down">
          <img class="button__icon" src="/assets/img/button/arrow.svg" alt="" />
          <p class="button__text">My services</p>
        </a> -->
        </div>
        <div class="process__items items-process">
          <div class="items-process__header">
            <div class="items-process__button-container button--default">
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
          </div>
          <div class="items-process__body">
            <div ref="processSection1" class="items-process__item item-process">
              <div ref="processItem1" class="item-process__body">
                <div class="item-process__time">2 hours</div>
                <div class="item-process__subtitle">Do we match?</div>
                <div class="item-process__title">Discovery Call</div>
                <div class="item-process__text">
                  Before we start, we determine if and how I can help you. What
                  are your requirements for your new website? Why do you need a
                  new website? What goals do you have, and what problems can we
                  solve with a new website?
                </div>
                <ul class="item-process__list">
                  <li class="item-process__list-item">
                    We get to know each other better
                  </li>
                  <li class="item-process__list-item">
                    Determine how I can best assist you
                  </li>
                  <li class="item-process__list-item">
                    Understand the goals you have for your website
                  </li>
                </ul>
              </div>
            </div>

            <div ref="processSection2" class="items-process__item item-process">
              <div ref="processItem2" class="item-process__body">
                <div class="item-process__time">1 week</div>
                <div class="item-process__subtitle">lorem ipsum</div>
                <div class="item-process__title">Concept & STrategy</div>
                <div class="item-process__text">
                  Together, we develop a strategy that successfully combines
                  your goals with the needs of your target audience. Based on
                  this concept, I create the first wireframes and an interactive
                  prototype. This provides us with a very good impression of the
                  website and the user interface.
                </div>
                <ul class="item-process__list">
                  <li class="item-process__list-item">UX Design</li>
                  <li class="item-process__list-item">Wireframes</li>
                  <li class="item-process__list-item">Interactive Prototype</li>
                </ul>
              </div>
            </div>
            <div ref="processSection3" class="items-process__item item-process">
              <div ref="processItem3" class="item-process__body">
                <div class="item-process__time">1 week</div>
                <div class="item-process__subtitle">SOme MAgic</div>
                <div class="item-process__title">web Design</div>
                <div class="item-process__text">
                  Now comes the magic. Based on the previously developed
                  concept, I create a high-end screen design perfectly tailored
                  to your brand. A web design that sets you apart from your
                  competition, fits your target audience ideally, and provides
                  an excellent user experience.
                </div>
                <ul class="item-process__list">
                  <li class="item-process__list-item">
                    High-end web design tailored to your brand
                  </li>
                  <li class="item-process__list-item">
                    Interactive prototype of the design
                  </li>
                </ul>
              </div>
            </div>
            <div ref="processSection4" class="items-process__item item-process">
              <div ref="processItem4" class="item-process__body">
                <div class="item-process__time">2 weeks</div>
                <div class="item-process__subtitle">More Magic</div>
                <div class="item-process__title">Development</div>
                <div class="item-process__text">
                  In this step, we breathe life into your new high-end design.
                  You will receive a custom-built website using a modular web
                  design system and CMS integration. Animations will add the
                  necessary flair to your site and set you apart from the boring
                  competition.
                </div>
                <ul class="item-process__list">
                  <li class="item-process__list-item">Custom framer website</li>
                  <li class="item-process__list-item">
                    Modular web design systems
                  </li>
                  <li class="item-process__list-item">CMS integration</li>
                </ul>
              </div>
            </div>
            <div ref="processSection5" class="items-process__item item-process">
              <div ref="processItem5" class="item-process__body">
                <div class="item-process__time">2 hours</div>
                <div class="item-process__subtitle">ready to go</div>
                <div class="item-process__title text-font__title">
                  WEbsite onboarding
                </div>
                <div class="item-process__text">
                  In a personal Framer workshop, I will show you how to make
                  changes to your new website quickly and easily. Additionally,
                  you will receive personalized Framer video tutorials that you
                  can access at any time. Edit your Framer website without a
                  complicated backend or the need for an additional programmer.
                  It's as simple as that.
                </div>
                <ul class="item-process__list">
                  <li class="item-process__list-item">Personal workshop</li>
                  <li class="item-process__list-item">
                    Personalized video tutorials
                  </li>
                  <li class="item-process__list-item">
                    Edit text and images directly on your website
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <img src="/assets/img/clients/01.svg" alt="" /> -->
    <section class="reviews">
      <div
        ref="reviewsTarget"
        class="reviews__container show-animation"
        :class="{ 'is-show': reviewsVisible }"
      >
        <div class="reviews__text-block text-block">
          <!-- <p class="text-block__subtitle">the process</p> -->
          <h1 class="text-block__title text-block__title--96">
            <span>What my </span>

            <span> clients say</span>
          </h1>
          <p class="text-block__text">
            See what my clients have to say about working with me and the
            results I helped them achieve.
          </p>
          <!-- <a class="text-block__button button button--down">
          <img class="button__icon" src="/assets/img/button/arrow.svg" alt="" />
          <p class="button__text">My services</p>
        </a> -->
        </div>
        <div class="reviews__items">
          <article class="reviews__item item-reviews">
            <div class="item-reviews__body">
              <div class="item-reviews__icon">
                <svg
                  width="53"
                  height="35"
                  viewBox="0 0 53 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1301_3337)">
                    <path
                      d="M49.2188 1.09375C49.2188 1.69781 49.7084 2.1875 50.3125 2.1875H51.4062C52.0103 2.1875 52.5 1.69781 52.5 1.09375C52.5 0.489689 52.0103 0 51.4062 0H50.3125C49.7084 0 49.2188 0.489689 49.2188 1.09375Z"
                      fill="#DAC5A7"
                    />
                    <path
                      d="M17.5 35H22.8133L21.2664 33.4532C20.8562 33.043 20.2998 32.8125 19.7197 32.8125H17.5C9.04313 32.8125 2.1875 25.9569 2.1875 17.5C2.1875 9.04313 9.04313 2.18751 17.5 2.1875H35C43.4569 2.1875 50.3125 9.04313 50.3125 17.5C50.3125 25.9569 43.4569 32.8125 35 32.8125H28.4536C27.5833 32.8125 26.7487 32.4668 26.1334 31.8515L24.3212 30.0393C23.2957 29.0137 21.9046 28.4375 20.4542 28.4375H17.5C11.4593 28.4375 6.5625 23.5406 6.5625 17.5C6.5625 11.4593 11.4593 6.5625 17.5 6.5625H35C41.0406 6.5625 45.9375 11.4593 45.9375 17.5C45.9375 23.5406 41.0406 28.4375 35 28.4375H30.7966C29.9263 28.4375 29.0917 28.0918 28.4763 27.4765L26.6641 25.6643C25.6386 24.6387 24.2476 24.0625 22.7972 24.0625H17.5C13.8757 24.0625 10.9375 21.1243 10.9375 17.5C10.9375 13.8757 13.8757 10.9375 17.5 10.9375H35C38.6243 10.9375 41.5625 13.8757 41.5625 17.5C41.5625 21.0802 38.6956 23.9908 35.1323 24.0612L35.1316 24.0625H33.531C32.6607 24.0625 31.8261 23.7168 31.2107 23.1015L29.3985 21.2893C28.557 20.4477 27.4695 19.9088 26.3049 19.7424L26.25 19.6875H17.5C16.2919 19.6875 15.3125 18.7081 15.3125 17.5C15.3125 16.2919 16.2919 15.3125 17.5 15.3125H35C36.2081 15.3125 37.1875 16.2919 37.1875 17.5C37.1875 18.7081 36.2081 19.6875 35 19.6875H30.625L32.1718 21.2343C32.582 21.6445 33.1384 21.875 33.7186 21.875H35C37.4162 21.875 39.375 19.9162 39.375 17.5C39.375 15.0838 37.4162 13.125 35 13.125H17.5C15.0838 13.125 13.125 15.0838 13.125 17.5C13.125 19.9162 15.0838 21.875 17.5 21.875H25.5315C26.4018 21.875 27.2364 22.2207 27.8518 22.836L29.664 24.6482C30.6896 25.6738 32.0806 26.25 33.531 26.25H35.5469V26.2332C40.1246 25.9509 43.75 22.1488 43.75 17.5C43.75 12.6676 39.8325 8.75 35 8.75H17.5C12.6676 8.75 8.75 12.6676 8.75 17.5C8.75 22.3325 12.6676 26.25 17.5 26.25H22.7972C23.6674 26.25 24.502 26.5957 25.1174 27.211L26.9296 29.0232C27.9552 30.0488 29.3462 30.625 30.7966 30.625H35C42.2488 30.625 48.125 24.7488 48.125 17.5C48.125 10.2512 42.2488 4.375 35 4.375H17.5C10.2512 4.375 4.375 10.2512 4.375 17.5C4.375 24.7488 10.2512 30.625 17.5 30.625H20.4542C21.3244 30.625 22.159 30.9707 22.7744 31.586L24.5866 33.3982C25.6122 34.4238 27.0032 35 28.4536 35H35C44.665 35 52.5 27.165 52.5 17.5C52.5 7.83501 44.665 -8.44939e-07 35 0L17.5 3.61606e-06C7.83501 4.461e-06 -8.44939e-07 7.83502 0 17.5C8.44939e-07 27.165 7.83502 35 17.5 35Z"
                      fill="#DAC5A7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1301_3337">
                      <rect width="52.5" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="item-reviews__title">
                Amazing Results with Arik’s Premium Web Design Services.
              </div>

              <p class="item-reviews__text">
                Arik is a top-notch web designer who created a stunning website
                for my business. He was attentive to my needs and provided
                excellent customer service throughout the entire process. I
                highly recommend his services.
              </p>

              <div class="item-reviews__author">
                <div class="item-reviews__image">
                  <img src="/reviews/01.jpg" alt="" />
                </div>
                <div class="item-reviews__author-content">
                  <span>John Smith</span>
                  <span>ABC Company</span>
                </div>
              </div>
            </div>
          </article>
          <article class="reviews__item item-reviews">
            <div class="item-reviews__body">
              <div class="item-reviews__icon">
                <svg
                  width="140"
                  height="30"
                  viewBox="0 0 140 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.419 13.371C22.04 13.7523 21.7498 14.2125 21.569 14.7187C21.3882 15.225 21.3213 15.7649 21.373 16.3L21.355 16.282C21.4082 16.9119 21.3232 17.5457 21.1061 18.1394C20.889 18.733 20.545 19.2721 20.0981 19.7191C19.6511 20.166 19.112 20.5101 18.5183 20.7271C17.9247 20.9442 17.2908 21.0292 16.661 20.976L16.679 20.994C15.9256 20.9239 15.1689 21.0878 14.512 21.4635C13.8552 21.8392 13.3302 22.4083 13.0087 23.0933C12.6872 23.7783 12.5847 24.5457 12.7153 25.2911C12.846 26.0364 13.2033 26.7233 13.7386 27.2581C14.2739 27.7929 14.9611 28.1496 15.7065 28.2795C16.452 28.4095 17.2193 28.3063 17.904 27.9842C18.5887 27.662 19.1573 27.1366 19.5324 26.4794C19.9075 25.8222 20.0708 25.0654 20 24.312L20.019 24.33C19.9658 23.7002 20.0507 23.0663 20.2678 22.4726C20.4849 21.879 20.829 21.3399 21.2759 20.8929C21.7229 20.446 22.262 20.1019 22.8556 19.8849C23.4493 19.6678 24.0831 19.5828 24.713 19.636L24.694 19.618C25.3094 19.6733 25.9289 19.5724 26.495 19.3246C27.061 19.0768 27.5554 18.6901 27.9322 18.2004C28.309 17.7107 28.5562 17.1337 28.6506 16.5231C28.7451 15.9124 28.6839 15.2878 28.4727 14.707C28.2615 14.1263 27.9071 13.6083 27.4424 13.201C26.9777 12.7937 26.4177 12.5103 25.8143 12.3771C25.2109 12.2439 24.5836 12.2651 23.9906 12.4388C23.3976 12.6126 22.8581 12.9332 22.422 13.371H22.419Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M15.042 18.636L15.023 18.618C15.5583 18.6719 16.0989 18.6062 16.6058 18.4256C17.1126 18.245 17.573 17.9541 17.9536 17.5738C18.3341 17.1935 18.6255 16.7333 18.8064 16.2266C18.9874 15.7199 19.0535 15.1794 19 14.644L19.019 14.662C18.9658 14.0321 19.0508 13.3983 19.2678 12.8046C19.4849 12.211 19.829 11.6719 20.2759 11.2249C20.7229 10.778 21.262 10.4339 21.8556 10.2169C22.4493 9.99976 23.0831 9.91483 23.713 9.968L23.694 9.95C24.4475 10.0208 25.2044 9.85736 25.8616 9.4821C26.5189 9.10684 27.0443 8.53797 27.3663 7.8531C27.6883 7.16824 27.7912 6.40071 27.661 5.6552C27.5308 4.90969 27.1738 4.22251 26.6386 3.68737C26.1035 3.15224 25.4163 2.7952 24.6708 2.66498C23.9253 2.53475 23.1578 2.63766 22.4729 2.95968C21.788 3.28169 21.2192 3.80714 20.8439 4.46435C20.4686 5.12155 20.3052 5.87852 20.376 6.632L20.358 6.613C20.4113 7.24289 20.3265 7.87683 20.1095 8.47055C19.8925 9.06427 19.5484 9.60346 19.1015 10.0505C18.6545 10.4974 18.1153 10.8415 17.5216 11.0585C16.9278 11.2755 16.2939 11.3603 15.664 11.307L15.682 11.326C15.1467 11.2721 14.606 11.3378 14.0992 11.5184C13.5924 11.6989 13.132 11.9899 12.7514 12.3702C12.3708 12.7505 12.0795 13.2107 11.8985 13.7174C11.7176 14.2241 11.6515 14.7646 11.705 15.3L11.687 15.282C11.74 15.9118 11.6549 16.5456 11.4378 17.1392C11.2206 17.7327 10.8766 18.2718 10.4297 18.7187C9.98273 19.1656 9.44369 19.5096 8.85013 19.7268C8.25657 19.9439 7.62278 20.029 6.99297 19.976L7.01097 19.994C6.25749 19.9232 5.50052 20.0866 4.84331 20.4619C4.18611 20.8372 3.66066 21.406 3.33865 22.0909C3.01663 22.7758 2.91371 23.5433 3.04394 24.2888C3.17417 25.0343 3.53121 25.7215 4.06634 26.2566C4.60148 26.7918 5.28866 27.1488 6.03417 27.279C6.77968 27.4092 7.54721 27.3063 8.23208 26.9843C8.91694 26.6623 9.48581 26.1369 9.86107 25.4797C10.2364 24.8224 10.3998 24.0655 10.329 23.312L10.348 23.33C10.2948 22.7001 10.3798 22.0663 10.5969 21.4726C10.8139 20.879 11.158 20.3399 11.6049 19.8929C12.0519 19.446 12.591 19.1019 13.1846 18.8849C13.7783 18.6678 14.4121 18.5828 15.042 18.636Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M8.34003 16.6289C8.71905 16.2477 9.00923 15.7875 9.18987 15.2812C9.37051 14.7749 9.43715 14.2349 9.38503 13.6999L9.40402 13.7179C9.35082 13.0879 9.43578 12.4538 9.65299 11.86C9.8702 11.2662 10.2144 10.727 10.6616 10.28C11.1088 9.83306 11.6481 9.48907 12.242 9.27212C12.8359 9.05516 13.47 8.97046 14.1 9.02394L14.081 9.00594C14.8342 9.07651 15.5909 8.91302 16.2478 8.53778C16.9047 8.16255 17.4298 7.59382 17.7517 6.90917C18.0735 6.22451 18.1763 5.45726 18.0461 4.71203C17.9159 3.9668 17.5589 3.27988 17.024 2.74494C16.4891 2.21 15.8021 1.85308 15.0569 1.72286C14.3117 1.59263 13.5444 1.69545 12.8598 2.01727C12.1751 2.33909 11.6064 2.86426 11.2312 3.52116C10.8559 4.17806 10.6924 4.93472 10.763 5.68794L10.745 5.66994C10.7982 6.29979 10.7132 6.93366 10.4961 7.5273C10.279 8.12094 9.93505 8.66005 9.48809 9.10701C9.04114 9.55397 8.50202 9.898 7.90838 10.115C7.31474 10.3321 6.68088 10.4171 6.05103 10.3639L6.06903 10.3819C5.4536 10.3267 4.83419 10.4278 4.26821 10.6757C3.70223 10.9236 3.20798 11.3104 2.83127 11.8002C2.45456 12.2899 2.20758 12.8669 2.1132 13.4775C2.01883 14.0882 2.08012 14.7128 2.29139 15.2934C2.50266 15.8741 2.85709 16.392 3.32182 16.7992C3.78655 17.2065 4.34655 17.4898 4.94993 17.623C5.5533 17.7561 6.18053 17.7348 6.7735 17.5611C7.36646 17.3873 7.90596 17.0667 8.34202 16.6289H8.34003Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M39.317 6.65503H42.287V21.108H39.317V6.65503Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M43.969 16.159C43.9649 15.1204 44.2691 14.1038 44.8431 13.2382C45.4171 12.3726 46.2351 11.6968 47.1935 11.2965C48.1519 10.8961 49.2075 10.7892 50.2267 10.9893C51.2459 11.1894 52.1828 11.6874 52.9187 12.4204C53.6546 13.1533 54.1564 14.0882 54.3606 15.1066C54.5648 16.125 54.4621 17.1811 54.0656 18.1411C53.6691 19.101 52.9966 19.9218 52.1333 20.4992C51.2699 21.0767 50.2547 21.385 49.216 21.385C48.5266 21.3929 47.8425 21.2632 47.2037 21.0036C46.5649 20.744 45.9843 20.3597 45.4958 19.8732C45.0072 19.3866 44.6206 18.8075 44.3585 18.1698C44.0963 17.5321 43.9639 16.8485 43.969 16.159ZM51.493 16.159C51.4806 15.7113 51.3365 15.2772 51.0788 14.9109C50.821 14.5447 50.461 14.2625 50.0438 14.0998C49.6265 13.937 49.1706 13.9008 48.7329 13.9958C48.2952 14.0908 47.8952 14.3126 47.5829 14.6337C47.2707 14.9547 47.0599 15.3607 46.9772 15.8009C46.8944 16.241 46.9431 16.6958 47.1174 17.1084C47.2917 17.521 47.5837 17.873 47.9569 18.1205C48.3302 18.368 48.7682 18.5 49.216 18.5C49.5227 18.5082 49.8278 18.4527 50.1121 18.3371C50.3963 18.2215 50.6535 18.0483 50.8674 17.8284C51.0813 17.6084 51.2474 17.3465 51.355 17.0592C51.4627 16.7719 51.5097 16.4654 51.493 16.159Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M66.3 11.2091V20.6091C66.3 23.9351 63.706 25.3411 61.073 25.3411C60.146 25.4105 59.2177 25.2232 58.39 24.7999C57.5624 24.3765 56.8673 23.7334 56.381 22.9411L58.915 21.4761C59.1194 21.8891 59.4451 22.2298 59.8484 22.4527C60.2518 22.6755 60.7136 22.7699 61.172 22.7231C61.465 22.7637 61.7634 22.7379 62.0451 22.6476C62.3267 22.5573 62.5845 22.4048 62.7993 22.2015C63.0141 21.9981 63.1804 21.7491 63.286 21.4727C63.3915 21.1964 63.4335 20.8999 63.409 20.6051V19.7001C63.0612 20.1256 62.6186 20.4637 62.1165 20.6872C61.6144 20.9107 61.067 21.0134 60.518 20.9871C59.2118 20.9459 57.9729 20.3981 57.0635 19.4595C56.1541 18.521 55.6456 17.2654 55.6456 15.9586C55.6456 14.6518 56.1541 13.3962 57.0635 12.4577C57.9729 11.5191 59.2118 10.9713 60.518 10.9301C61.067 10.9038 61.6144 11.0065 62.1165 11.23C62.6186 11.4535 63.0612 11.7916 63.409 12.2171V11.2071L66.3 11.2091ZM63.41 15.9601C63.43 15.4815 63.3062 15.0078 63.0547 14.6001C62.8032 14.1923 62.4354 13.8692 61.9987 13.6723C61.562 13.4753 61.0764 13.4136 60.6043 13.495C60.1322 13.5764 59.6953 13.7972 59.3497 14.1291C59.0042 14.4609 58.7659 14.8885 58.6654 15.3569C58.565 15.8253 58.607 16.3131 58.7862 16.7574C58.9653 17.2017 59.2733 17.5823 59.6705 17.8501C60.0677 18.1179 60.536 18.2607 61.015 18.2601C61.3271 18.2819 61.6402 18.2381 61.9343 18.1315C62.2284 18.0249 62.4969 17.8578 62.7225 17.6412C62.9481 17.4245 63.1259 17.163 63.2443 16.8734C63.3627 16.5839 63.4192 16.2728 63.41 15.9601Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M67.982 16.159C67.9779 15.1204 68.282 14.1038 68.8561 13.2382C69.4301 12.3726 70.2481 11.6968 71.2065 11.2965C72.1649 10.8961 73.2205 10.7892 74.2397 10.9893C75.2589 11.1894 76.1958 11.6874 76.9317 12.4204C77.6676 13.1533 78.1694 14.0882 78.3736 15.1066C78.5778 16.125 78.4751 17.1811 78.0786 18.1411C77.6821 19.101 77.0096 19.9218 76.1463 20.4992C75.2829 21.0767 74.2677 21.385 73.229 21.385C72.5396 21.3929 71.8554 21.2632 71.2167 21.0036C70.5779 20.744 69.9973 20.3597 69.5088 19.8732C69.0202 19.3866 68.6336 18.8075 68.3715 18.1698C68.1093 17.5321 67.9769 16.8485 67.982 16.159ZM75.506 16.159C75.4936 15.7113 75.3495 15.2772 75.0918 14.9109C74.834 14.5447 74.474 14.2625 74.0568 14.0998C73.6395 13.937 73.1835 13.9008 72.7459 13.9958C72.3082 14.0908 71.9082 14.3126 71.5959 14.6337C71.2837 14.9547 71.0729 15.3607 70.9901 15.8009C70.9073 16.241 70.9561 16.6958 71.1304 17.1084C71.3047 17.521 71.5967 17.873 71.9699 18.1205C72.3432 18.368 72.7811 18.5 73.229 18.5C73.5357 18.5082 73.8408 18.4527 74.125 18.3371C74.4093 18.2215 74.6665 18.0483 74.8804 17.8284C75.0943 17.6084 75.2604 17.3465 75.368 17.0592C75.4757 16.7719 75.5227 16.4654 75.506 16.159Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M79.861 8.55605C79.861 8.2036 79.9655 7.85907 80.1613 7.56603C80.3571 7.27298 80.6355 7.04457 80.9611 6.9097C81.2867 6.77482 81.645 6.73953 81.9907 6.80829C82.3363 6.87705 82.6539 7.04677 82.9031 7.29599C83.1523 7.5452 83.322 7.86272 83.3908 8.2084C83.4595 8.55407 83.4242 8.91237 83.2894 9.23799C83.1545 9.56361 82.9261 9.84192 82.633 10.0377C82.34 10.2335 81.9955 10.3381 81.643 10.3381C81.1719 10.3334 80.7213 10.1441 80.3881 9.81093C80.055 9.47775 79.8657 9.02721 79.861 8.55605ZM80.161 11.209H83.132V21.109H80.157L80.161 11.209Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M95.956 16.159C95.9903 16.8133 95.895 17.4679 95.6754 18.0852C95.4559 18.7025 95.1165 19.2703 94.6767 19.756C94.237 20.2416 93.7055 20.6356 93.113 20.9152C92.5204 21.1947 91.8785 21.3544 91.224 21.385C90.6736 21.415 90.1235 21.3222 89.6134 21.1133C89.1033 20.9043 88.6462 20.5845 88.275 20.177V25.068H85.305V11.209H88.275V12.139C88.6463 11.7318 89.1036 11.4122 89.6136 11.2035C90.1237 10.9947 90.6737 10.902 91.224 10.932C91.8786 10.9625 92.5207 11.1221 93.1134 11.4017C93.7061 11.6813 94.2376 12.0753 94.6774 12.5611C95.1172 13.0469 95.4566 13.6149 95.676 14.2324C95.8954 14.8498 95.9906 15.5046 95.956 16.159ZM92.986 16.159C92.9744 15.6957 92.8264 15.2461 92.5605 14.8664C92.2946 14.4868 91.9227 14.194 91.4913 14.0248C91.0598 13.8555 90.588 13.8172 90.1349 13.9148C89.6818 14.0123 89.2676 14.2413 88.944 14.5731C88.6204 14.905 88.4019 15.3248 88.3158 15.7803C88.2297 16.2357 88.2798 16.7063 88.4599 17.1334C88.6399 17.5605 88.942 17.9249 89.3282 18.1812C89.7144 18.4374 90.1675 18.5741 90.631 18.574C90.9492 18.5882 91.2668 18.5349 91.563 18.4177C91.8591 18.3006 92.1272 18.1221 92.3495 17.8941C92.5719 17.666 92.7435 17.3936 92.8532 17.0946C92.9629 16.7956 93.0082 16.4767 92.986 16.159Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M105.121 18.138C105.121 20.415 103.142 21.385 101.004 21.385C100.14 21.4632 99.2727 21.2806 98.5138 20.8605C97.7549 20.4405 97.1395 19.8025 96.747 19.029L99.32 17.564C99.4241 17.9215 99.6477 18.2326 99.9534 18.4451C100.259 18.6577 100.629 18.759 101 18.732C101.712 18.732 102.069 18.514 102.069 18.119C102.069 17.029 97.198 17.604 97.198 14.179C97.198 12.02 99.02 10.932 101.079 10.932C101.853 10.9075 102.619 11.0911 103.298 11.4636C103.977 11.8362 104.544 12.384 104.939 13.05L102.405 14.416C102.294 14.1567 102.109 13.9358 101.873 13.7809C101.637 13.626 101.361 13.544 101.079 13.545C100.564 13.545 100.247 13.745 100.247 14.099C100.251 15.228 105.121 14.475 105.121 18.138Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M115.97 11.209V21.109H113V20.178C112.657 20.5888 112.222 20.9125 111.73 21.1225C111.238 21.3325 110.704 21.4228 110.17 21.386C108.17 21.386 106.47 19.961 106.47 17.286V11.209H109.44V16.851C109.415 17.0868 109.442 17.3252 109.519 17.5495C109.595 17.7739 109.72 17.9789 109.884 18.1502C110.048 18.3215 110.247 18.455 110.468 18.5415C110.688 18.628 110.925 18.6654 111.162 18.651C112.251 18.651 113.003 18.018 113.003 16.612V11.212L115.97 11.209Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M133 15.03V21.108H130.03V15.287C130.03 14.297 129.555 13.664 128.605 13.664C127.615 13.664 127.06 14.357 127.06 15.525V21.108H124.091V15.287C124.091 14.297 123.616 13.664 122.665 13.664C121.675 13.664 121.121 14.357 121.121 15.525V21.108H118.151V11.208H121.121V12.118C121.429 11.7143 121.833 11.3941 122.296 11.1868C122.76 10.9794 123.268 10.8915 123.774 10.931C124.282 10.9061 124.788 11.0134 125.243 11.2423C125.697 11.4711 126.084 11.8139 126.367 12.237C126.696 11.7943 127.132 11.4423 127.634 11.2139C128.136 10.9855 128.688 10.8882 129.238 10.931C131.511 10.932 133 12.555 133 15.03Z"
                    fill="#DAC5A7"
                  />
                  <path
                    d="M135.512 11.148C136.729 11.148 137.716 10.1612 137.716 8.94399C137.716 7.72675 136.729 6.73999 135.512 6.73999C134.295 6.73999 133.308 7.72675 133.308 8.94399C133.308 10.1612 134.295 11.148 135.512 11.148Z"
                    fill="#DAC5A7"
                  />
                </svg>
              </div>
              <div class="item-reviews__title">
                Professional, Collaborative Web Design Experience with Arik.
              </div>

              <p class="item-reviews__text">
                I had the pleasure of working with Arik on a website development
                project and was blown away by his expertise and professionalism.
                He made the process seamless and delivered a website that
                exceeded our expectations. I highly recommend Arik for all your
                web development needs.
              </p>

              <div class="item-reviews__author">
                <div class="item-reviews__image">
                  <img src="/reviews/03.jpg" alt="" />
                </div>
                <div class="item-reviews__author-content">
                  <span>Karen Lee</span>
                  <span>Redwood Technologies</span>
                </div>
              </div>
            </div>
          </article>
          <article class="reviews__item item-reviews">
            <div class="item-reviews__body">
              <div class="item-reviews__icon">
                <svg
                  width="78"
                  height="30"
                  viewBox="0 0 78 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1301_3340)">
                    <path
                      d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.4689 21.7736 24.469 21.7738 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
                      fill="#DAC5A7"
                    />
                    <path
                      d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
                      fill="#DAC5A7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1301_3340">
                      <rect width="78" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="item-reviews__title">
                Web Design and Content Solutions: Stand Out from the Crowd.
              </div>

              <p class="item-reviews__text">
                Arik's SEO services have helped my business improve its online
                presence and increase traffic to our website. He is
                knowledgeable, professional, and provides excellent results. I
                highly recommend him for all your SEO needs.
              </p>

              <div class="item-reviews__author">
                <div class="item-reviews__image">
                  <img src="/reviews/05.jpg" alt="" />
                </div>
                <div class="item-reviews__author-content">
                  <span>Emily Davis</span>
                  <span>Greenway Industries</span>
                </div>
              </div>
            </div>
          </article>
          <article class="reviews__item item-reviews">
            <div class="item-reviews__body">
              <div class="item-reviews__icon">
                <svg
                  width="36"
                  height="30"
                  viewBox="0 0 36 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1301_3356)">
                    <path
                      d="M15.5864 0.282959L34.8164 19.4352V29.7169H25.8424V23.1313L11.8754 9.22065H8.97401V29.7169H0V0.282959H15.5864ZM25.8424 10.4975V0.282959H34.8164V10.4975H25.8424Z"
                      fill="#DAC5A7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1301_3356">
                      <rect width="35.4545" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="item-reviews__title">
                Expert Webflow and SEO Services: Excellent Work, Great Results.
              </div>

              <p class="item-reviews__text">
                Working with Arik on my website redesign was a fantastic
                experience. He was able to take my vision and turn it into a
                beautiful and functional website. His attention to detail and
                creative approach is unmatched. I couldn't be happier with the
                end result.
              </p>

              <div class="item-reviews__author">
                <div class="item-reviews__image">
                  <img src="/reviews/02.jpg" alt="" />
                </div>
                <div class="item-reviews__author-content">
                  <span>David Kim</span>
                  <span>Design Inc.</span>
                </div>
              </div>
            </div>
          </article>
          <article class="reviews__item item-reviews">
            <div class="item-reviews__body">
              <div class="item-reviews__icon">
                <svg
                  width="152"
                  height="19"
                  viewBox="0 0 152 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M75.693 16.374H70.573V2.68599H75.693V16.374ZM71.073 15.874H75.193V3.18599H71.073V15.874ZM82.817 16.374H77.8V2.68599H88.282C89.7836 2.56439 91.279 2.98596 92.496 3.87399C93.0199 4.3533 93.426 4.94718 93.6825 5.60928C93.9391 6.27139 94.0392 6.98382 93.975 7.69099C94.0498 8.91296 93.6609 10.1182 92.886 11.066C91.969 12.118 90.443 12.66 88.351 12.679C87.824 12.693 83.875 12.679 82.82 12.679L82.817 16.374ZM78.297 15.874H82.317V12.174H82.568C82.619 12.174 87.746 12.19 88.339 12.174C90.288 12.157 91.689 11.674 92.508 10.731C93.1978 9.87344 93.5404 8.78814 93.468 7.68999C93.5295 7.05636 93.4442 6.41708 93.2188 5.82173C92.9933 5.22638 92.6338 4.69096 92.168 4.25699C91.0396 3.44709 89.659 3.06692 88.275 3.18499H78.3L78.297 15.874ZM87.22 9.60399H82.283V5.87799H87.253C87.6053 5.82931 87.9642 5.87043 88.2963 5.99752C88.6285 6.12462 88.9232 6.33357 89.153 6.60499C89.3615 6.95193 89.4598 7.35397 89.435 7.75799C89.4537 8.13309 89.3727 8.50646 89.2 8.83999C88.9629 9.12587 88.6562 9.34594 88.3094 9.47904C87.9627 9.61214 87.5875 9.65379 87.22 9.59999V9.60399ZM82.783 9.10399H87.22C88.04 9.10399 88.548 8.93299 88.773 8.58099C88.8969 8.32514 88.953 8.04175 88.936 7.75799C88.9579 7.46005 88.8933 7.16213 88.75 6.89999L88.744 6.89099C88.506 6.54099 88.033 6.37799 87.253 6.37799H82.783V9.10399ZM103.1 16.576C98.61 16.576 95.93 15.461 94.909 13.168C94.7419 12.7251 94.6285 12.2638 94.571 11.794L94.527 11.506H99.869L99.904 11.716C99.9451 11.9292 100.036 12.1299 100.168 12.302C100.379 12.557 101.083 12.985 103.419 12.985C106.227 12.985 106.227 12.492 106.227 12.227C106.227 11.78 105.902 11.627 103.612 11.383L103.177 11.342C102.315 11.261 101.225 11.158 100.727 11.115C96.527 10.735 94.652 9.42999 94.652 6.88499C94.652 4.21199 97.843 2.48499 102.782 2.48499C106.811 2.48499 109.407 3.54699 110.496 5.64399C110.754 6.13177 110.928 6.65998 111.009 7.20599L111.044 7.48699H105.696L105.674 7.26099C105.653 7.08437 105.578 6.91868 105.458 6.78699C105.258 6.51899 104.626 6.07599 102.664 6.07599C100.255 6.07599 99.923 6.38399 99.923 6.71599C99.923 7.15899 100.684 7.31599 103.123 7.57699C104.14 7.65999 105.775 7.82799 106.335 7.89599C109.856 8.27799 111.427 9.55099 111.427 12.025C111.428 14.1 109.983 16.576 103.1 16.576ZM95.111 12.006C95.1611 12.3358 95.2473 12.659 95.368 12.97C96.298 15.059 98.828 16.076 103.1 16.076C106.672 16.076 110.931 15.376 110.931 12.025C110.931 9.83199 109.541 8.74599 106.282 8.39299C105.722 8.32499 104.097 8.15799 103.082 8.07399C100.482 7.79199 99.425 7.64199 99.425 6.71599C99.425 5.75799 100.564 5.57599 102.666 5.57599C104.327 5.57599 105.4 5.87599 105.855 6.48099C105.979 6.63004 106.073 6.80194 106.131 6.98699H110.465C110.378 6.60023 110.24 6.22668 110.055 5.87599C109.055 3.95699 106.612 2.98499 102.784 2.98499C98.149 2.98499 95.154 4.51599 95.154 6.88499C95.154 9.14499 96.835 10.261 100.773 10.617C101.273 10.66 102.362 10.763 103.226 10.845L103.664 10.886C105.791 11.11 106.729 11.25 106.729 12.227C106.729 13.279 105.516 13.485 103.421 13.485C101.483 13.485 100.259 13.194 99.786 12.621C99.6402 12.4383 99.5302 12.2296 99.462 12.006H95.111ZM120.927 16.559C115.707 16.559 112.827 14.448 112.827 10.614V2.68599H117.879V10.614C117.879 11.929 119.056 12.683 121.107 12.683C123.067 12.683 124.284 11.896 124.284 10.631V2.68599H129.284V11.034C129.289 14.545 126.24 16.559 120.924 16.559H120.927ZM113.327 3.18599V10.614C113.327 15.352 118.085 16.059 120.927 16.059C123.865 16.059 128.792 15.406 128.792 11.034V3.18599H124.792V10.631C124.792 12.181 123.348 13.183 121.115 13.183C118.781 13.183 117.387 12.223 117.387 10.614V3.18599H113.327ZM150.472 16.374H145.704V10.194L143 16.374H138.841L136.165 10.206V16.374H131.38V2.68599H137.674L140.944 10.233L144.372 2.68599H150.478L150.472 16.374ZM146.204 15.874H149.972V3.18599H144.69L140.928 11.465L137.342 3.18599H131.876V15.874H135.661V7.79999L139.161 15.877H142.661L146.198 7.81199L146.204 15.874ZM6.054 2.93599H1.5V16.124H14.084V12.613H6.054V2.93599ZM23.276 2.63599C17.463 2.63599 14.406 5.39099 14.406 9.43599C14.406 14.006 17.615 16.324 23.276 16.324C29.508 16.324 32.129 13.636 32.129 9.43599C32.129 5.17099 29.172 2.63399 23.276 2.63399V2.63599ZM23.259 6.06299C23.6547 6.06113 24.0502 6.08417 24.443 6.13199L19.352 11.223C19.1111 10.6781 18.9936 10.0866 19.008 9.49099C19.008 7.42199 20.05 6.06099 23.259 6.06099V6.06299ZM23.276 12.951C22.8947 12.9527 22.5137 12.9313 22.135 12.887L27.235 7.78699C27.4669 8.32289 27.5779 8.90332 27.56 9.48699C27.56 11.5 26.6 12.949 23.276 12.949V12.951ZM41.152 11.151H45.839C45.77 11.4763 45.6262 11.781 45.419 12.041C44.4473 12.8326 43.2072 13.2178 41.958 13.116C41.3292 13.1833 40.6934 13.1146 40.0935 12.9146C39.4936 12.7147 38.9436 12.3881 38.481 11.957C38.0071 11.2619 37.782 10.4271 37.842 9.58799C37.7653 8.70873 38.0101 7.83151 38.531 7.11899C39.186 6.37899 40.295 6.05999 41.925 6.05999C42.9621 5.97412 43.9979 6.24047 44.865 6.81599C45.1383 7.03307 45.3426 7.3249 45.453 7.65599H49.8C49.7684 7.11046 49.6372 6.57532 49.413 6.07699C48.372 3.95999 45.952 2.69999 41.837 2.69999C38.258 2.69999 35.856 3.79199 34.529 5.43899C33.6526 6.62835 33.2027 8.07843 33.252 9.55499C33.1953 11.065 33.6336 12.5521 34.5 13.79C35.811 15.49 38.146 16.326 40.952 16.326C42.8175 16.4561 44.6703 15.9336 46.193 14.848L46.311 16.124H49.922V8.31199H41.152V11.151ZM60.171 2.63299C54.359 2.63299 51.301 5.38799 51.301 9.43299C51.301 14.003 54.509 16.321 60.171 16.321C66.404 16.321 69.025 13.633 69.025 9.43299C69.025 5.17099 66.068 2.63399 60.171 2.63399V2.63299ZM60.155 6.05999C60.5403 6.05885 60.9253 6.08089 61.308 6.12599L56.237 11.2C56.0036 10.6611 55.89 10.0781 55.904 9.49099C55.9 7.42199 56.946 6.06099 60.155 6.06099V6.05999ZM60.171 12.948C59.7796 12.9497 59.3885 12.9269 59 12.88L64.117 7.76199C64.3577 8.30502 64.4729 8.89531 64.454 9.48899C64.456 11.5 63.5 12.949 60.171 12.949V12.948Z"
                    fill="#DAC5A7"
                  />
                </svg>
              </div>
              <div class="item-reviews__title">
                Expertise in Web Design: Second to None with Arik.
              </div>

              <p class="item-reviews__text">
                Arik is not only an exceptional web designer, but also a
                pleasure to work with. He took the time to understand my
                business and its unique needs, and created a website that
                perfectly represents my brand. I highly recommend Arik's
                services to anyone looking for a top-quality web designer.
              </p>

              <div class="item-reviews__author">
                <div class="item-reviews__image">
                  <img src="/reviews/04.jpg" alt="" />
                </div>
                <div class="item-reviews__author-content">
                  <span>Andrew Thompson</span>
                  <span>Silverstone Corporation</span>
                </div>
              </div>
            </div>
          </article>
          <article class="reviews__item item-reviews">
            <div class="item-reviews__body">
              <div class="item-reviews__icon">
                <svg
                  width="95"
                  height="22"
                  viewBox="0 0 95 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 21.375H21.375V2.99959e-08H0V21.375ZM17.2609 8.63083H12.7442V4.11417H17.2609V8.63083ZM4.11333 4.11417H8.63252V12.7442H17.2609V17.2608H4.11333V4.11417ZM35.2942 2.99959e-08C33.1804 2.99959e-08 31.114 0.626817 29.3565 1.80117C27.5989 2.97553 26.2291 4.64469 25.4202 6.59758C24.6113 8.5505 24.3997 10.6993 24.812 12.7725C25.2244 14.8457 26.2423 16.75 27.7369 18.2447C29.2316 19.7394 31.1359 20.7572 33.2091 21.1697C35.2824 21.582 37.4312 21.3704 39.3841 20.5615C41.337 19.7526 43.0061 18.3827 44.1805 16.6252C45.3549 14.8676 45.9817 12.8012 45.9817 10.6875C45.9784 7.854 44.8513 5.13753 42.8477 3.13396C40.8441 1.13037 38.1277 0.00330836 35.2942 2.99959e-08ZM35.2942 17.2608C33.9941 17.2608 32.7232 16.8753 31.6422 16.153C30.5613 15.4307 29.7187 14.4042 29.2212 13.203C28.7237 12.0019 28.5935 10.6802 28.8471 9.40508C29.1008 8.13 29.7269 6.95875 30.6461 6.03945C31.5654 5.12016 32.7367 4.49411 34.0118 4.24047C35.2869 3.98684 36.6085 4.11702 37.8097 4.61453C39.0108 5.11205 40.0374 5.95457 40.7597 7.03558C41.482 8.1165 41.8675 9.38742 41.8675 10.6875C41.8649 12.4301 41.1714 14.1005 39.9393 15.3327C38.7071 16.5648 37.0367 17.2582 35.2942 17.2608ZM84.2267 2.99959e-08C82.1125 -0.000158303 80.0464 0.626508 78.2888 1.80077C76.5311 2.97502 75.1612 4.64412 74.3521 6.597C73.5431 8.54983 73.3313 10.6988 73.7436 12.772C74.1559 14.8452 75.1737 16.7497 76.6684 18.2444C78.1629 19.7392 80.0673 20.7572 82.1409 21.1696C84.2134 21.582 86.3625 21.3704 88.3159 20.5616C90.2684 19.7527 91.9375 18.3828 93.1117 16.6252C94.2867 14.8677 94.9134 12.8013 94.9134 10.6875C94.91 7.85417 93.7834 5.1378 91.78 3.13425C89.7767 1.13069 87.06 0.00353336 84.2267 2.99959e-08ZM84.2267 17.2608C82.9267 17.261 81.6559 16.8756 80.5745 16.1534C79.4934 15.4312 78.6508 14.4047 78.1531 13.2036C77.6554 12.0025 77.5252 10.6807 77.7787 9.40558C78.0323 8.1305 78.6583 6.95917 79.5775 6.03975C80.4968 5.12037 81.6684 4.49423 82.9434 4.24053C84.2184 3.98683 85.54 4.11696 86.7409 4.61446C87.9425 5.11195 88.9692 5.95447 89.6917 7.0355C90.4134 8.1165 90.7992 9.38742 90.7992 10.6875C90.7967 12.4299 90.1034 14.1002 88.8709 15.3323C87.6392 16.5645 85.9692 17.258 84.2267 17.2608ZM59.76 2.99959e-08C57.6462 2.99959e-08 55.5799 0.626817 53.8224 1.80117C52.0648 2.97553 50.6949 4.64469 49.886 6.59758C49.0771 8.5505 48.8655 10.6993 49.2779 12.7725C49.6903 14.8457 50.7081 16.75 52.2028 18.2447C53.6974 19.7394 55.6018 20.7572 57.6749 21.1697C59.7481 21.582 61.897 21.3704 63.8499 20.5615C65.8028 19.7526 67.4719 18.3827 68.6464 16.6252C69.8207 14.8676 70.4475 12.8012 70.4475 10.6875C70.4442 7.854 69.3171 5.13753 67.3135 3.13396C65.3099 1.13037 62.5935 0.00330836 59.76 2.99959e-08ZM59.76 17.2608C58.5487 17.2614 57.3609 16.9273 56.3274 16.2954C55.2941 15.6635 54.4554 14.7584 53.9039 13.6799C53.3526 12.6014 53.1099 11.3915 53.2027 10.1838C53.2955 8.97608 53.7202 7.8175 54.4299 6.83592C55.1397 5.85438 56.1068 5.08801 57.2246 4.62142C58.3424 4.15483 59.5674 4.00618 60.7644 4.19187C61.9614 4.37756 63.0837 4.89036 64.0076 5.67368C64.9315 6.457 65.621 7.48041 66 8.63083H59.76V12.7442H66C65.5659 14.0569 64.7296 15.1997 63.6095 16.0104C62.4895 16.8212 61.1427 17.2586 59.76 17.2608Z"
                    fill="#DAC5A7"
                  />
                </svg>
              </div>
              <div class="item-reviews__title">
                High-Quality Web Design: Exceptional Attention to Detail with
                Arik.
              </div>

              <p class="item-reviews__text">
                Arik's development services are top-notch. He is able to take
                complex ideas and turn them into functional, user-friendly
                websites. His attention to detail and commitment to customer
                satisfaction are unmatched. I highly recommend Arik for all your
                web development needs.
              </p>

              <div class="item-reviews__author">
                <div class="item-reviews__image">
                  <img src="/reviews/06.jpg" alt="" />
                </div>
                <div class="item-reviews__author-content">
                  <span>Ryan Chen</span>
                  <span>Golden Gate Solutions</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="about-module">
      <div class="about-module__container">
        <div class="about-module__header">
          <div class="about-module__image-container">
            <img class="about-module__image" src="/arik.png" alt="" />
          </div>
          <div class="about-module__text">
            <MarqueeComponent
              direction="left"
              :speed="15"
              :space="75"
              :pause-on-hover="false"
            >
              <!-- <div v-for="(icon, i) in duplicatedIcons" :key="i">
          <img :src="icon" alt="Icon" class="h-60 w-auto clients__item" />
        </div> -->
              <div class="about-module__name">
                <span>Arik </span><span>Andersson</span>
              </div>
              <div class="about-module__name">
                <span>Arik </span><span>Andersson</span>
              </div>
              <div class="about-module__name">
                <span>Arik </span><span>Andersson</span>
              </div>
              <div class="about-module__name">
                <span>Arik </span><span>Andersson</span>
              </div>
              <div class="about-module__name">
                <span>Arik </span><span>Andersson</span>
              </div>
            </MarqueeComponent>
            <!-- <span>Arik Andersson</span> <span>Arik Andersson</span> -->
          </div>
        </div>
        <div
          ref="contentModuleTarget"
          class="about-module__content content-module show-animation"
          :class="{ 'is-show': contentModuleVisible }"
        >
          <div class="content-module__container">
            <div
              class="content-module__title text-block__title text-block__title--48"
            >
              <span> A website that leaves</span>
              <span>a lasting impression!</span>
            </div>
            <div class="content-module__text-body">
              <div class="content-module__text">
                Hi, I'm Arik Andersson - a freelancer specializing in premium
                web design, development, and SEO services. I'm passionate about
                creating unique and effective solutions for my clients, and I
                bring a personal touch to every project. Let's work together to
                bring your vision to life!
              </div>
              <div class="content-module__icons">
                <div class="content-module__icon">
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7233 2.1641C16.688 2.07903 16.6285 2.00625 16.552 1.95484C16.4756 1.90343 16.3858 1.87567 16.2937 1.87503H13.8249C13.5198 1.31458 13.0709 0.845492 12.5244 0.515964C11.978 0.186437 11.3536 0.00835989 10.7155 3.43041e-05C9.75681 -0.00413371 8.83548 0.371664 8.15318 1.04518C7.47087 1.7187 7.08317 2.63509 7.07491 3.59378V4.27347C3.76241 3.48441 1.02804 0.789097 0.996785 0.765659C0.936556 0.706203 0.861353 0.664161 0.779158 0.643997C0.696962 0.623833 0.610841 0.626298 0.529934 0.651131C0.449027 0.675964 0.376352 0.722238 0.319622 0.785043C0.262893 0.847847 0.224225 0.924839 0.207722 1.00785C-0.471965 4.7266 0.645223 7.21097 1.69991 8.64066C2.25929 9.40617 2.94643 10.0695 3.73116 10.6016C2.52022 12.0703 0.528035 12.836 0.504598 12.8438C0.438036 12.8683 0.378029 12.9078 0.329247 12.9593C0.280465 13.0108 0.244225 13.0729 0.223347 13.1407C0.201178 13.2068 0.19458 13.2772 0.204066 13.3463C0.213551 13.4154 0.238865 13.4814 0.278035 13.5391C0.35616 13.6563 1.12179 14.6875 3.79366 14.6875C9.23897 14.6875 13.7937 10.4766 14.2312 5.07035L16.6218 2.67191C16.6895 2.60842 16.7358 2.52534 16.754 2.43428C16.7722 2.34323 16.7615 2.24876 16.7233 2.1641ZM13.4421 4.53128C13.3608 4.61236 13.3134 4.72125 13.3093 4.83597C12.989 9.83597 8.80929 13.75 3.79366 13.75C2.70772 13.75 2.01241 13.5625 1.59835 13.375C2.48116 12.9297 3.92647 12.0547 4.80929 10.7266C4.84446 10.6715 4.86812 10.6099 4.87886 10.5455C4.8896 10.481 4.8872 10.4151 4.87179 10.3516C4.85513 10.2866 4.82495 10.2259 4.78321 10.1734C4.74148 10.1209 4.68913 10.0778 4.6296 10.0469C4.61397 10.0469 3.4421 9.43753 2.42647 8.04691C1.21553 6.39066 0.738972 4.36722 1.0046 2.03128C2.14522 3.00003 4.60616 4.82816 7.46553 5.30472C7.53283 5.3175 7.60214 5.31513 7.6684 5.29776C7.73466 5.28039 7.79623 5.24847 7.8486 5.20433C7.90098 5.16018 7.94286 5.10491 7.9712 5.04254C7.99953 4.98018 8.01361 4.91228 8.01241 4.84378V3.59378C8.0186 2.8858 8.30473 2.20904 8.80828 1.71134C9.31184 1.21363 9.9919 0.935443 10.6999 0.937534C11.2115 0.944921 11.7102 1.09903 12.1367 1.38156C12.5633 1.66408 12.8998 2.06313 13.1062 2.53128C13.1418 2.6155 13.2017 2.68721 13.2782 2.73729C13.3547 2.78738 13.4444 2.81357 13.5358 2.81253H15.1608L13.4421 4.53128Z"
                    />
                  </svg>
                </div>
                <div class="content-module__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65625 4.0625C6.94547 4.0625 6.25066 4.27327 5.65967 4.66816C5.06868 5.06304 4.60806 5.62431 4.33606 6.28098C4.06406 6.93765 3.99289 7.66024 4.13155 8.35736C4.27022 9.05447 4.61249 9.69482 5.11509 10.1974C5.61768 10.7 6.25803 11.0423 6.95514 11.1809C7.65226 11.3196 8.37485 11.2484 9.03152 10.9764C9.68819 10.7044 10.2495 10.2438 10.6443 9.65283C11.0392 9.06184 11.25 8.36703 11.25 7.65625C11.25 6.70313 10.8714 5.78904 10.1974 5.11509C9.52346 4.44113 8.60937 4.0625 7.65625 4.0625ZM7.65625 10.3125C7.13089 10.3125 6.61733 10.1567 6.18052 9.86484C5.7437 9.57297 5.40324 9.15812 5.2022 8.67275C5.00115 8.18739 4.94855 7.6533 5.05104 7.13804C5.15353 6.62278 5.40651 6.14948 5.778 5.778C6.14948 5.40651 6.62278 5.15353 7.13804 5.05104C7.6533 4.94855 8.18739 5.00115 8.67275 5.2022C9.15812 5.40324 9.57297 5.7437 9.86484 6.18052C10.1567 6.61733 10.3125 7.13089 10.3125 7.65625C10.3104 8.3601 10.0299 9.03453 9.53223 9.53223C9.03453 10.0299 8.3601 10.3104 7.65625 10.3125ZM11.0938 0H4.21875C3.09987 0 2.02681 0.444474 1.23564 1.23564C0.444474 2.02681 0 3.09987 0 4.21875V11.0938C0 12.2126 0.444474 13.2857 1.23564 14.0769C2.02681 14.868 3.09987 15.3125 4.21875 15.3125H11.0938C12.2126 15.3125 13.2857 14.868 14.0769 14.0769C14.868 13.2857 15.3125 12.2126 15.3125 11.0938V4.21875C15.3125 3.09987 14.868 2.02681 14.0769 1.23564C13.2857 0.444474 12.2126 0 11.0938 0ZM14.375 11.0938C14.375 11.964 14.0293 12.7986 13.4139 13.4139C12.7986 14.0293 11.964 14.375 11.0938 14.375H4.21875C3.34851 14.375 2.51391 14.0293 1.89856 13.4139C1.2832 12.7986 0.9375 11.964 0.9375 11.0938V4.21875C0.9375 3.34851 1.2832 2.51391 1.89856 1.89856C2.51391 1.2832 3.34851 0.9375 4.21875 0.9375H11.0938C11.964 0.9375 12.7986 1.2832 13.4139 1.89856C14.0293 2.51391 14.375 3.34851 14.375 4.21875V11.0938ZM12.5 3.59375C12.5 3.74827 12.4542 3.89931 12.3683 4.02779C12.2825 4.15627 12.1605 4.2564 12.0177 4.31553C11.875 4.37466 11.7179 4.39013 11.5663 4.35999C11.4148 4.32984 11.2756 4.25544 11.1663 4.14618C11.0571 4.03692 10.9827 3.89771 10.9525 3.74616C10.9224 3.59462 10.9378 3.43753 10.997 3.29478C11.0561 3.15202 11.1562 3.03001 11.2847 2.94416C11.4132 2.85832 11.5642 2.8125 11.7188 2.8125C11.926 2.8125 12.1247 2.89481 12.2712 3.04132C12.4177 3.18784 12.5 3.38655 12.5 3.59375Z"
                    />
                  </svg>
                </div>
                <div class="content-module__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9375 8.02346V7.96878C15.9382 6.78432 15.6741 5.61468 15.1645 4.54546C14.6549 3.47623 13.9127 2.53447 12.9922 1.78909L12.9531 1.75003L12.9141 1.71878C11.5078 0.602508 9.76424 -0.00345297 7.96875 2.6025e-05C6.77518 -0.00305147 5.5967 0.266848 4.52344 0.789088L4.42969 0.828151C3.34106 1.37105 2.39044 2.15484 1.64997 3.12001C0.90951 4.08519 0.398677 5.20637 0.156253 6.39846V6.41409C0.0519273 6.92573 -0.000421999 7.44661 2.56171e-06 7.96878C0.000304009 9.20665 0.289273 10.4274 0.843953 11.5341C1.39863 12.6407 2.20374 13.6028 3.19532 14.3438L3.27344 14.4063H3.28907C4.64746 15.3994 6.28606 15.9355 7.96875 15.9375C8.87108 15.9403 9.76709 15.787 10.6172 15.4844L10.6641 15.4688C12.1952 14.915 13.5207 13.9067 14.4632 12.579C15.4056 11.2512 15.92 9.66723 15.9375 8.03909V8.02346ZM14.9844 7.52346C14.7344 7.50784 14.4766 7.50003 14.2188 7.50003C13.0245 7.49861 11.8359 7.66428 10.6875 7.99221C10.3982 7.11541 10.0213 6.26999 9.5625 5.46878L9.52344 5.41409C10.7182 4.71017 11.794 3.82157 12.7109 2.78128C14.0556 4.00694 14.8709 5.70754 14.9844 7.52346ZM11.9766 2.19534C11.1272 3.15972 10.1273 3.98023 9.01563 4.62503C8.11685 3.33035 6.9921 2.20825 5.69532 1.31253C6.73835 0.957876 7.85006 0.852997 8.94101 1.00633C10.032 1.15966 11.0717 1.56692 11.9766 2.19534ZM4.66406 1.76565C6.0472 2.61835 7.24315 3.74254 8.17969 5.07034C6.55273 5.84814 4.77208 6.25125 2.96875 6.25003C2.37257 6.24883 1.77727 6.20444 1.1875 6.11721C1.4409 5.19372 1.87988 4.33156 2.47761 3.58338C3.07535 2.8352 3.81931 2.2167 4.66406 1.76565ZM0.937503 7.96878C0.938614 7.65787 0.959489 7.34735 1 7.03909C1.65188 7.13541 2.3098 7.18502 2.96875 7.18753C4.95439 7.19151 6.91414 6.73699 8.69532 5.8594L8.75 5.94534C9.17943 6.68537 9.53029 7.46827 9.79688 8.28128C9.08991 8.53384 8.4074 8.85025 7.75782 9.22659C6.00759 10.2293 4.51711 11.6288 3.40625 13.3125C2.63264 12.6535 2.01126 11.8344 1.58504 10.9118C1.15881 9.98917 0.937879 8.98507 0.937503 7.96878ZM4.15625 13.875C5.5739 11.7264 7.63624 10.0826 10.0469 9.17971C10.272 10.1055 10.3848 11.0551 10.3828 12.0078C10.3862 12.9043 10.2866 13.7982 10.0859 14.6719C9.09993 14.9844 8.05702 15.075 7.03189 14.9373C6.00676 14.7995 5.02477 14.4368 4.15625 13.875ZM11.1328 14.25C11.2576 13.5091 11.3203 12.7591 11.3203 12.0078C11.3213 10.9575 11.1954 9.91082 10.9453 8.89065C12.0108 8.5915 13.1121 8.43905 14.2188 8.43753C14.4766 8.43753 14.7266 8.44534 14.9844 8.46096C14.8978 9.67658 14.4974 10.849 13.8223 11.8636C13.1473 12.8783 12.2206 13.7005 11.1328 14.25Z"
                    />
                  </svg>
                </div>
                <div class="content-module__icon">
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.625 1.71875C10.625 1.59443 10.6744 1.4752 10.7623 1.38729C10.8502 1.29939 10.9694 1.25 11.0938 1.25H16.0938C16.2181 1.25 16.3373 1.29939 16.4252 1.38729C16.5131 1.4752 16.5625 1.59443 16.5625 1.71875C16.5625 1.84307 16.5131 1.9623 16.4252 2.05021C16.3373 2.13811 16.2181 2.1875 16.0938 2.1875H11.0938C10.9694 2.1875 10.8502 2.13811 10.7623 2.05021C10.6744 1.9623 10.625 1.84307 10.625 1.71875ZM17.1875 7.34375C17.1875 7.46807 17.1381 7.5873 17.0502 7.67521C16.9623 7.76311 16.8431 7.8125 16.7188 7.8125H10.9766C11.088 8.42567 11.411 8.98035 11.8892 9.38003C12.3674 9.77971 12.9705 9.99909 13.5938 10C13.9427 10.0022 14.2885 9.93415 14.6106 9.79993C14.9328 9.66572 15.2246 9.46807 15.4688 9.21875C15.5577 9.13237 15.6768 9.08405 15.8008 9.08405C15.9248 9.08405 16.0439 9.13237 16.1328 9.21875C16.1775 9.26175 16.213 9.31332 16.2373 9.37037C16.2615 9.42742 16.274 9.48878 16.274 9.55078C16.274 9.61278 16.2615 9.67414 16.2373 9.73119C16.213 9.78824 16.1775 9.83981 16.1328 9.88281C15.5444 10.4703 14.7704 10.8355 13.9429 10.9163C13.1153 10.9971 12.2854 10.7884 11.5944 10.3258C10.9035 9.86323 10.3944 9.17538 10.1538 8.37947C9.91315 7.58355 9.95597 6.72883 10.2749 5.96096C10.5939 5.19308 11.1693 4.55957 11.903 4.16838C12.6367 3.77718 13.4833 3.65251 14.2987 3.81561C15.114 3.97871 15.8476 4.41949 16.3743 5.06283C16.9011 5.70617 17.1885 6.51226 17.1875 7.34375ZM16.2109 6.875C16.104 6.25842 15.7828 5.69939 15.304 5.29647C14.8252 4.89355 14.2195 4.67262 13.5938 4.67262C12.968 4.67262 12.3623 4.89355 11.8835 5.29647C11.4047 5.69939 11.0835 6.25842 10.9766 6.875H16.2109ZM8.75 7.8125C8.75 8.6413 8.42076 9.43616 7.83471 10.0222C7.24866 10.6083 6.4538 10.9375 5.625 10.9375H0.46875C0.34443 10.9375 0.225201 10.8881 0.137294 10.8002C0.049386 10.7123 0 10.5931 0 10.4688V0.46875C0 0.34443 0.049386 0.225201 0.137294 0.137294C0.225201 0.049386 0.34443 2.7589e-08 0.46875 2.7589e-08H4.6875C5.24994 -7.87323e-05 5.79948 0.168474 6.26515 0.483888C6.73082 0.799303 7.09122 1.24709 7.29981 1.76941C7.50841 2.29174 7.55561 2.86461 7.43532 3.41403C7.31502 3.96345 7.03277 4.46419 6.625 4.85156C7.24443 5.06078 7.78263 5.45901 8.16384 5.99018C8.54505 6.52134 8.75005 7.1587 8.75 7.8125ZM0.9375 4.6875H4.6875C5.18478 4.6875 5.6617 4.48996 6.01333 4.13833C6.36496 3.78669 6.5625 3.30978 6.5625 2.8125C6.5625 2.31522 6.36496 1.83831 6.01333 1.48667C5.6617 1.13504 5.18478 0.9375 4.6875 0.9375H0.9375V4.6875ZM7.8125 7.8125C7.81044 7.23297 7.57931 6.67777 7.16952 6.26798C6.75973 5.85819 6.20453 5.62706 5.625 5.625H0.9375V10H5.625C6.20453 9.99794 6.75973 9.76681 7.16952 9.35702C7.57931 8.94723 7.81044 8.39203 7.8125 7.8125Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LineComponent />
  </main>
</template>

<style scoped></style>
