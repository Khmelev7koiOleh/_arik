<script setup lang="ts">
import { ref, computed } from "vue";
import Marquee from "~/components/Marquee.vue";
</script>

<template>
  <aside class="lets-talk">
    <div class="lets-talk__container">
      <div class="lets-talk__line-gradient">
        <div class="lets-talk__line">
          <Marquee
            direction="left"
            :speed="10"
            :space="22"
            :pause-on-hover="false"
          >
            <!-- <div v-for="(icon, i) in duplicatedIcons" :key="i">
          <img :src="icon" alt="Icon" class="h-60 w-auto clients__item" />
        </div> -->

            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>

            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>

            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>

            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>let's talk </span>
            </div>
            <div
              class="lets-talk__line-item text-font__text text-font__text--xs"
            >
              <span>+++</span>
            </div>
          </Marquee>
        </div>
      </div>
      <div class="lets-talk__content">
        <div class="lets-talk__text-block text-block">
          <p class="text-block__subtitle">Project in mind?</p>
          <h1 class="text-block__title">
            <span>Let’s make your </span>

            <span> Website shine </span>
          </h1>
          <p class="text-block__text text-block__text--s">
            Premium web design, webflow, and SEO services to help your business
            stand out.
          </p>
          <div
            class="lets-talk__button-container button button--upl button--upl--lite"
          >
            <a href="" class="lets-talk__button">Get in touch</a>

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
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
