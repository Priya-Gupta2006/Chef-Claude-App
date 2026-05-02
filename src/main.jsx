import React from "react"
import ClaudeRecipe  from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";


export default function Main() {

    const [ingredients,setIngredients]=React.useState(["all main spices","pasta","chilli","tomato"]);
    const [recipeShown,setRecipeShown]=React.useState(false);


    function addIngredient(formData){
      const newIngredient= formData.get("ingredient");
      setIngredients(prevItems => [...prevItems,newIngredient])

    }

    function toggleRecipeShown(){
      setRecipeShown(prev => !prev);
    }
    
    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
           {ingredients.length > 0 && <IngredientsList toggleRecipeShown={toggleRecipeShown} ingredients={ingredients} />}
            {recipeShown && <ClaudeRecipe/>}
        </main>
    )
}