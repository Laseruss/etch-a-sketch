
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row")
  row.id = i;
  document.querySelector(".grid").appendChild(row);
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("col");
    document.getElementById(i).appendChild(cell);
  }
}

const pickRand = () => {
  return Math.floor(Math.random() * 255)
}

document.querySelectorAll(".col").forEach(item => {
  item.addEventListener("mouseover", e => {
    const el = e.target;
    const randColor = `rgb(${pickRand()}, ${pickRand()}, ${pickRand()})`;
    el.style.background = randColor;
  })
})
