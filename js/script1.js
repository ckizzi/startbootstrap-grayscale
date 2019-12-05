let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function() {
      startType(pun, index);
    }, 50);
  } else {
    setTimeout(function() {
      element.classList.add("highlight");
    }, 1000);

    setTimeout(function() {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0);
    }, 2500);
  }
}

function getRandomPun() {
  const puns = [
   "Hi I'm Ckrizzi. I love tea.",
    "Hi I'm Ckrizzi. I love hojicha.",
    "Hi I'm Ckrizzi. I love ramen.",
    "Hi I'm Ckrizzi. I love illustrating.",
    "Hi I'm Ckrizzi. I like film making.",
    "Hi I'm Ckrizzi. I love portraits.", 
	"Hi I'm Ckrizzi. I love photography.",
    "Hi I'm Ckrizzi. I love colours.",
    "Hi I'm Ckrizzi. I love art.",
    "Hi I'm Ckrizzi. I love sketching.",
	   "Hi I'm Ckrizzi. Hire me!!!",
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}

startType(getRandomPun(), 0);