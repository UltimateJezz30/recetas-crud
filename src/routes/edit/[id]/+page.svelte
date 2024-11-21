<script>
    import { recipes } from '$lib/stores/recipes';
    import { onMount } from 'svelte';
  
    export let params;
    let title = '';
    let ingredients = '';
    let instructions = '';
  
    onMount(() => {
      recipes.subscribe(items => {
        const recipe = items.find(r => r.id === +params.id);
        if (recipe) {
          title = recipe.title;
          ingredients = recipe.ingredients;
          instructions = recipe.instructions;
        }
      });
    });
  
    function saveRecipe() {
      recipes.update(items =>
        items.map(r =>
          r.id === +params.id
            ? { ...r, title, ingredients, instructions }
            : r
        )
      );
      window.location.href = '/';
    }
  </script>
  
  <div class="container">
    <h1>Editar Receta</h1>
    <form on:submit|preventDefault={saveRecipe}>
      <input bind:value={title} placeholder="Título" />
      <textarea bind:value={ingredients} placeholder="Ingredientes"></textarea>
      <textarea bind:value={instructions} placeholder="Instrucciones"></textarea>
      <button type="submit">Guardar</button>
    </form>
  </div>
  