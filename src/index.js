let themeCheckbox = document.querySelector("#theme");
themeCheckbox.addEventListener("change", (e) => {
  let body = document.body;

  if (themeCheckbox.checked) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
});
