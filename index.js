
const result = document.getElementById("result");
const searchBtn = document .getElementById("search-btn");
let = ("https://www.themealdb.com/api/json/v1/1/search.php?s=");


searchBtn.addEventListener("click",() =>{
    let userInp = document.getElementById("user-search").ariaValueMax;
    if(userInp.length == 0){

        innerHTML = '<h3>Please enter a Meal to be served<h3>';
    } else {
        fetch(url + userInp)
        .then((response) => response.json())
        .then((data) => {
            let myMeal = data.meals[0];
            let count = 1;
            let ingredients = [];
            for (let i in myMeal){
                let ingredients ="";
                let measure = "";
                if (i.startsWith("strIngredient" && myMeal[i])){
                    ingredient= myMeal[i];
                    measure= myMeal['strMearure' + cunt];
                    count += 1;
                    ingredients.push('${measure} ${ingredient}');

                }
            }
            result.innerHTML = `
            <img src=${myMeal.strMealThumb}>
            <div class="details">
                <h2>${myMeal.strMeal}</h2>
                <h4>${myMeal.strArea}</h4>
            </div>
            <div id = "recipe">
            <button id = "hide-recipe">
            <pr id = "instrunctions">${myMeal.strInstructions}>
            <div>
            
    <div id="payslip">
    <button id="removeSlip">X</button>
    <pre id="receipt"></pre>
</div>

<button id="payUp">Pay For Meal</button>
<button id="show-recipe"></button>

<div id="purchase-form" style="display: none;">
<h3>Enter your purchase details:</h3>
<input type="text" id="name" placeholder="Name" required>
<input type="number" id="order" placeholder="How many plates?" required>
<input type="email" id="email" placeholder="Email" required>
<input type="text" id="address" placeholder="Address" required>
<button id="submit-purchase">Submit</button>
</div>
`;
})

    }
}
)
function suggestFood(){
    fetch(' http://localhost:3000/foods')
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