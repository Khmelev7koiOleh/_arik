import { onMounted, onBeforeUnmount, type Ref } from "vue";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

export const useParallax = (
  sectionRef: Ref<HTMLElement | null>,
  bgRef: Ref<HTMLElement | null>,
  speed: number = 0.5,
) => {
  let scrollTrigger: ScrollTriggerType | null = null;

  let gsapInstance: typeof import("gsap").default | null = null;

  let ScrollTriggerInstance:
    | typeof import("gsap/ScrollTrigger").ScrollTrigger
    | null = null;

  const init = async () => {
    const gsapModule = await import("gsap");
    const ScrollTriggerModule = await import("gsap/ScrollTrigger");

    gsapInstance = gsapModule.default;
    ScrollTriggerInstance = ScrollTriggerModule.ScrollTrigger;

    gsapInstance.registerPlugin(ScrollTriggerInstance);

    if (!sectionRef.value || !bgRef.value) return;

    const section = sectionRef.value;
    const bg = bgRef.value;

    const distance = section.clientHeight * speed;

    const anim = gsapInstance.fromTo(
      bg,
      { y: -distance / 2 },
      {
        y: distance / 2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      },
    );

    scrollTrigger = anim.scrollTrigger;
  };

  onMounted(() => {
    init();
  });

  onBeforeUnmount(() => {
    scrollTrigger?.kill();

    ScrollTriggerInstance?.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === sectionRef.value) {
        trigger.kill();
      }
    });
  });

  return {
    refresh: () => ScrollTriggerInstance?.refresh(),
  };
};
