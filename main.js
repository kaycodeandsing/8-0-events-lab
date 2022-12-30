// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let activePenTool= false
const currentColor = document.getElementById("current-color");
const palleteColor = document.querySelectorAll(".color");
palleteColor.forEach(color => {
  color.addEventListener("click", (event) => {
 currentColor.style.background = event.target.style.backgroundColor; 
  });
});

const cellsInMain = document.querySelectorAll(".cell");

cellsInMain.forEach((cell) => {
  cell.addEventListener("mouseover", draw); 
  cell.addEventListener("dblclick", erase);
  cell.addEventListener("click", togglePen);
});

function erase(event) {
  event.target.style.background = "white";
}

function draw(){
  if(activePenTool){
    this.style.backgroundColor = currentColor.style.backgroundColor;
  }
}

function togglePen(event){
  if(!activePenTool){
    activePenTool = true;
  } else {
    activePenTool = false;
  }
}

const eraseEverything = document.createElement("div");
eraseEverything.classList.add("color");
eraseEverything.style.cssText = "border-radius: 10px; position: absolute; background: silver; ";
eraseEverything.innerText = "Erase";

const palette = document.querySelector("#palette");
palette.append(eraseEverything);

eraseEverything.addEventListener("click", () => {
  cellsInMain.forEach((cell) => {
    cell.style.background = "white";
  });
});
