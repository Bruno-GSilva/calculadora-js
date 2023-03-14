const phone = document.getElementById('iphone')

printScreen = (value) => {
  const screen = document.getElementById("screen");
  screen.innerHTML == "0"?screen.innerHTML = "":console.log("error")
  screen.innerHTML += value;
};

delScreen = (value) => {
  const screen = document.getElementById("screen");
  value === "del"?screen.innerHTML = screen.innerHTML.slice(0, -1):console.log('nada para apagar')
};

eraseScreen = (value) => {
  const screen = document.getElementById("screen");
  value === "ac"?screen.innerHTML = "":value === "ce"?
    screen.innerHTML = screen.innerHTML.slice(0, -1):console.log("error")
};

resultScreen = () => {
  const screen = document.getElementById("screen");
  if(screen.innerHTML === "853140"){
    phone.style.animation = "rotate infinite 1.5s"
  }
  const result = eval(screen.innerHTML);
  screen.innerHTML = result;
};