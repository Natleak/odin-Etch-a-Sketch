// -- grid slider with labels to know the range of the grid -- //

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
