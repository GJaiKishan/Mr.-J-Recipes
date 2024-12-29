const mainDiv = document.getElementById("Dynamiccards");

const asyncFunc = async () => {
  try {
    const data = await fetch("https://dummyjson.com/recipes");
    console.log(data, "first data");
    const response = await data.json();
    console.log(response);

    mainDiv.innerHTML = "";
    return response.recipes;s

  } catch (error) {
    console.log(error, "error");
  } finally {
    console.log("Task Completed");
  }
};

const createcards = (data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i], "${i+1}th product");
    const recipecard = ` <div class="cardRep border border-secondary rounded p-3 w-25 text-center m-4"><img src="${data[i].image}" alt="Classic Margherita Pizza">
        <h2>${data[i].name}</h2>
        <p class="details">
            <strong>Prep Time:</strong> ${data[i].prepTimeMinutes} | 
            <strong>Cook Time:</strong> ${data[i].cookTimeMinutes} | 
            <strong>Servings:</strong>${data[i].servings} <br>
            <strong>Difficulty:</strong> ${data[i].difficulty} | 
            <strong>Cuisine:</strong> ${data[i].cuisine}
        </p>
         </div>`;

    mainDiv.innerHTML += recipecard;
  }
};

const allRecipe = JSON.parse(localStorage.getItem("data")) || asyncFunc();

createcards(allRecipe.recipes);






























































// const asyncFunc = async () => {
//     try {
// // Check if data is already in local storage
// const recipeData = localStorage.getItem("data");

// // if (recipeData) {
// // console.log("Data already exists in local storage.");
// // createcards(JSON.parse(recipeData)); // Use existing data
// //   return;
// // }
        
//         const data =await fetch("https://dummyjson.com/recipes");
//         console.log(data,"first data");
//         const response = await data.json();
//         console.log(response);
//         localStorage.setItem("data",JSON.stringify(response));
//         createcards(response.recipes);
//     } catch (error) {
//         console.log(error,"error");
//     } finally {
//         console.log ("Task Completed");
//     }
// }


// const mainDiv=document.getElementById("Dynamiccards");


// const createcards = (data)=>  {
//     for(let i=0;i<data.length;i++){
//         console.log(data[i], '${i+1}th product');  
//         const recipecard =` <div class="cardRep border border-secondary rounded p-3 w-25 text-center m-4"><img src="${data[i].image}" alt="Classic Margherita Pizza">
//         <h2>${data[i].name}</h2>
//         <p class="details">
//             <strong>Prep Time:</strong> ${data[i].prepTimeMinutes} | 
//             <strong>Cook Time:</strong> ${data[i].cookTimeMinutes} | 
//             <strong>Servings:</strong>${data[i].servings} <br>
//             <strong>Difficulty:</strong> ${data[i].difficulty} | 
//             <strong>Cuisine:</strong> ${data[i].cuisine}
//         </p>
//          </div>`;
       

//         mainDiv.innerHTML += recipecard; }
// }

// asyncFunc(); 
