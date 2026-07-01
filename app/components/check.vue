<style scoped>
/* ============================================
   FOOTER ACCORDION — Fully Responsive
   ============================================ */

/* --- BASE STYLES (Applies to all screens) --- */

/* 1. Style the titles as interactive buttons */
.pages-footer__title,
.cms-footer__title,
.utility-footer__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  margin: 0;
  font-size: 1rem; /* Adjust to match your design */
  font-weight: 600;
  color: #fff; /* Adjust to match your design */
  user-select: none;
  transition: color 0.2s ease;
}

/* 2. The "+" icon — visible only on mobile (hidden on desktop via media query) */
.pages-footer__title::after,
.cms-footer__title::after,
.utility-footer__title::after {
  content: "+";
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1;
  color: #dac5a7;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 12px;
  flex-shrink: 0;
}

/* 3. Rotate "+" to "×" when section is open */
.pages-footer.is-open .pages-footer__title::after,
.cms-footer.is-open .cms-footer__title::after,
.utility-footer.is-open .utility-footer__title::after {
  transform: rotate(45deg);
}

/* 4. List styling (shared) */
.accordion__list,
.cms-footer__list,
.utility-footer__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* 5. Link styling inside lists */
.pages-footer__link,
.cms-footer__link,
.utility-footer__link {
  display: block;
  padding: 8px 0;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition:
    color 0.2s ease,
    padding-left 0.2s ease;
}

.pages-footer__link:hover,
.cms-footer__link:hover,
.utility-footer__link:hover {
  color: #fff;
  padding-left: 4px;
}

/* 6. Keyboard focus styles (for the custom buttons) */
.pages-footer__title:focus-visible,
.cms-footer__title:focus-visible,
.utility-footer__title:focus-visible {
  outline: 2px solid #dac5a7;
  outline-offset: 4px;
  border-radius: 4px;
}

/* ============================================
   DESKTOP (≥ 769px) — Always open, accordion disabled
   ============================================ */
@media (min-width: 769px) {
  /* 1. Force lists to ALWAYS be visible */
  .accordion__list,
  .cms-footer__list,
  .utility-footer__list {
    display: block !important;
    max-height: none !important;
    opacity: 1 !important;
    overflow: visible !important;
    margin-top: 12px;
    padding-top: 0;
  }

  /* 2. Hide the "+" icon on desktop */
  .pages-footer__title::after,
  .cms-footer__title::after,
  .utility-footer__title::after {
    display: none !important;
  }

  /* 3. Remove click styles on desktop */
  .pages-footer__title,
  .cms-footer__title,
  .utility-footer__title {
    cursor: default;
    border-bottom: none;
    padding-bottom: 6px;
  }

  /* 4. Remove bottom border on desktop (if you added one on mobile) */
  .pages-footer,
  .cms-footer,
  .utility-footer {
    border-bottom: none;
  }
}

/* ============================================
   MOBILE (≤ 768.98px) — Smooth accordion enabled
   ============================================ */
@media (max-width: 768.98px) {
  /* 1. Add a visual separator between sections */
  .pages-footer,
  .cms-footer,
  .utility-footer {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* 2. Style the titles as clickable */
  .pages-footer__title,
  .cms-footer__title,
  .utility-footer__title {
    cursor: pointer;
    padding: 14px 0;
    font-size: 1rem;
    border-bottom: none; /* Handled by the parent border above */
  }

  /* 3. Hide the lists by default (collapsed) */
  .accordion__list,
  .cms-footer__list,
  .utility-footer__list {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    margin-top: 0;
    padding-top: 0;
    transition:
      max-height 1s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 1.5s ease 0.05s,
      margin-top 1s ease,
      padding-top 1s ease;
  }

  /* 4. Show the lists when parent has 'is-open' class */
  .pages-footer.is-open .accordion__list,
  .cms-footer.is-open .cms-footer__list,
  .utility-footer.is-open .utility-footer__list {
    max-height: 500px; /* Must be larger than your actual content (4-5 links ≈ 200px) */
    opacity: 1;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 0px;
    background-color: rgba(221, 214, 214, 0.7);
  }

  /* 5. Slight indent for links on mobile (optional) */
  .pages-footer__link,
  .cms-footer__link,
  .utility-footer__link {
    padding: 00px 0 0 0px 0px;
    font-size: 0.95rem;
  }
}

/* ============================================
   EXTRA: When JavaScript is disabled (fallback)
   ============================================ */
/* If JS fails, the accordion won't toggle — but that's fine.
   The lists will stay visible because we never add 'is-open'.
   On mobile, this means lists are HIDDEN. 
   To be safe, you could add a .no-js fallback, but it's overkill for most projects. */
</style>
