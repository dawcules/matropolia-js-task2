//This page turns violet when you hold the V key

const balloonp = document.querySelector('p')



const resizeBalloon = (evt) => {
  evt.preventDefault();
  if (evt.key === "ArrowUp") {
    currentFontSize = parseFloat(window.getComputedStyle(balloonp, null).fontSize.replace("px", ""));
    console.log(currentFontSize);
    newsize = currentFontSize * 1.1;
    console.log("Koko on" + newsize);
    balloonp.style.fontSize = newsize + 'px';
    console.log("Ennen räjähdystä");
    if (parseFloat(window.getComputedStyle(balloonp, null).fontSize.replace("px", "")) > 50) {
      console.log("IF OK");
      balloonp.textContent = "💥";
      removeListener()

  }}

  if (evt.key === "ArrowDown") {
    currentFontSize = parseFloat(window.getComputedStyle(balloonp, null).fontSize.replace("px", ""));
    console.log(currentFontSize);
    newsize = currentFontSize * 0.9;
    console.log("Koko on" + newsize);
    balloonp.style.fontSize = newsize + 'px';
  }
};

function removeListener() {
  document.removeEventListener('keydown',resizeBalloon)
}

document.addEventListener("keydown", resizeBalloon);

const bank = [];
let cycle = 10;


for (i=0;i<10;i++) {

  console.log("tehdään" + i);
  const dot = document.createElement('div');
  dot.className = "trail";
  bank.push(dot);
};

 const dotter = (evt) => {
   evt.preventDefault();
   if (cycle == 11){
     cycle = 0
   }
   //const newdot = bank[cycle];
   cycle++;
   bank[cycle].style.top = evt.pageY+'px';
   bank[cycle].style.left = evt.pageX+'px';
   document.body.appendChild(bank[cycle]);
 };

 addEventListener('mousemove', dotter);
