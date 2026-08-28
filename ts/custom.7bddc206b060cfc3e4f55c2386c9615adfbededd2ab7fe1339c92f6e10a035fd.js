(() => {
  // <stdin>
  var scrollToTop = document.querySelector(".scroll-to-top");
  if (scrollToTop) {
    const updateVisibility = () => {
      scrollToTop.classList.toggle("is-visible", window.scrollY > 300);
    };
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
