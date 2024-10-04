document.addEventListener("DOMContentLoaded", function () {
  const dropdownHoverButton = document.getElementById("dropdownHoverButton");
  const dropdownMenu = document.getElementById("dropdownHover");

  // Show dropdown when hovering on the button
  dropdownHoverButton.addEventListener("mouseover", () => {
    dropdownMenu.classList.remove("hidden");
  });

  // Keep the dropdown visible when hovering over the menu
  dropdownMenu.addEventListener("mouseover", () => {
    dropdownMenu.classList.remove("hidden");
  });

  // Hide dropdown when mouse leaves both the button and the dropdown menu
  dropdownHoverButton.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!dropdownMenu.matches(":hover")) {
        dropdownMenu.classList.add("hidden");
      }
    }, 100); // Delay to allow cursor movement to the dropdown
  });

  dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.classList.add("hidden");
  });
});
