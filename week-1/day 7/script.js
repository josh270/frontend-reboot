const modal = document.getElementById("modal");
const openButtons = document.querySelectorAll("#open-modal, #open-modal-hero");
const closeButton = document.getElementById("close-modal");

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
