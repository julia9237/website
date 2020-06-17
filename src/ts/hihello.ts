const hihelloGen = new Worker('hihello.ts');

const intID = window.setInterval(hihelloSpam, 500);

function hihelloSpam() {
  const body = document.getElementsByTagName("body")[0];
  switch(Math.floor(Math.random() * 2) + 1) {
    case 1:
      body.innerHTML += "hi<br>";
      break;
    case 2:
      body.innerHTML += "hello<br>";
      break;
  };
  return;
};