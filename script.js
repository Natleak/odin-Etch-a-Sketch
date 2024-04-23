// let gridSlider = document.querySelector(".grid_slider");
// let gridValue = document.querySelector(".grid_value");
// gridValue.textContent = gridSlider.value;

// gridSlider.oninput = function () {
//   gridValue.textContent = this.value;
// };

let gridSlider = document.querySelector(".grid_slider");
let gridValue = document.querySelectorAll(".grid_value");
for (let i = 0; i < gridValue.length; i++) {
  gridValue[i].textContent = gridSlider.value;
}

gridSlider.oninput = function () {
  for (let i = 0; i < gridValue.length; i++) {
    gridValue[i].textContent = this.value;
  }
};
