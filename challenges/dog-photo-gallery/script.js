const button = document.createElement("button");
button.innerHTML = "Show me a dog!";
document.body.appendChild(button);

let element = document.createElement("ul");
document.body.appendChild(element);

button.addEventListener("click", getAPicture);

let list = document.createElement("li");
let image = document.createElement("img");

async function getAPicture() {
  try {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let dogURL = await response.json();
    image.src = dogURL.message;
    list.appendChild(image);
    element.appendChild(list);
  } catch (err) {
    console.log("Error");
  }
}
