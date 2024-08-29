document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-mode-toggle");
  const circle = document.getElementById("toggle-circle");

  // Function to apply dark mode based on the toggle state
  function applyDarkMode(isDark) {
    if (isDark) {
      document.body.classList.add("dark");
      circle.style.transform = "translateX(100%)";
    } else {
      document.body.classList.remove("dark");
      circle.style.transform = "translateX(0)";
    }
  }

  // Initialize the toggle based on the current theme
  const isDarkMode = localStorage.getItem("dark-mode") === "true";
  toggle.checked = isDarkMode;
  applyDarkMode(isDarkMode);

  // Event listener for the toggle switch
  toggle.addEventListener("change", () => {
    const isDark = toggle.checked;
    localStorage.setItem("dark-mode", isDark);
    applyDarkMode(isDark);
  });
});
