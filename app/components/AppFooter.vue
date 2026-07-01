<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Accordion from "./Accordion.vue";

const isMobile = ref(false);

const checkMobile = () => {
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth <= 767.98;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Check on mount
onMounted(() => {
  checkMobile();
  // Also re-check if user resizes the window
  window.addEventListener("resize", checkMobile);
});

// Clean up event listener
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__media media-footer">
          <!-- Logo is good here, but make sure it links to the homepage -->
          <a
            class="media-footer__title-logo"
            href="/"
            aria-label="Go to homepage"
          >
            <img src="/assets/img/logo.svg" alt="Company name" />
          </a>

          <!-- Use an Unordered List for the social links -->
          <ul class="media-footer__list">
            <li class="media-footer__item">
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="media-footer__icon" src="/footer/01.svg" alt="" />
                <span class="media-footer__title">Instagram</span>
              </a>
            </li>
            <li class="media-footer__item">
              <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="media-footer__icon" src="/footer/02.svg" alt="" />
                <span class="media-footer__title">Twitter</span>
              </a>
            </li>
            <li class="media-footer__item">
              <a
                href="https://dribbble.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="media-footer__icon" src="/footer/03.svg" alt="" />
                <span class="media-footer__title">Dribbble</span>
                <!-- Note: It's spelled Dribbble with two 'b's -->
              </a>
            </li>
            <li class="media-footer__item">
              <a
                href="https://behance.net/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img class="media-footer__icon" src="/footer/04.svg" alt="" />
                <span class="media-footer__title">Behance</span>
              </a>
            </li>
          </ul>
        </div>
        <div v-if="!isMobile" class="footer__pages pages-footer">
          <h4
            class="pages-footer__title"
            role="button"
            aria-controls="pages-list"
            tabindex="0"
          >
            Pages
          </h4>

          <ul
            class="pages-footer__list"
            id="pages-list"
            aria-label="Pages navigation"
          >
            <li><a class="pages-footer__link" href="/">Home</a></li>
            <li class="pages-footer__link"><a href="/">Services</a></li>
            <li class="pages-footer__link"><a href="/">About</a></li>
            <li class="pages-footer__link"><a href="/">Contact</a></li>
            <li class="pages-footer__link">
              <div
                class="pages-footer__button-container button button--upl button--upl--lite"
              >
                <a href="/" class="footer__button">More templates</a>

                <svg
                  aria-hidden="true"
                  focusable="false"
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
            </li>
          </ul>
        </div>

        <Accordion v-if="isMobile" list-class="pages-footer__list">
          <template #title>
            <h4 class="pages-footer__title" role="button">Pages</h4>
          </template>
          <template #list>
            <li><a class="pages-footer__link" href="/">Home</a></li>
            <li class="pages-footer__link"><a href="/">Services</a></li>
            <li class="pages-footer__link"><a href="/">About</a></li>
            <li class="pages-footer__link"><a href="/">Contact</a></li>
            <li class="pages-footer__link">
              <div
                class="pages-footer__button-container button button--upl button--upl--lite"
              >
                <a href="/" class="footer__button">More templates</a>

                <svg
                  aria-hidden="true"
                  focusable="false"
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
            </li>
          </template>
        </Accordion>
        <div v-if="!isMobile" class="footer__cms cms-footer">
          <h4 class="cms-footer__title">CMS</h4>

          <ul
            class="cms-footer__list"
            id="pages-list"
            aria-label="Pages navigation"
          >
            <li class="cms-footer__link">Work</li>
            <li class="cms-footer__link">Work single</li>
            <li class="cms-footer__link">Blog</li>
            <li class="cms-footer__link">Blog post</li>
          </ul>
        </div>
        <Accordion v-if="isMobile" list-class="cms-footer__list">
          <template #title>
            <h4 class="cms-footer__title" id="cms-title">CMS</h4>
          </template>
          <template #list>
            <li class="cms-footer__link">Work</li>
            <li class="cms-footer__link">Work single</li>
            <li class="cms-footer__link">Blog</li>
            <li class="cms-footer__link">Blog post</li>
          </template>
        </Accordion>
        <div v-if="!isMobile" class="footer__utility utility-footer">
          <h4 class="utility-footer__title">Utility Pages</h4>

          <ul class="utility-footer__list" aria-label="Utility navigation">
            <li class="utility-footer__link">404 Error Page</li>
            <li class="utility-footer__link">Password Protected</li>
            <li class="utility-footer__link">Styleguide</li>
            <li class="utility-footer__link">Licensing</li>
            <li class="utility-footer__link">Changelog</li>
          </ul>
        </div>
        <Accordion v-if="isMobile" list-class="utility-footer__list">
          <template #title>
            <h4 class="utility-footer__title">Utility Pages</h4>
          </template>
          <template #list>
            <li class="utility-footer__link">404 Error Page</li>
            <li class="utility-footer__link">Password Protected</li>
            <li class="utility-footer__link">Styleguide</li>
            <li class="utility-footer__link">Licensing</li>
            <li class="utility-footer__link">Changelog</li>
          </template>
        </Accordion>
      </div>

      <div class="footer__bottom">
        <div class="footer__copyright">
          © 2022 Made by Pawel Gola. Powered by Framer.
        </div>
        <div class="footer__to-top">
          <button
            @click="scrollToTop()"
            class="footer__button-container button button--tr button--up"
          >
            <!-- span because <a> tag with href does not slide but teleports -->
            <span class="footer__button">to top</span>
            <svg
              aria-hidden="true"
              focusable="false"
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
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
