let yesSize = 18;

function moveNoButton() {
  const noBtn = document.querySelector(".no");
  const yesBtn = document.querySelector(".yes");

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  yesSize += 4;
  yesBtn.style.fontSize = yesSize + "px";
}

function startMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}

function sayYes() {
  if (navigator.vibrate) {
    navigator.vibrate([200,100,200]);
  }

  document.body.style.background = "#ff4d94";
  setTimeout(() => {
    document.body.style.background =
      "linear-gradient(135deg, #ff9ecf, #ffc3e0)";
  }, 300);

  const container = document.getElementById("mainContent");
  container.innerHTML = `
    <h1 style="font-size:45px; color:white;">
      YAYYYYYY 😭💖
    </h1>
    <h2 style="color:white;">
      You just made me the happiest person alive 💕
    </h2>
  `;

  heartShower();
  playPop();
}

function heartShower() {
  for (let i = 0; i < 200; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "fall 3s linear forwards";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

function playPop() {
  const pop = new Audio("pop.mp3");
  pop.play();
}
