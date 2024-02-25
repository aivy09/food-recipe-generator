function generateRecipe(event){
    event.preventDefault();

    new Typewriter("#recipe", {
        strings: "Flour",
        autoStart: true,
        delay: 1,
        cursor: "",

});

}



let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);