document.addEventListener("DOMContentLoaded", start);
async function start() {

    let response = await fetch("mosaic-procreate.svg");
    let mySvgData = await response.text();

    document.querySelector("section").innerHTML = mySvgData;
    ManipulateSVG();
}

document.querySelectorAll(".color_box").forEach(box => box.style.backgroundColor = box.dataset.color);
document.querySelectorAll(".color_box").forEach(box => box.addEventListener("click", ChangeSelectedColor));

const selected = document.querySelector("#selected");

function ManipulateSVG() {
    document.querySelectorAll("path").forEach(path => path.setAttribute("fill", "white"));
    document.querySelectorAll("path").forEach(path => path.setAttribute("stroke", "black"));
    document.querySelectorAll("path").forEach(path => path.addEventListener("click", FillthePath));

}

function ChangeSelectedColor() {

    console.log(this.dataset.color);
    selected.style.backgroundColor = this.dataset.color;
}

function FillthePath() {
    this.setAttribute("fill", selected.style.backgroundColor);
}