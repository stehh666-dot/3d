const uploadLogo = document.getElementById("uploadLogo");
const colorButtons = document.querySelectorAll(".color-btn");

// Subir logo
uploadLogo.addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const logos = document.querySelectorAll(".logo");
    logos.forEach(logo => {
      logo.src = event.target.result;
      logo.style.display = "block";
    });
  };
  reader.readAsDataURL(file);
});

// Cambiar color playera
colorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color;
    const tshirts = document.querySelectorAll(".tshirt img:first-child");

    tshirts.forEach(tshirt => {
      tshirt.className = color; // aplica clase del color
    });
  });
});
