<script>
    import { recipes } from '$lib/stores/recipes';
  
    let title = '';
    let ingredients = '';
    let instructions = '';
  
    function addRecipe() {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients,
        instructions
      };
      recipes.update(items => [...items, newRecipe]);
      window.location.href = '/';
    }
  </script>
  
  <div>
    <h1>Recetas</h1>
    <form on:submit|preventDefault={addRecipe}>
      <input type="text" bind:value={newRecipe.title} placeholder="Título" required />
      <input type="text" bind:value={newRecipe.ingredients} placeholder="Ingredientes" required />
      <textarea bind:value={newRecipe.instructions} placeholder="Instrucciones" required></textarea>
      <button type="submit" style="background-color: #007BFF; color: white;">Agregar Nueva Receta</button>
    </form>
  </div>
  