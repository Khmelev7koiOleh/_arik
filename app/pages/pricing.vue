<script setup>
const work = ref([
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
  <main>
    <section class="pricing">
      <div class="pricing__container">
        <div class="pricing__text-block text-block text-block--center">
          <div class="text-block__subtitle">pricing</div>
          <h1 class="text-block__title text-block__title--xm">
            <span> Experience the Power of </span>
            <span>Premium Webdesign </span>
          </h1>
          <p class="text-block__text text-block__text--s">
            Choose a package that suits your needs and budget. Transparent
            pricing with no hidden fees.
          </p>
        </div>

        <div class="pricing__items">
          <article class="pricing__item item-pricing">
            <div class="item-pricing__body">
              <div class="item-pricing__label">Lite</div>
              <h2 class="item-pricing__title">$3900.00</h2>
              <div class="item-pricing__text">
                <p>
                  Affordable web design package with a custom design, CMS
                  integration, and responsive design for small businesses and
                  startups.
                </p>
              </div>
              <ul class="item-pricing__list">
                <li class="item-pricing__list-item">Concept</li>
                <li class="item-pricing__list-item">Strategy</li>
                <li class="item-pricing__list-item">Webdesign</li>
                <li class="item-pricing__list-item">Prototype</li>
              </ul>

              <a href="#" class="item-pricing__button">Get Started</a>
            </div>
          </article>
          <article class="pricing__item item-pricing">
            <div class="item-pricing__body">
              <div class="item-pricing__popular">popular</div>
              <div class="item-pricing__label">Premium</div>
              <h2 class="item-pricing__title">$6900.00</h2>
              <p class="item-pricing__text">
                Comprehensive web design package with UX/UI design, interactive
                prototype, Framer development, and CMS integration for medium
                businesses.
              </p>
              <ul class="item-pricing__list">
                <li class="item-pricing__list-item">Concept</li>
                <li class="item-pricing__list-item">Strategy</li>
                <li class="item-pricing__list-item">Webdesign</li>
                <li class="item-pricing__list-item">Prototype</li>
              </ul>

              <a href="#" class="item-pricing__button">Get Started</a>
            </div>
          </article>
          <article class="pricing__item item-pricing">
            <div class="item-pricing__body">
              <div class="item-pricing__label">Gold</div>
              <h2 class="item-pricing__title">$9900.00</h2>
              <p class="item-pricing__text">
                Elite web design package with SEO optimization, research, and
                SEO support for businesses looking to dominate their market.
              </p>
              <ul class="item-pricing__list">
                <li class="item-pricing__list-item">Concept</li>
                <li class="item-pricing__list-item">Strategy</li>
                <li class="item-pricing__list-item">Webdesign</li>
                <li class="item-pricing__list-item">Prototype</li>
              </ul>

              <a href="#" class="item-pricing__button">Get Started</a>
            </div>
          </article>
        </div>

        <article class="pricing__faq faq-pricing">
          <div class="faq-pricing__body">
            <div class="faq-pricing__content content-pricing">
              <div class="content-pricing__label">FAQ</div>
              <h3 class="content-pricing__title">
                <span>Common </span>
                <span> Question</span>
              </h3>
            </div>

            <div class="faq-pricing__punkts punkts-pricing">
              <Accordion
                wrapper-class="punkts-pricing__wrapper"
                list-class="punkts-pricing__list"
                title-class="punkts-pricing__title"
                img="/plus.svg"
                rotate="45deg"
                width="20px"
              >
                <template #title>
                  <h4 class="punkts-pricing__title" role="button">
                    What is the typical turnaround time for a website project?
                  </h4>
                </template>
                <template #list>
                  <li class="punkts-pricing__list-item">
                    The timeline for a website project can vary depending on the
                    complexity of the project and the specific requirements of
                    the client. However, we work closely with our clients to
                    establish a timeline that works for everyone and strive to
                    deliver projects in a timely and efficient manner.
                  </li>
                  <li class="punkts-pricing__list-item">
                    The timeline for a website project can vary depending on the
                    complexity of the project and the specific requirements of
                    the client. However, we work closely with our clients to
                    establish a timeline that works for everyone and strive to
                    deliver projects in a timely and efficient manner.
                  </li>
                </template>
              </Accordion>
              <Accordion
                wrapper-class="punkts-pricing__wrapper"
                list-class="punkts-pricing__list"
                title-class="punkts-pricing__title"
                img="/plus.svg"
                rotate="45deg"
                width="20px"
              >
                <template #title>
                  <h4 class="punkts-pricing__title" role="button">
                    Can you help with website maintenance and updates after the
                    project is completed?
                  </h4>
                </template>
                <template #list>
                  <li class="punkts-pricing__list-item">
                    The timeline for a website project can vary depending on the
                    complexity of the project and the specific requirements of
                    the client. However, we work closely with our clients to
                    establish a timeline that works for everyone and strive to
                    deliver projects in a timely and efficient manner.
                  </li>
                </template>
              </Accordion>
              <Accordion
                wrapper-class="punkts-pricing__wrapper"
                list-class="punkts-pricing__list"
                title-class="punkts-pricing__title"
                img="/plus.svg"
                rotate="45deg"
                width="20px"
              >
                <template #title>
                  <h4 class="punkts-pricing__title" role="button">
                    How do you ensure that my website will be optimized for
                    search engines?
                  </h4>
                </template>
                <template #list>
                  <li class="punkts-pricing__list-item">
                    Our client was struggling to attract and retain customers
                    due to an outdated and non-responsive website that didn't
                    align with their brand identity.
                  </li>
                </template>
              </Accordion>
              <Accordion
                wrapper-class="punkts-pricing__wrapper"
                list-class="punkts-pricing__list"
                title-class="punkts-pricing__title"
                img="/plus.svg"
                rotate="45deg"
                width="20px"
              >
                <template #title>
                  <h4 class="punkts-pricing__title" role="button">
                    What is your process for website design and development?
                  </h4>
                </template>
                <template #list>
                  <li class="punkts-pricing__list-item">
                    Our client was struggling to attract and retain customers
                    due to an outdated and non-responsive website that didn't
                    align with their brand identity.
                  </li>
                </template>
              </Accordion>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
  <Line />
</template>
