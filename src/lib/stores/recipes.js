import { writable } from 'svelte/store';

export const recipes = writable([
  { id: 1, title: 'Pizza Margarita', ingredients: 'Harina, tomate, queso', instructions: 'Hornear por 15 minutos.' },
  { id: 2, title: 'Tacos de Pollo', ingredients: 'Pollo, tortillas, salsa', instructions: 'Envolver el pollo en la tortilla.' }
]);
