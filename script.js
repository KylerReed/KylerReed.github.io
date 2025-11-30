const button = document.getElementById("theme-toggle");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
});

