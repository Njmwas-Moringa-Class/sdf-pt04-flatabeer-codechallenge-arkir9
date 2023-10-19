// Code here
const apiUrl = "http://localhost:3000";

function getAllBeers() {
  fetch(`${apiUrl}/beers`)
    .then((response) => response.json())
    .then((beers) => {
      document.getElementById("beer-list").innerHTML = beers
        .map(beer => `<li onClick='getAbeer(${beer.id})'>${beer.name}</li>`)
        .join("");
    });
}
function getAbeer(beerId) {
  fetch(`${apiUrl}/beers/${beerId}`)
    .then((response) => response.json())
    .then((beer) => {
      console.log(beer)
      document.getElementById("beer-name").innerHTML = beer.name;
      document.getElementById('beer-image').src = beer.image_url
      document.getElementById('beer-description').innerHTML = beer.description
      document.getElementById('review-list').innerHTML = beer.reviews.map(review => `<li>${review} </li>`).join('')
      
    });
}
document.addEventListener('DOMContentLoaded', ()=>{
  getAllBeers();
  getAbeer(1)
  document.querySelector('#review-form').addEventListener('submit',(e) => {
    e.preventDefault()
    newSubmit(e.target.review.value)
  })
  })
  const inputForm = document.querySelector("#description-form");
  inputForm.addEventListener("submit", (event) => {
   event.preventDefault()}
     )
function newSubmit(sub){
  let p = document.createElement('p')
  p.innerText = sub
  document.querySelector('#review-list').appendChild(p)
}
