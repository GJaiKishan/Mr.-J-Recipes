


// const asyncFunc = async () => {
//     try {
//         const data =await fetch("https://dummyjson.com/recipes");
//         console.log(data,"first data");
//         const response = await data.json();
//         console.log(response);
//         createcards(response)
//     } catch (error) {
//         console.log(error,"error");
//     } finally {
//         console.log ("Task Completed");
//     }
// }

// asyncFunc();

// const createcards = (data)=>  {
//     for(let i=0;i<data.length;i++){
//         console.log(data[i], '$[i+1]th product');    
//     }
// }