// Initialize variables for counter, default step size, and limit
let counter = 0;
let step = 5;
let limit = 35;

// Load values from local Storage (if available)
if (localStorage.getItem("step")) step = parseInt(localStorage.getItem("step"));
if (localStorage.getItem("limit"))
  limit = parseInt(localStorage.getItem("limit"));

// Create all elements
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#f0f0f0";

// Create counter display
const counterDisplay = document.createElement("div");
counterDisplay.id = "counter";
counterDisplay.style.fontSize = "4rem";
counterDisplay.textContent = counter;
document.body.appendChild(counterDisplay);

// Create increment button
const incrementBtn = document.createElement("button");
incrementBtn.classList.add("button", "increment");
incrementBtn.style.fontSize = "2rem";
incrementBtn.style.margin = "1rem";
incrementBtn.style.padding = "1rem";
incrementBtn.style.border = "none";
incrementBtn.style.borderRadius = "8px";
incrementBtn.style.cursor = "pointer";
incrementBtn.style.backgroundColor = "#4CAF50";
incrementBtn.style.color = "white";
incrementBtn.textContent = "+";
document.body.appendChild(incrementBtn);

// Create decrement button
const decrementBtn = document.createElement("button");
decrementBtn.classList.add("button", "decrement");
decrementBtn.style.fontSize = "2rem";
decrementBtn.style.margin = "1rem";
decrementBtn.style.padding = "1rem";
decrementBtn.style.border = "none";
decrementBtn.style.borderRadius = "8px";
decrementBtn.style.cursor = "pointer";
decrementBtn.style.backgroundColor = "#f44336";
decrementBtn.style.color = "white";
decrementBtn.textContent = "-";
document.body.appendChild(decrementBtn);

// Create BOOM message
const boomMessage = document.createElement("div");
boomMessage.id = "boom-message";
boomMessage.style.display = "none";
boomMessage.style.fontSize = "3rem";
boomMessage.style.color = "purple";
boomMessage.style.fontWeight = "bold";
boomMessage.textContent = "BOOM!";
document.body.appendChild(boomMessage);

//(update counter and check for BOOM condition)
function updateCounter() {
  counterDisplay.textContent = counter;
  if (counter > limit || counter < -limit) {
    boomMessage.style.display = "block";
  } else {
    boomMessage.style.display = "none";
  }
}

// Increment & Decrement button click event
incrementBtn.addEventListener("click", function () {
  counter += step;
  updateCounter();
});

decrementBtn.addEventListener("click", function () {
  counter -= step;
  updateCounter();
});

// input for changing step size
const stepInput = document.createElement("input");
stepInput.type = "number";
stepInput.value = step;
stepInput.placeholder = "Step size";
stepInput.style.margin = "1rem";
stepInput.style.fontSize = "1.5rem";
document.body.appendChild(stepInput);

// input for changing limit
const limitInput = document.createElement("input");
limitInput.type = "number";
limitInput.value = limit;
limitInput.placeholder = "Limit";
limitInput.style.margin = "1rem";
limitInput.style.fontSize = "1.5rem";
document.body.appendChild(limitInput);

// Button to save new step and limit values
const saveBtn = document.createElement("button");
saveBtn.textContent = "Save Settings";
saveBtn.style.fontSize = "1.5rem";
saveBtn.style.margin = "1rem";
saveBtn.style.padding = "0.5rem";
saveBtn.style.cursor = "pointer";
document.body.appendChild(saveBtn);

// Save the input values to local Storage and update the variables
saveBtn.addEventListener("click", function () {
  step = parseInt(stepInput.value);
  limit = parseInt(limitInput.value);

  localStorage.setItem("step", step);
  localStorage.setItem("limit", limit);
});
