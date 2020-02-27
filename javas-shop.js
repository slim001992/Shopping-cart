const fas = Array.from(document.querySelectorAll(".fa-heart"));
for (let el of fas)
  el.addEventListener("click", () => {
    el.classList.toggle("fat");
  });

let qte = Array.from(document.querySelectorAll(".num"));
let btnplus = Array.from(document.querySelectorAll(".plus"));
let btnminus = Array.from(document.querySelectorAll(".minus"));
let price = Array.from(document.querySelectorAll(".price"));
let tot = document.querySelector(".tota");

function deleteRow(event) {
  event.preventDefault();
  console.log(event);
  var i = event.target.parentNode.parentNode.rowIndex;
  qte[i - 1].innerText = 0;
  document.getElementById("table").deleteRow(i);
  total();
}

const removeBtn = Array.from(document.querySelectorAll(".deleteDep"));
for (let el of removeBtn) {
  el.addEventListener("click", deleteRow);
}

for (let el of btnplus)
  el.addEventListener("click", () => {
    el.nextElementSibling.innerText =
      Number(el.nextElementSibling.innerText) + 1;
    total();
  });

for (let lk of btnminus)
  lk.addEventListener("click", () => {
    if (Number(lk.previousElementSibling.innerHTML > 0))
      lk.previousElementSibling.innerText =
        Number(lk.previousElementSibling.innerText) - 1;
    total();
  });

const total = () => {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += qte[i].innerHTML * price[i].innerHTML;
  }
  tot.innerText = sum;
};
