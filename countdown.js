let display = " ";
for (let i = 0; i <= 10; i++) {
  display += `${10 - i}<br> `;
  console.log(i);
}

document.getElementById("display").innerHTML = display;
