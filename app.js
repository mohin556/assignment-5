// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(res => res.json())
// .then(data => console.log(data))
const searchItem = ()=>{
    const searchText = document.getElementById('searchText').value ;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    fetch(url)
    .then(res=> res.json())
    .then(data => displayItem(data.meals))
}
    
const displayItem = items =>{
    const list = document.getElementById('list')
    items.forEach( item => {
        console.log(item)
        const mealDiv= document.createElement('div');
        mealDiv.className = 'picture';
        mealDiv.innerHTML = `
         <div onClick="displayDetails('${item.idMeal}')" >
         
         <img src=${item.strMealThumb} alt="" width="380" height="350">
         <h3> ${item.strArea} </h3>
         </div>

        `
        
        list.appendChild(mealDiv);
    })
}

const displayDetails = (food,detail) =>{
    // console.log(food)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food}`
   fetch(url)
   .then(res=> res.json())
   .then(data => displayMeals(data.meals[0]))
}
const displayMeals = meals  =>{
     console.log(meals)
    const food = document.getElementById('food')
    // const Display = document.getElementById('mealss');
    const foodDiv= document.createElement('div');
    foodDiv.className = 'meals';

    foodDiv.innerHTML = `
        <img src="${meals.strMealThumb}" alt="" width="490" height="320"  >
        <h2>  ${meals.strMeal}    </h2>
        <h3> Ingredients : </h4>
       <div class="text" >
       <p>1 cup ${meals.strIngredient2}  </p>
       <p>1 cup ${meals.strIngredient3}    </p>
       <p>1 table ${meals.strIngredient4}    </p>
       <p>1 cup ${meals.strIngredient2}    </p>
       <p>0.5 cup ${meals.strIngredient3}    </p>
       <p>0.5 cup ${meals.strIngredient4}    </p>
       <p>1 cup  ${meals.strIngredient2}    </p>
       <p>1 cup  ${meals.strIngredient3}    </p>
       <p>0.5 cup ${meals.strIngredient4}    </p>
       <p>0.5 cup ${meals.strIngredient4}    </p>
       </div>


    `;
    food.appendChild(foodDiv)
    
}
// '${item.strMeal}'