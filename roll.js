//Variables Defined
var rollDisplay = document.querySelector("#rollDisplay");
var rollButton = document.querySelector("#rollButton");
var numInput = document.querySelector("#numInput");
var maxRoll = 6;
var rollDisplayValue;

//Functions Defined
function randomRoll() {
  return Math.floor(Math.random() * maxRoll + 1);
}

numInput.addEventListener("change", function() {
  maxRoll = Number(this.value);
});

rollButton.addEventListener("click", function() {
  rollDisplay.classList.remove("criticalFailure", "criticalHit");
  rollDisplayValue = randomRoll();
  if (rollDisplayValue === 1) {
    rollDisplayValue += " - Critical Failure!";
    rollDisplay.classList.add("criticalFailure");
  }
  if (rollDisplayValue === maxRoll) {
    rollDisplayValue += " - Critical Hit!";
    rollDisplay.classList.add("criticalHit");
  }
  rollDisplay.textContent = rollDisplayValue;
});
