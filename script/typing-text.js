document.addEventListener("DOMContentLoaded", function () {
  const typingTexts = document.querySelectorAll(".typing-effect");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function handleScroll() {
    typingTexts.forEach((typingText) => {
      if (isElementInViewport(typingText)) {
        typingText.classList.add("animate-typing");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});
