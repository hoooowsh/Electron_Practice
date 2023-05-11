const testButton = document.getElementById("testButton");
const resultDiv = document.getElementById("result");
const axios = require("axios");
require("dotenv").config();
const BACKEND_URL = process.env.BACKEND_URL;

testButton.addEventListener("click", async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/test`);
    console.log(res);
    displayData(res.data);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  const titleElement = document.createElement("h3");
  titleElement.textContent = data;
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = data;

  resultDiv.innerHTML = "";
  resultDiv.appendChild(titleElement);
  resultDiv.appendChild(descriptionElement);
}
