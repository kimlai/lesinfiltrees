const BUBBLE_COUNT = 100;

const randomInt = max => Math.floor(Math.random() * Math.floor(max));

for (let i = 0; i < BUBBLE_COUNT; i++) {
  const element = document.createElement("div");
  element.classList.add("bubble");
  element.style.bottom = `${randomInt(20) * -1}px`;
  element.style.left = `${20 + randomInt(12)}rem`;
  element.style.width = `${5 + randomInt(5)}px`;
  element.style.height = `${5 + randomInt(10)}px`;
  element.style["animation-delay"] = `${randomInt(500)}ms`;
  element.style["animation-duration"] = `${450 + randomInt(50)}ms`;
  element.style.setProperty("--translateX", `${-3 + randomInt(6)}px`);

  document.body.appendChild(element);
}
