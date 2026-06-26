<script setup lang="ts">
import { ref, computed } from "vue";
import Marquee from "~/components/Marquee.vue";
import CardWork from "~/components/CardWork.vue";

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
</script>
<template>
  <section class="hero">
    <div class="hero__container">
      <img src="/assets/img/arik.png" alt="" class="hero__image" />

      <div class="hero__text-block text-block">
        <h1 class="text-block__title text-block__title--xl">
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
      <Marquee direction="left" :speed="60" :space="40" pause-on-hover>
        <div v-for="(icon, i) in duplicatedIcons" :key="i">
          <img :src="icon" alt="Icon" class="h-60 w-auto clients__item" />
        </div>
      </Marquee>
    </div>
  </section>

  <section class="services">
    <div class="services__container">
      <article class="services__item item-services">
        <p class="item-services__index text-font__subtitle">01</p>
        <h4 class="item-services__title text-font__title">Web design</h4>
        <p class="item-services__text text-font__text">
          Visually stunning web designs that captivate your audience by blending
          your brand voice and customer needs.
        </p>
        <div class="item-services__button-container button button--upl">
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

          <a href="" class="item-services__button">About Webdesign</a>
        </div>
      </article>

      <article class="services__item item-services">
        <p class="item-services__index text-font__subtitle">02</p>
        <h4 class="item-services__title text-font__title">Development</h4>
        <p class="item-services__text text-font__text">
          Get custom web development solutions that are tailored to your
          specifications, designed to deliver a flawless user experience.
        </p>
        <div class="item-services__button-container button button--upl">
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
          <a href="" class="item-services__button">About Webdesign</a>
        </div>
      </article>

      <article class="services__item item-services">
        <p class="item-services__index text-font__subtitle">03</p>
        <h4 class="item-services__title text-font__title">Content & Seo</h4>
        <p class="item-services__text text-font__text">
          Proven SEO strategies that enhance your online performance, bringing
          you to the forefront of organic search results.
        </p>
        <div class="item-services__button-container button button--upl">
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
          <a href="" class="item-services__button">About Webdesign</a>
        </div>
      </article>
    </div>
  </section>

  <section class="selectedwork">
    <div class="selectedwork__container">
      <div class="selectedwork__header header-work">
        <h2 class="header-work__title text-font__title--l">
          Selected <span>Work</span>
        </h2>
        <div class="header-work__button-container button button--upl">
          <a href="" class="header-work__button">See all</a>
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

      <div class="selectedwork__body">
        <CardWork v-for="i in selectedWork" :key="i.id" :work="i" />
      </div>
    </div>
  </section>

  <section class="process">
    <div class="process__container">
      <div class="process__text-block text-block">
        <p class="text-block__subtitle">the process</p>
        <h1 class="text-block__title text-block__title--l">
          <span>Your Website </span>

          <span> in 5 steps </span>
        </h1>
        <p class="text-block__text">
          Our process ensures that we create a website tailored to your business
          needs.
        </p>
        <!-- <a class="text-block__button button button--down">
          <img class="button__icon" src="/assets/img/button/arrow.svg" alt="" />
          <p class="button__text">My services</p>
        </a> -->
      </div>
      <div class="process__items items-process">
        <div class="items-process__header">
          <div class="items-process__arrow"></div>
          <div class="items-process__button-container">
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
          <div class="items-process__item item-process">
            <div class="item-process__body">
              <div class="item-process__time">2 hours</div>
              <div class="item-process__subtitle text-font__subtitle">
                Do we match?
              </div>
              <div
                class="item-process__title text-font__title text-font__title--m"
              >
                Discovery Call
              </div>
              <div
                class="item-process__text text-font__text text-font__text--s"
              >
                Before we start, we determine if and how I can help you. What
                are your requirements for your new website? Why do you need a
                new website? What goals do you have, and what problems can we
                solve with a new website?
              </div>
              <ul class="item-process__list">
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  We get to know each other better
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Determine how I can best assist you
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Understand the goals you have for your website
                </li>
              </ul>
            </div>
          </div>

          <div class="items-process__item item-process">
            <div class="item-process__body">
              <div class="item-process__time">1 week</div>
              <div class="item-process__subtitle text-font__subtitle">
                lorem ipsum
              </div>
              <div
                class="item-process__title text-font__title text-font__title--m"
              >
                Concept & STrategy
              </div>
              <div
                class="item-process__text text-font__text text-font__text--s"
              >
                Together, we develop a strategy that successfully combines your
                goals with the needs of your target audience. Based on this
                concept, I create the first wireframes and an interactive
                prototype. This provides us with a very good impression of the
                website and the user interface.
              </div>
              <ul class="item-process__list">
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  UX Design
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Wireframes
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Interactive Prototype
                </li>
              </ul>
            </div>
          </div>
          <div class="items-process__item item-process">
            <div class="item-process__body">
              <div class="item-process__time">1 week</div>
              <div class="item-process__subtitle text-font__subtitle">
                SOme MAgic
              </div>
              <div
                class="item-process__title text-font__title text-font__title--m"
              >
                web Design
              </div>
              <div
                class="item-process__text text-font__text text-font__text--s"
              >
                Now comes the magic. Based on the previously developed concept,
                I create a high-end screen design perfectly tailored to your
                brand. A web design that sets you apart from your competition,
                fits your target audience ideally, and provides an excellent
                user experience.
              </div>
              <ul class="item-process__list">
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  High-end web design tailored to your brand
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Interactive prototype of the design
                </li>
              </ul>
            </div>
          </div>
          <div class="items-process__item item-process">
            <div class="item-process__body">
              <div class="item-process__time">2 weeks</div>
              <div class="item-process__subtitle text-font__subtitle">
                More Magic
              </div>
              <div
                class="item-process__title text-font__title text-font__title--m"
              >
                Development
              </div>
              <div
                class="item-process__text text-font__text text-font__text--s"
              >
                In this step, we breathe life into your new high-end design. You
                will receive a custom-built website using a modular web design
                system and CMS integration. Animations will add the necessary
                flair to your site and set you apart from the boring
                competition.
              </div>
              <ul class="item-process__list">
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Custom framer website
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Modular web design systems
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  CMS integration
                </li>
              </ul>
            </div>
          </div>
          <div class="items-process__item item-process">
            <div class="item-process__body">
              <div class="item-process__time">2 hours</div>
              <div class="item-process__subtitle text-font__subtitle">
                ready to go
              </div>
              <div
                class="item-process__title text-font__title text-font__title--m"
              >
                WEbsite onboarding
              </div>
              <div
                class="item-process__text text-font__text text-font__text--s"
              >
                In a personal Framer workshop, I will show you how to make
                changes to your new website quickly and easily. Additionally,
                you will receive personalized Framer video tutorials that you
                can access at any time. Edit your Framer website without a
                complicated backend or the need for an additional programmer.
                It's as simple as that.
              </div>
              <ul class="item-process__list">
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Personal workshop
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
                  Personalized video tutorials
                </li>
                <li
                  class="item-process__list-item text-font__list-item text-font__list-item--s"
                >
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

  <div class="hero">hello world</div>

  <Button />
  <ButtonLight />
</template>

<style scoped></style>
