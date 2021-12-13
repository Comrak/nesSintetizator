window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  const key = document.querySelector(`.key[data-key=${e.key}]`);
  const lastKey = document.querySelector("#LKEY");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  lastKey.innerHTML = `<h2 style="text-align:center; color:yellow">${e.key.toUpperCase()}</h2>`;
});

let teclas = document.getElementsByClassName("keys");
for (const tecla of teclas) {
  tecla.onclick = (e) => {
    console.log(e.target.innerHTML);
    const audio = document.querySelector(
      `audio[data-key=${e.target.innerHTML.toLowerCase()}]`
    );
    const key = document.querySelector(
      `.key[data-key=${e.target.innerHTML.toLowerCase()}]`
    );
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  };
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((element) =>
  element.addEventListener("transitionend", removeTransition)
);
