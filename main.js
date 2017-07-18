const ul = document.getElementById('recipes');
const submit = document.getElementById('submit');
submit.addEventListener('click', fetchData);



function fetchData(event){
  let searchterm = document.getElementById('input').value;
  let url = `http://www.recipepuppy.com/api/?q=${searchterm}`

  fetch(url)
  .then((response) => response.json())
  .then(data => {

  })

  .catch(error => {
    console.log(error);

  });
}
