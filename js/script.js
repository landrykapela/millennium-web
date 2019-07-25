const aboutLink = document.getElementById("about");
const contactLink = document.getElementById("contact");
const container = document.getElementById("container");
const contactDetails = document.getElementById("contact-details");
const aboutContent = document.getElementById("about-content");
const close = document.getElementById("close");
if (contactLink) {
  contactLink.addEventListener("click", () => {
    container.classList.remove("hidden");
    container.classList.add("inactive");
    contactDetails.classList.remove("fadeOut");
    contactDetails.classList.add("fadeIn");
  });
}
if (aboutLink) {
  aboutLink.addEventListener("click", () => {
    aboutContent.classList.remove("hidden");
    aboutContent.classList.add("fadeIn");
  });
}
if (close) {
  close.addEventListener("click", () => {
    contactDetails.classList.remove("fadeIn");
    contactDetails.classList.add("fadeOut");
    setTimeout(() => {
      container.classList.remove("inactive");
      container.classList.add("hidden");
    }, 1000);
  });
}
