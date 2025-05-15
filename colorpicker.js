document.addEventListener("DOMContentLoaded", () => {
  const colorInput = document.getElementById("colorInput");
  const colorValue = document.getElementById("colorValue");

  colorInput.addEventListener("input", () => {
    colorValue.textContent = colorInput.value;
  });
});
