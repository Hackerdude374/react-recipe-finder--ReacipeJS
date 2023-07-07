import React, { useEffect, useState } from 'react';

function RecipeItem({ recipe, handleDeleteRecipe }) {
  console.log(recipe);
  console.log("THE RECIPE ID: " + recipe.id);
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/NewRecipeData/${recipe.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Recipe deleted successfully
        // Update the state or perform any other necessary action
        window.location.reload();
      } else {
        // Handle the error case, e.g., show an error message
        console.error('Error deleting recipe');
      }
    } catch (error) {
      console.error(error);
      // Handle the error case, e.g., show an error message
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/NewRecipeData/${editedRecipe.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedRecipe),
      });

      if (response.ok) {
        // Recipe updated successfully
        // Update the state or perform any other necessary action
        setIsEditing(false);
        window.location.reload();
      } else {
        // Handle the error case, e.g., show an error message
        console.error('Error updating recipe');
      }
    } catch (error) {
      console.error(error);
      // Handle the error case, e.g., show an error message
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      } else if (event.key === 'x' || event.key === 'X') {
        handleDelete();
      } else if (event.key === 'e' || event.key === 'E') {
        handleEdit();
      }
      else if (event.key === 's' || event.key === 'S') {
        event.preventDefault(); // Prevent the default 's' key behavior (e.g., saving the form)
        handleSubmit();
      }
    };

    if (isPopupOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  },  [isPopupOpen, handleDelete, handleSubmit]);


  return (
    <div className="recipe-item" onClick={togglePopup}>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <button>Delete (Press X), Exit Popup (Press Esc), Edit Recipe (Press E)</button>
      <h3>{recipe.name}</h3>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h3>Edit Recipe</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editedRecipe.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Ingredients:
            <textarea
              name="ingredients"
              value={editedRecipe.ingredients.join('\n')}
              onChange={handleChange}
            />
          </label>
          <label>
            Instructions:
            <textarea
              name="instructions"
              value={editedRecipe.instructions.join('\n')}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          {isPopupOpen && (
            <div className="popup">
              <h3>{recipe.name}</h3>
              <h4>Ingredients:</h4>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Instructions:</h4>
              <ol>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default RecipeItem;
