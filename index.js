function suggestFood(){
    fetch()
    .then(res => res.json())
    .then(mov =>mealSugest(mov))
}
suggestFoods();

function mealSuggest(foodStuff) {
  let meals = document.getElementById('foods')
  
  for(let dub of foodStuff){
    let mealList = document.createElement('li')
    
    mealList.innerHTML = `<img src="${dub.image}">
    <h3>${dub.name}</h3>
    <p>Description: ${dub.description}</p>`;
    meals.appendChild(mealList);
  }                 

}
//const result = document.getElementById("result");
//const searchBtn = document .getElementById("search-btn");
//let = ("https://www.themealdb.com/api/json/v1/1/search.php?s=");
