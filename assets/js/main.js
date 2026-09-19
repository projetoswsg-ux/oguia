// Ano dinâmico no footer
document.querySelectorAll('#ano').forEach(el => {
  el.textContent = new Date().getFullYear();
});
