function displayRecipe(response){
    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
});
}


function generateRecipe(event){
    event.preventDefault();

    let inputInstructions = document.querySelector("#user-instructions");

    let apiKey = "6513844e3b142o0a3et5b3de827d3a2f";
    let prompt = `Select a highly rated food recipe about ${inputInstructions.value}`;
    let context = "You are a food fanatic and have cooked many food recipes over the years. Display just the recipe in a list and in HTML format. Include title of recipe at the top and a link to the recipe page at the bottom.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe")
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="blink">Searching for a ${inputInstructions.value} recipe....</div>`;
    
    axios.get(apiURL).then(displayRecipe);
}



let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);