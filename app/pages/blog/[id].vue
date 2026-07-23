<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const content = ref(null);
// console.log(route.query.category);
// console.log(route.query.author);
const scrollTo = () => {
  content.value.scrollIntoView({ behavior: "smooth" });
};

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
});
</script>
<template>
  <main>
    <section class="blogpage">
      <div class="blogpage__container">
        <div class="blogpage__hero hero-blogpage">
          <div
            class="hero-blog__text-block text-block text-block--center loaded-animation"
            :class="{ 'is-loaded': loaded }"
          >
            <h1 class="text-block__title text-block__title--80">
              <span>{{ route.query.title?.toString() }}</span>
            </h1>
            <p class="text-block__text text-block__text--s">
              {{ route.query.description?.toString() }}
            </p>

            <div
              @click="scrollTo()"
              class="hero-blogpage__button-container hero-blogpage__button-container"
            >
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
              <a href="/about" class="hero-blogpage__button__text">REad More</a>
            </div>
          </div>
        </div>
        <div class="blogpage__info info-blogpage">
          <ul class="info-blogpage__list">
            <li class="info-blogpage__item">
              <div class="info-blogpage__label">Date</div>
              <time
                :datetime="route.query.datetime?.toString()"
                class="info-blogpage__value"
                >{{ route.query.dateText?.toString() }}</time
              >
            </li>
            <li class="info-blogpage__item">
              <div class="info-blogpage__label">Category</div>
              <a href="#" class="info-blogpage__value">
                {{ route.query.category?.toString() }}
              </a>
            </li>
            <li class="info-blogpage__item">
              <div class="info-blogpage__label">Reading time</div>
              <div class="info-blogpage__value">5 min</div>
            </li>
          </ul>
        </div>
        <div ref="content" class="blogpage__image image-blogpage">
          <div class="image-blogpage__container">
            <img :src="route.query.image?.toString()" alt="" />
          </div>
        </div>
        <div class="blogpage__body body-blogpage">
          <div class="body-blogpage__container">
            <section>
              <h2>Elit ullamcorper dignissim</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
                ullamcorper dignissim cras tincidunt. Enim neque volutpat ac
                tincidunt vitae. Dictum at tempor commodo ullamcorper a lacus
                vestibulum sed. Condimentum mattis pellentesque id nibh tortor
                id. Nisl condimentum id venenatis a condimentum. Nunc sed
                blandit libero volutpat sed. Tristique sollicitudin nibh sit
                amet commodo. Sit amet justo donec enim diam vulputate ut
                pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et
                ligula ullamcorper. Massa vitae tortor condimentum lacinia quis
                vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis
                aliquam ut porttitor leo a diam sollicitudin tempor id.
                Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet
                consectetur.
              </p>
            </section>
            <section>
              <h3>Hendrerit dolor magna</h3>
              <p>
                Tristique sollicitudin nibh sit amet commodo. Sit amet justo
                donec enim diam vulputate ut pharetra. Quis imperdiet massa
                tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa
                vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna
                eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a
                diam sollicitudin tempor id. Suspendisse faucibus interdum
                posuere.
              </p>
            </section>
            <section>
              <h3>Hendrerit dolor magna</h3>
              <p>
                Tristique sollicitudin nibh sit amet commodo. Sit amet justo
                donec enim diam vulputate ut pharetra. Quis imperdiet massa
                tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa
                vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna
                eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a
                diam sollicitudin tempor id. Suspendisse faucibus interdum
                posuere.
              </p>
            </section>
          </div>
        </div>
        <div class="blogpage__author author-blogpage">
          <div class="author-blogpage__container">
            <div class="author-blogpage__content content-author-blogpage">
              <h4 class="content-author-blogpage__title">Conclusion</h4>
              <p class="content-author-blogpage__text">
                Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
                ullamcorper. Massa vitae tortor condimentum lacinia quis vel.
                Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam
                ut porttitor leo a diam sollicitudin tempor id.
              </p>
              <div
                class="content-author-blogpage__body body-content-author-blogpage"
              >
                <div class="body-content-author-blogpage__image">
                  <img src="/blogpage/avatar.png" alt="" />
                </div>
                <div class="">
                  <div class="body-content-author-blogpage__name">
                    Arik Andersson
                  </div>
                  <div class="body-content-author-blogpage__role">
                    Framer Expert
                  </div>
                </div>
              </div>
            </div>
            <div class="author-blogpage__social social-content">
              <ul class="social-content__list">
                <li>
                  <a
                    href="yourname"
                    target="_blank"
                    class="social-content__list-item"
                  >
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

                    Instagram

                    <svg
                      class="social-content__icon-2"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0422 8.92187L6.41716 14.5469C6.37484 14.5913 6.32394 14.6267 6.26753 14.6509C6.21113 14.675 6.1504 14.6875 6.08904 14.6875C6.02767 14.6875 5.96695 14.675 5.91054 14.6509C5.85414 14.6267 5.80323 14.5913 5.76091 14.5469L0.135914 8.92187C0.0488896 8.83485 -9.16948e-10 8.71682 0 8.59375C9.16949e-10 8.47068 0.0488896 8.35265 0.135914 8.26563C0.222938 8.1786 0.340968 8.12971 0.464039 8.12971C0.58711 8.12971 0.70514 8.1786 0.792164 8.26563L5.62029 13.0859V0.46875C5.62029 0.34443 5.66968 0.225201 5.75758 0.137294C5.84549 0.049386 5.96472 0 6.08904 0C6.21336 0 6.33259 0.049386 6.4205 0.137294C6.5084 0.225201 6.55779 0.34443 6.55779 0.46875V13.0859L11.3859 8.26563C11.4729 8.1786 11.591 8.12971 11.714 8.12971C11.8371 8.12971 11.9551 8.1786 12.0422 8.26563C12.1292 8.35265 12.1781 8.47068 12.1781 8.59375C12.1781 8.71682 12.1292 8.83485 12.0422 8.92187Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="yourname"
                    target="_blank"
                    class="social-content__list-item"
                  >
                    <svg
                      class="social-content__icon-1"
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

                    Twitter

                    <svg
                      class="social-content__icon-2"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0422 8.92187L6.41716 14.5469C6.37484 14.5913 6.32394 14.6267 6.26753 14.6509C6.21113 14.675 6.1504 14.6875 6.08904 14.6875C6.02767 14.6875 5.96695 14.675 5.91054 14.6509C5.85414 14.6267 5.80323 14.5913 5.76091 14.5469L0.135914 8.92187C0.0488896 8.83485 -9.16948e-10 8.71682 0 8.59375C9.16949e-10 8.47068 0.0488896 8.35265 0.135914 8.26563C0.222938 8.1786 0.340968 8.12971 0.464039 8.12971C0.58711 8.12971 0.70514 8.1786 0.792164 8.26563L5.62029 13.0859V0.46875C5.62029 0.34443 5.66968 0.225201 5.75758 0.137294C5.84549 0.049386 5.96472 0 6.08904 0C6.21336 0 6.33259 0.049386 6.4205 0.137294C6.5084 0.225201 6.55779 0.34443 6.55779 0.46875V13.0859L11.3859 8.26563C11.4729 8.1786 11.591 8.12971 11.714 8.12971C11.8371 8.12971 11.9551 8.1786 12.0422 8.26563C12.1292 8.35265 12.1781 8.47068 12.1781 8.59375C12.1781 8.71682 12.1292 8.83485 12.0422 8.92187Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="yourname"
                    target="_blank"
                    class="social-content__list-item"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.125 9.5625C19.125 7.67122 18.5642 5.82241 17.5134 4.24986C16.4627 2.67732 14.9692 1.45167 13.2219 0.727906C11.4746 0.00414312 9.5519 -0.185226 7.69695 0.183745C5.84201 0.552716 4.13814 1.46346 2.8008 2.8008C1.46346 4.13814 0.552716 5.84201 0.183745 7.69695C-0.185226 9.5519 0.00414312 11.4746 0.727906 13.2219C1.45167 14.9692 2.67732 16.4627 4.24986 17.5134C5.82241 18.5642 7.67122 19.125 9.5625 19.125C12.0979 19.1225 14.5287 18.1143 16.3215 16.3215C18.1143 14.5287 19.1225 12.0979 19.125 9.5625ZM10.125 17.9813V11.625H12.5625C12.7117 11.625 12.8548 11.5657 12.9603 11.4603C13.0657 11.3548 13.125 11.2117 13.125 11.0625C13.125 10.9133 13.0657 10.7702 12.9603 10.6648C12.8548 10.5593 12.7117 10.5 12.5625 10.5H10.125V8.0625C10.1275 7.61571 10.306 7.18792 10.622 6.87198C10.9379 6.55605 11.3657 6.37747 11.8125 6.375H13.3125C13.4617 6.375 13.6048 6.31574 13.7103 6.21025C13.8157 6.10476 13.875 5.96169 13.875 5.8125C13.875 5.66332 13.8157 5.52025 13.7103 5.41476C13.6048 5.30927 13.4617 5.25 13.3125 5.25H11.8125C11.0673 5.25248 10.3534 5.54959 9.8265 6.0765C9.29959 6.60341 9.00248 7.31734 9 8.0625V10.5H6.5625C6.41332 10.5 6.27025 10.5593 6.16476 10.6648C6.05927 10.7702 6 10.9133 6 11.0625C6 11.2117 6.05927 11.3548 6.16476 11.4603C6.27025 11.5657 6.41332 11.625 6.5625 11.625H9V17.9813C6.81584 17.8353 4.77388 16.8462 3.30535 15.2229C1.83682 13.5995 1.05669 11.4689 1.1297 9.28112C1.20271 7.0933 2.12314 5.01949 3.69663 3.49764C5.27011 1.97578 7.37347 1.12503 9.5625 1.12503C11.7515 1.12503 13.8549 1.97578 15.4284 3.49764C17.0019 5.01949 17.9223 7.0933 17.9953 9.28112C18.0683 11.4689 17.2882 13.5995 15.8197 15.2229C14.3511 16.8462 12.3092 17.8353 10.125 17.9813Z"
                      />
                    </svg>

                    Facebook

                    <svg
                      class="social-content__icon-2"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0422 8.92187L6.41716 14.5469C6.37484 14.5913 6.32394 14.6267 6.26753 14.6509C6.21113 14.675 6.1504 14.6875 6.08904 14.6875C6.02767 14.6875 5.96695 14.675 5.91054 14.6509C5.85414 14.6267 5.80323 14.5913 5.76091 14.5469L0.135914 8.92187C0.0488896 8.83485 -9.16948e-10 8.71682 0 8.59375C9.16949e-10 8.47068 0.0488896 8.35265 0.135914 8.26563C0.222938 8.1786 0.340968 8.12971 0.464039 8.12971C0.58711 8.12971 0.70514 8.1786 0.792164 8.26563L5.62029 13.0859V0.46875C5.62029 0.34443 5.66968 0.225201 5.75758 0.137294C5.84549 0.049386 5.96472 0 6.08904 0C6.21336 0 6.33259 0.049386 6.4205 0.137294C6.5084 0.225201 6.55779 0.34443 6.55779 0.46875V13.0859L11.3859 8.26563C11.4729 8.1786 11.591 8.12971 11.714 8.12971C11.8371 8.12971 11.9551 8.1786 12.0422 8.26563C12.1292 8.35265 12.1781 8.47068 12.1781 8.59375C12.1781 8.71682 12.1292 8.83485 12.0422 8.92187Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="related-blogpage">
          <div class="related-blogpage__container">
            <WidgetHeader titleone="Related" titletwo="News" link="See all" />

            <div class="related-blogpage__items">
              <CardBlog
                v-for="post in blogPosts.slice(0, 3)"
                :key="post.id"
                :blog="post"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Line />
</template>
