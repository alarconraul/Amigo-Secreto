// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Obtener referencias a elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Agregar amigo a la lista (función global porque se llama desde onclick del HTML)
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  // Validación: no vacío
  if (!nombre) {
    alert('Por favor, ingresa un nombre.');
    return;
  }

  // Crear y agregar elemento <li> a la lista
  const li = document.createElement('li');
  li.textContent = nombre;
  listaAmigos.appendChild(li);

  // Limpiar input y volver a focusear para agregar más rápido
  inputAmigo.value = '';
  inputAmigo.focus();

  // Limpiar cualquier resultado previo (opcional)
  resultado.innerHTML = '';
}

// Sortear amigo (función global porque se llama desde onclick del HTML)
function sortearAmigo() {
  const items = Array.from(listaAmigos.querySelectorAll('li')).map(li => li.textContent);

  if (items.length === 0) {
    alert('La lista está vacía. Agrega al menos un amigo antes de sortear.');
    return;
  }

  const elegido = items[Math.floor(Math.random() * items.length)];

  // Mostrar el resultado en el <ul id="resultado">; usamos textContent para evitar inyección
  resultado.innerHTML = ''; // limpiar resultados anteriores
  const liRes = document.createElement('li');
  liRes.textContent = `El amigo elegido es: ${elegido}`;
  resultado.appendChild(liRes);

  // (opcional) desplazarse al resultado si está abajo de la pantalla
  liRes.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Soporte para agregar con Enter en el input
document.addEventListener('DOMContentLoaded', () => {
  inputAmigo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
});