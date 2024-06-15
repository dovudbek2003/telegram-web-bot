const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-btn");

closeBtn.onclick = () => {
  popupContainer.classList.remove("active");
};
