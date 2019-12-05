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
    "A backwards poet writes inverse.",
    "A bicycle can't stand on its own because it's two-tired.",
    "A book just fell on my head. I've only got my shelf to blame.",
    "A cardboard belt would be a waist of paper.",
    "A crazy person who steals trains must have some locomotives.",
    "Acupuncture is a jab well done.",
    "Atheism is a non-prophet organisation.",
    "Bakers trade recipes on a knead to know basis.",
    "Being the owner of a vacuum cleaner company must suck.",
    "Books about anti-gravity are impossible to put down.",
    "Did you hear about the Italian chef? he pasta way.",
    "Did you know that the people of Dubai don't like the Flintstones? But Abu Dhabi do!",
    "Don't trust people that do acupuncture, they're back stabbers.",
    "Do you know what kind of tea is sometimes hard to swallow? Reali-tea.",
    "England doesn't have a kidney bank, but it has a Liverpool.",
    "Have you ever tried to eat a clock? It's very time consuming.",
    "Having sex on an elevator is wrong on so many levels.",
    "How did the people behind the latest hack escape? They ransomware.",
    "How do you kill a vegan vampire? Put a steak through its heart.",
    "I'm so poor I can't even pay attention.",
    "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
    "I don't like using calendars. It feels like my days are numbered.",
    "I don't play soccer because I enjoy it, I play soccer for the kicks.",
    "I don't trust staircases, they're always up to something.",
    "If a clock gets hungry, it goes back four seconds.",
    "If a flower shop catches fire, would that be a florist fire?",
    "If I'm a parent of Transformers, am I transparent?",
    "If I eat cereal, does that make me a cereal killer?",
    "If I run behind a car, will I be exhausted?",
    "If I run in front of a car, will I be tired?",
    "If I throw a cigarette away, do I get a cigarette lighter?",
    "If money doesn't grow on trees, how come banks have branches?",
    "If someone steals my mug, is that considered a mugging?",
    "If William Shakespeare had a pencil, he would wonder if it's 2B or not 2B.",
    "I made a belt with watches, it was a waist of time.",
    "I used to be addicted to soap, but now I'm clean.",
    "I used to build stairs for a living, business was up and down.",
    "I used to crush cans for a living. It was soda pressing.",
    "I used to own a bakery, but then business went toast.",
    "I used to work as a lumberjack, but then I got axed.",
    "I used to work at a blanket factory, but then it folded.",
    "I used to work at a calendar factory, but I got fired for taking a day off.",
    "I used to work at an orange juice factory, but I got canned cause I couldn't concentrate.",
    "I used to work in a bank, but then I lost interest.",
    "I was going to make a pun about my TV controller, but it wasn't remotely funny.",
    "I wondered why the baseball was getting bigger. Then it hit me.",
    "Jill hurt her finger, but on the other hand, she's fine.",
    "Never marry a tennis player, love means nothing to them.",
    "Police were called to the kindergarten because a child was resisting a rest.",
    "Programmers hate nature because it has too many bugs.",
    "Puns about giant squids always kraken me up.",
    "Puns about monorail always make for decent one-liners.",
    "Puns about sausages are the wurst.",
    "Sleeping comes naturally to me, I can do it with my eyes closed.",
    "The cross-eyed teacher couldn't control her pupils.",
    "The magician got so mad he pulled his hare out.",
    "The man that invented the door knock won the Nobel prize.",
    "The man who fell onto an upholstery machine was fully recovered.",
    "The man who lost both his left arm and leg is all right now.",
    "The man who stole my diary just died. My thoughts are with his family.",
    "The new movie called Constipation hasn't come out yet.",
    "The past, present and future walks into the bar. It was tense.",
    "The scarecrow got promoted because it was outstanding in its field.",
    "The smell of a Deli could make you crave for a sandwich sub-consciously.",
    "They were giving away dead batteries free of charge.",
    "Time flies like an arrow; fruit flies like a banana.",
    "Two giraffes were in a race. They were neck and neck.",
    "Two peanuts were walking in a tough neighborhood, and one of them was a-salt-ted.",
    "What did the duck say to the bartender? Put it on my bill.",
    "What do vegan zombies eat? Grraaainnsss.",
    "What do you call a tree that grows on your palm? A palm tree.",
    "What do you call it when a chickpea gets killed? Hummuside.",
    "What do you get from a pampered cow? Spoiled milk.",
    "What is the one type of person that will never get angry? A Nomad.",
    "What vegetable do pirates love to eat? Arrrr-tichokes.",
    "When Peter Pan punches, they Neverland.",
    "Whiteboards are remarkable.",
    "Why did the pig stop sunbathing? He was bacon in the heat.",
    "Why did the tomato blush? Because it saw the salad dressing.",
    "Yesterday I swallowed food coloring, I dyed a little on the inside."
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}

startType(getRandomPun(), 0);