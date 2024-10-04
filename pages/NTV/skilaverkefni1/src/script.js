const dropdownHoverButton = document.getElementById("dropdownHoverButton");
const dropdownMenu = document.getElementById("dropdownHover");

dropdownHoverButton.addEventListener("mouseover", () => {
  dropdownMenu.classList.remove("hidden");
});

dropdownHoverButton.addEventListener("mouseleave", () => {
  dropdownMenu.classList.add("hidden");
});

dropdownMenu.addEventListener("mouseover", () => {
  dropdownMenu.classList.remove("hidden");
});

dropdownMenu.addEventListener("mouseleave", () => {
  dropdownMenu.classList.add("hidden");
});
