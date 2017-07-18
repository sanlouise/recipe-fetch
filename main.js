const ul = document.getElementById('recipes');
const submit = document.getElementById('submit');
const wrapper = document.querySelector(".wrapper");
submit.addEventListener('click', fetchData);

function fetchData(event){
  let searchterm = document.getElementById('input').value;
  let url = `http://www.recipepuppy.com/api/?q=${searchterm}`

  fetch(url)
  .then((response) => response.json())
  .then(data => {
    for (let i = 0; i < data.results.length; i++) {

      let wholeRecipe = document.createElement("div")
      let wholeRecipeLink = document.createElement("a")
      let recipeTitle = document.createElement("li");
      let recipeThumbnail = document.createElement("li");

      wrapper.appendChild(wholeRecipe);
      wholeRecipe.appendChild(wholeRecipeLink);
      wholeRecipeLink.appendChild(recipeTitle);
      wholeRecipeLink.appendChild(recipeThumbnail);

      wholeRecipeLink.setAttribute("href", data.results[i].href);
      recipeTitle.innerHTML += data.results[i].title

      if (!data.results[i].thumbnail) {
        recipeThumbnail.innerHTML += `<img src="${'http://via.placeholder.com/200x200'}" />`
      }
      else {
        recipeThumbnail.innerHTML += `<img src="${data.results[i].thumbnail}" />`
      }
    }
  })

  .catch(error => {
    console.log(error);
  });
}
