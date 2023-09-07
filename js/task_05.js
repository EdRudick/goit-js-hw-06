const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInputChange);

function onInputChange({ target: { value } }) {
  nameOutput.textContent = value || "Anonymous";
}

const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");
const placeholder = (event) => {
  outputName.textContent =
    inputName.value !== "" ? event.currentTarget.value : "Anonymous";
};
inputName.addEventListener("input", placeholder);
