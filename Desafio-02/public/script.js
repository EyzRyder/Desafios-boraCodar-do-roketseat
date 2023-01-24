let btn = document.getElementById("toggle");
let produtoImg = document.getElementById("produto");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
        btn.src = "./assets/Close stroke.svg"
        produtoImg.src = "./assets/sofa.gif";
    } else {
        btn.src = "./assets/360.svg"
        produtoImg.src = "./assets/sofa.png";
    }
})