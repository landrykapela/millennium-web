const aboutLink = document.getElementById("about");
const serviceLink = document.getElementById("service");
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
if (serviceLink) {
  serviceLink.addEventListener("click", () => {
    createToast("This page is not completed yet", 4);
  });
}
const createToast = (message, timeInSecs) => {
  const body = document.body;
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;
  const style = document.createElement("style");
  style.type = "text/css";
  let innerHTML =
    ".fadeInOut{ animation-name: fadeInOut;animation-duration:" +
    timeInSecs +
    "s;animation-direction: forwards;animation-timing-function: linear;}";
  style.innerHTML = innerHTML;
  document.head.appendChild(style);
  toast.classList.add("fadeInOut");
  body.appendChild(toast);
};
