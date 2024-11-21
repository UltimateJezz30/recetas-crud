<script>
  import { recipes } from '$lib/stores/recipes';
  let newRecipe = { title: '', ingredients: '', instructions: '' };
  let editingRecipeId = null;

  function addRecipe() {
    if (newRecipe.title && newRecipe.ingredients && newRecipe.instructions) {
      recipes.update(items => [...items, { ...newRecipe, id: Date.now() }]);
      resetForm();
    }
  }

  function editRecipe(id) {
    const recipeToEdit = $recipes.find(recipe => recipe.id === id);
    newRecipe = { ...recipeToEdit };
    editingRecipeId = id;
  }

  function updateRecipe() {
    recipes.update(items => items.map(recipe => recipe.id === editingRecipeId ? newRecipe : recipe));
    resetForm();
  }

  function resetForm() {
    newRecipe = { title: '', ingredients: '', instructions: '' };
    editingRecipeId = null;
  }

  function deleteRecipe(id) {
    recipes.update(items => items.filter(recipe => recipe.id !== id));
  }
</script>

<div class="container">
  <h1>Recetas</h1>
  <form on:submit|preventDefault={editingRecipeId ? updateRecipe : addRecipe}>
    <input type="text" bind:value={newRecipe.title} placeholder="Título" required />
    <input type="text" bind:value={newRecipe.ingredients} placeholder="Ingredientes" required />
    <textarea bind:value={newRecipe.instructions} placeholder="Instrucciones" required></textarea>
    <button type="submit" style="background-color: #007BFF; color: white;">
      {editingRecipeId ? 'Actualizar Receta' : 'Agregar Nueva Receta'}
    </button>
  </form>
  
  <ul>
    {#each $recipes as recipe}
      <li>
        <h2>{recipe.title}</h2>
        <p><strong>Ingredientes:</strong> {recipe.ingredients}</p>
        <p><strong>Instrucciones:</strong> {recipe.instructions}</p>
        <button on:click={() => editRecipe(recipe.id)}>Editar</button>
        <button on:click={() => deleteRecipe(recipe.id)}>Eliminar</button>
      </li>
    {/each}
  </ul>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input, textarea {
    width: 80%;
    max-width: 400px;
    margin-bottom: 10px;
    padding: 8px;
  }

  textarea {
    height: 100px;
  }
</style>
