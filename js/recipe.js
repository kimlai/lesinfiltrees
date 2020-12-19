const recipe = {
  bug: document.getElementById("recipe_bug").value,
  ginger: document.getElementById("recipe_ginger").value,
  sugar: document.getElementById("recipe_sugar").value,
  lemon: document.getElementById("recipe_lemon").value,
  water: 1000
};

document.getElementById("submit_bottles").addEventListener("click", e => {
  e.preventDefault();
  const bottleCount = document.getElementById("batch_bottle_count").value;
  const bottleCapEl = document.getElementById("batch_bottle_capacity");
  const bottleCapacity = bottleCapEl.options[bottleCapEl.selectedIndex].value;
  const total = bottleCount * bottleCapacity;

  compute({ name: "water", value: total });
});

document.getElementById("submit_water").addEventListener("click", e => {
  e.preventDefault();
  compute({
    name: "water",
    value: document.getElementById("batch_water").value * 1000
  });
});

document.getElementById("submit_ginger").addEventListener("click", e => {
  e.preventDefault();
  compute({
    name: "ginger",
    value: document.getElementById("batch_ginger").value
  });
});

document.getElementById("submit_sugar").addEventListener("click", e => {
  e.preventDefault();
  compute({
    name: "sugar",
    value: document.getElementById("batch_sugar").value
  });
});

const compute = varyingIngredient => {
  for (let ingredient in recipe) {
    const element = document.getElementById(`result_${ingredient}`);
    element.innerHTML = Math.round(
      (varyingIngredient.value * recipe[ingredient]) /
        recipe[varyingIngredient.name]
    );
  }
};
