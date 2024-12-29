const formEl = document.getElementById("recipeForm");

let storedRecipe = JSON.parse(localStorage.getItem("data")) || [];

// if (!Array.isArray(storedRecipe)) {
//   storedRecipe = [];
// }

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelectorAll("input");

  const obj = {};

  for (let items of input) {
    obj[items.name] = items.value;
  }
  console.log("obj", obj);

  storedRecipe.push(obj)

  localStorage.setItem("data", JSON.stringify(storedRecipe));

  formEl.reset();
});






























// const mainDiv=document.getElementById("Dynamiccards");






// document.addEventListener("DOMContentLoaded", () => {
    
//     const recipeForm = document.getElementById("recipeForm");
//     console.log(recipeForm)
//     if (recipeForm) {
//         recipeForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//   console.log("submitted")
//         // Get form values 
//         const newRecipe = {
//             name: document.getElementById("name").value.trim(),
//             prepTimeMinutes: document.getElementById("prepTimeMinutes").value.trim(),
//             cookTimeMinutes: document.getElementById("cookTimeMinutes").value.trim(),
//             servings: document.getElementById("servings").value.trim(),
//             difficulty: document.getElementById("difficulty").value.trim(),
//             cuisine: document.getElementById("cuisine").value.trim(),
//             image: document.getElementById("image").value.trim(),
//         };
//   console.log(newRecipe)
//         // Validate required fields
//         if (!newRecipe.name || !newRecipe.prepTimeMinutes || !newRecipe.image) {
//           alert("Please fill in all required fields!");
//           return;
//         }
  
//         // Retrieve existing data from local storage
//         const recipeData =JSON.parse(localStorage.getItem("data")) || [];
  
//         // Add new character to local storage
//         console.log(recipeData)
//         recipeData.recipes.push(newRecipe);
//         localStorage.setItem("data", JSON.stringify(recipeData));
//         console.log(recipeData)
  
//         // Reset form
//         recipeForm.reset();
  
//         // Add new character to the displayed cards
//         const newRecipeCard = `
//           <div class="border border-secondary rounded pb-4 w-25 text-center m-4">
//             <img src="${newRecipe.image}" class="w-100" alt="${newRecipe.name}" />
//             <h3 class="heading mt-4"> ${newRecipe.name}</h3>
//             <p class="m-0">preptimeminutes: ${newRecipe.prepTimeMinutes}</p>
//             <p class="m-0">cooktimeminutes: ${newRecipe.cookTimeMinutes}</p>
//             <p class="m-0">servings: ${newRecipe.servings}</p>
//             <p class="m-0">difficulty: ${newRecipe.difficulty}</p>
//              <p class="m-0">Cuisine: ${newRecipe.cuisine}</p>
//               <p class="m-0">imgage: ${newRecipe.image}</p>
//             <button class="btn btn-outline-danger mt-3">Select</button>
//           </div>`;
// console.log(mainDiv)
//         mainDiv.innerHTML += newRecipeCard;
  
//         // Notify the user
//         alert("Recipe added successfully!");
//       });
//     }
//   });


// const formEl = document.getElementById("form");

// // Retrieve user data from localStorage or initialize as an empty array if none exists
// let storedProduct = JSON.parse(localStorage.getItem("data")) || [];  // default to empty array if null

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
  
//   const input = document.querySelectorAll("input");
//   const obj = {};

//   // Collect the form input values
//   for (let items of input) {
//     obj[items.name] = items.value;
//   }
// console.log("obj",obj)
//   // Push new product to storedProduct array
//   storedProduct.push(obj);

//   // Save updated storedProduct array to localStorage
//   localStorage.setItem("data", JSON.stringify(storedProduct));

//   // Optionally reset the form
//   formEl.reset();
  
//   // Optionally display the added card immediately on this page
//  
// });