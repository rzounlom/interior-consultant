function toggleMobileNav() {
  const mobileNav = document.querySelector(".mobile-nav");

  if (!mobileNav.classList[1]) {
    mobileNav.classList.add("show");
  } else {
    mobileNav.classList.remove("show");
  }
}
