window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key=${e.key}`);
  const key = document.querySelector(`.key[data-key=${e.key}]`);
  const lastKey = document.querySelector("#LKEY");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  lastKey.innerHTML = `<h2 style="text-align:center; color:yellow">${e.key.toUpperCase()}</h2>`;
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((element) =>
  element.addEventListener("transitionend", removeTransition)
);