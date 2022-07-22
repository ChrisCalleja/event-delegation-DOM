// Not preferred #1
// Not scalable
// tedious
// repetitive

let counter = 0;
const counterText = document.querySelector(".counter");
const addBtn = document.querySelector(".add");
const list = document.querySelector(".list");

// const boxes = document.querySelectorAll(".box");

// const box1 = document.querySelector(".one");
// const box2 = document.querySelector(".two");
// const box3 = document.querySelector(".three");
// const box4 = document.querySelector(".four");

const addToCounter = () => {
  counter++;
  counterText.textContent = `Counter ${counter}`;
};

addBtn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.classList.add("box", "indigo");
  list.append(newLi);
});

// box1.addEventListener("click", addToCounter);

// box2.addEventListener("click", addToCounter);

// box3.addEventListener("click", addToCounter);

// box4.addEventListener("click", addToCounter);

//not preferred #2
//not scalable

// boxes.forEach((box) => {
//   box.addEventListener("click", addToCounter);
// });

//preferred - Event Delegation

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    addToCounter();
  }
});
