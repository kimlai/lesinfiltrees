const BUBBLE_COUNT = 80;

const randomInt = max => Math.floor(Math.random() * Math.floor(max));

for (let i = 0; i < BUBBLE_COUNT; i++) {
  const element = document.createElement("div");
  element.classList.add("bubble");
  element.style.bottom = `${randomInt(20) * -1}px`;
  element.style.left = `${18 + randomInt(12)}rem`;
  const width = 4 + randomInt(4);
  element.style.width = `${width}px`;
  element.style.height = `${width + randomInt(6)}px`;
  element.style["animation-delay"] = `${randomInt(500)}ms`;
  element.style["animation-duration"] = `${450 + randomInt(100)}ms`;
  element.style.setProperty("--translateX", `${-3 + randomInt(6)}px`);

  document.body.appendChild(element);
}
