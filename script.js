const fileInput = document.getElementById("fileInput");
const logo = document.getElementById("logoUsuario");
const playera = document.getElementById("playeraBase");

fileInput.addEventListener("change", function(){
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(e){
        logo.src = e.target.result;
    }

    reader.readAsDataURL(file);
});

function cambiarColor(color){
    if(color === "white"){
        playera.style.filter = "brightness(1.5)";
    }
    if(color === "black"){
        playera.style.filter = "brightness(0.5)";
    }
    if(color === "blue"){
        playera.style.filter = "hue-rotate(200deg)";
    }
    if(color === "red"){
        playera.style.filter = "hue-rotate(330deg) saturate(2)";
    }
}

